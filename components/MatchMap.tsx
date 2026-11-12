"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// 3 = final frame. It is what server render, no-JS and reduced-motion visitors see.
type Phase = 0 | 1 | 2 | 3;

const PIN = { x: 280, y: 200 };

// Illustrative positions only (not real locations). d = distance from the pin in map units.
const ARTISANS = [
  { x: 350, y: 260, rank: 1, d: 92 },
  { x: 470, y: 90, rank: 2, d: 219 },
  { x: 90, y: 70, rank: 3, d: 230 },
  { x: 500, y: 300, rank: 4, d: 242 },
  { x: 60, y: 320, rank: 5, d: 250 },
];

const RING_RADIUS = 300;
const RING_MS = 2000;

// Light each artisan up at the moment the expanding ring reaches it.
const reachMs = (d: number) => Math.round((d / RING_RADIUS) * RING_MS);

// [phase, start time in ms]. Whole loop is about 7.7s.
const STEPS: [Phase, number][] = [
  [0, 0], // reset
  [1, 500], // pin drops
  [2, 1400], // ring scans, artisans light by distance
  [3, 3500], // nearest chosen, job offered, then hold
  [0, 7200],
];
const LOOP_MS = 7700;

export function MatchMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<Phase>(3);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let timers: number[] = [];
    const clear = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
    };
    const run = () => {
      clear();
      STEPS.forEach(([p, t]) => timers.push(window.setTimeout(() => setPhase(p), t)));
      timers.push(window.setTimeout(run, LOOP_MS));
    };

    // Only animate while on screen; park on the final frame otherwise.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
        else {
          clear();
          setPhase(3);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 560 400"
      role="img"
      aria-label="Illustration: a service request is placed and the nearest of five artisans is offered the job first"
      className="map mapx"
      data-phase={phase}
    >
      <path d="M0 100H560M0 220H560M0 330H560M110 0V400M260 0V400M420 0V400" stroke="#e4ebe6" strokeWidth="10" />

      <circle className="ring" cx={PIN.x} cy={PIN.y} r={RING_RADIUS} fill="none" stroke="#ff7a1a" strokeWidth="2" />

      <line
        className="link"
        x1={PIN.x}
        y1={PIN.y}
        x2={ARTISANS[0].x}
        y2={ARTISANS[0].y}
        pathLength={1}
        stroke="#0e4d3a"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle className="halo" cx={ARTISANS[0].x} cy={ARTISANS[0].y} r="22" fill="#0e4d3a" />

      {ARTISANS.map((a) => {
        const best = a.rank === 1;
        const style = { "--d": `${reachMs(a.d)}ms` } as CSSProperties;
        return (
          <g key={a.rank}>
            <circle className={best ? "dot best" : "dot"} cx={a.x} cy={a.y} r={best ? 10 : 9} style={style} />
            <text
              className={best ? "rk best" : "rk"}
              x={a.x}
              y={a.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="11"
              fontWeight="700"
              fill="#fff"
              style={style}
            >
              {a.rank}
            </text>
          </g>
        );
      })}

      <g className="pin">
        <circle cx={PIN.x} cy={PIN.y} r="12" fill="#ff7a1a" />
        <circle cx={PIN.x} cy={PIN.y} r="24" fill="none" stroke="#ff7a1a" strokeWidth="2" />
      </g>

      <g className="tag">
        <rect x="370" y="244" width="108" height="30" rx="15" fill="#0e4d3a" />
        <text x="424" y="259" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#fff">
          Job offered
        </text>
      </g>

      <text x="16" y="386" fontSize="11" fill="#4a5a53">
        Illustrative. Not real locations.
      </text>
    </svg>
  );
}