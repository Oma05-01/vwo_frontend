import type { Metadata } from "next";
import { MatchMap } from "@/components/MatchMap";
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
          <MatchMap />
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
