import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anywrk",
  description: "Request a service and the closest available artisan gets the job first.",
};

export default function Anywrk() {
  return (
    <>
      <section className="w" style={{ paddingTop: 64 }}>
        <span className="pill"><span className="dot g" />Onboarding artisans · customers opening soon</span>
        <h1 style={{ marginTop: 24, maxWidth: 900 }}>The closest artisan gets the job first.</h1>
        <p className="mut lead">Anywrk connects people who need a service with skilled artisans nearby, ranked by distance.</p>
      </section>

      <section className="w sec">
        <div className="grid c" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          <svg viewBox="0 0 560 400" role="img" aria-label="A service request pin with the nearest of five artisans highlighted" className="map">
            <path d="M0 100H560M0 220H560M0 330H560M110 0V400M260 0V400M420 0V400" stroke="#e4ebe6" strokeWidth="10" />
            <g fill="#9fb0a7"><circle cx="90" cy="70" r="9" /><circle cx="470" cy="90" r="9" /><circle cx="500" cy="300" r="9" /><circle cx="60" cy="320" r="9" /></g>
            <line x1="280" y1="200" x2="350" y2="260" stroke="#0e4d3a" strokeWidth="3" strokeDasharray="6 6" />
            <circle cx="350" cy="260" r="22" fill="#0e4d3a" opacity=".15" />
            <circle cx="350" cy="260" r="10" fill="#0e4d3a" />
            <circle cx="280" cy="200" r="12" fill="#ff7a1a" />
            <circle cx="280" cy="200" r="24" fill="none" stroke="#ff7a1a" strokeWidth="2" />
            <text x="366" y="266" fontSize="15" fill="#0f1f1a">Nearest</text>
          </svg>
          <div>
            <h2>How it works</h2>
            <div className="row"><b>Artisans sign up</b><span className="mut">with their trade and location</span></div>
            <div className="row"><b>A customer asks</b><span className="mut">for a service nearby</span></div>
            <div className="row"><b>Closest goes first</b><span className="mut">the nearest available artisan is offered the job</span></div>
          </div>
        </div>
      </section>

      <section className="w" style={{ paddingBottom: 40 }}>
        <div className="card">
          <b>Your location, your control</b>
          <p className="mut">[CONFIRM: when location is collected, who sees it, how to turn it off.] Read our privacy policy.</p>
        </div>
        <p className="mut" style={{ marginTop: 20 }}>Artisans onboarded: [YOUR NUMBER] · Trades: [YOUR TRADES] · Cities: [YOUR CITIES]</p>
      </section>
    </>
  );
}
