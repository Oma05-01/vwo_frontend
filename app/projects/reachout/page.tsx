import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReachOut",
  description: "Civic reports sent on WhatsApp become structured cases for municipal agencies.",
};

const steps = [
  ["1. Message", "Text, location details and a compressed photo arrive via WhatsApp."],
  ["2. Extract", "An LLM parses it into category, location and severity, validated by strict schemas."],
  ["3. De-duplicate", "Retries are blocked by a short-lived cache. Repeat reports merge into one master case."],
  ["4. Case", "A clean record reaches the team that can resolve it."],
];

export default function ReachOut() {
  return (
    <>
      <section className="w" style={{ paddingTop: 64 }}>
        <span className="pill"><span className="dot" />Live · WhatsApp Cloud API: Meta business verification pending</span>
        <h1 style={{ marginTop: 24, maxWidth: 900 }}>Report it where you already chat.</h1>
        <p className="mut lead">ReachOut turns a citizen&rsquo;s WhatsApp message into a structured case for municipal agencies. No app to install, no portal to learn.</p>
      </section>

      <section className="w sec">
        <h2>How a report moves</h2>
        <div className="grid">
          {steps.map(([t, d]) => (
            <div className="card" key={t}><b>{t}</b><p className="mut">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="w" style={{ paddingBottom: 40 }}>
        <div className="dark">
          <h2 style={{ marginBottom: 8 }}>Under the hood</h2>
          <p style={{ margin: 0, fontSize: 17 }}>WhatsApp Cloud API · Pydantic schemas · Redis TTL cache · PostgreSQL routing matrix · Async workers for extraction and media</p>
        </div>
        <p className="mut" style={{ marginTop: 20 }}>Reports submitted: [YOUR NUMBER] · Areas covered: [YOUR AREAS]</p>
      </section>
    </>
  );
}
