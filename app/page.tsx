import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w" style={{ paddingTop: 72 }}>
        <h1 style={{ maxWidth: 980 }}>Real-world problems in. Working systems out.</h1>
        <p className="mut lead" style={{ margin: "24px 0 40px" }}>
          We build software for the places where information is messy and the stakes are real: a citizen&rsquo;s complaint, an artisan&rsquo;s next job.
        </p>
        <div className="grid c" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <div className="card bob bubble">
            <p className="mut" style={{ margin: "0 0 8px", fontSize: 13 }}>WhatsApp · 09:41</p>
            <p style={{ margin: 0, fontSize: 18 }}>Gutter on Allen Ave don block since 3 days, water dey enter road. See photo.</p>
          </div>
          <div className="card">
            <div className="row"><span className="mut">Category</span><b>Drainage</b></div>
            <div className="row"><span className="mut">Location</span><b>Allen Avenue</b></div>
            <div className="row"><span className="mut">Severity</span><b>High</b></div>
            <div className="row"><span className="mut">Cluster</span><b>Merged into an open case</b></div>
          </div>
        </div>
      </section>

      <section id="projects" className="w sec">
        <h2>Current projects</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          <div className="card big">
            <span className="pill"><span className="dot" />Live</span>
            <h2 style={{ marginTop: 24 }}>ReachOut</h2>
            <p className="mut" style={{ fontSize: 17, margin: "0 0 20px" }}>Civic reports sent on WhatsApp become structured cases for the agencies that fix them.</p>
            <Link className="btn" href="/projects/reachout">See ReachOut</Link>
          </div>
          <div className="card big">
            <span className="pill"><span className="dot g" />Onboarding artisans</span>
            <h2 style={{ marginTop: 24 }}>Anywrk</h2>
            <p className="mut" style={{ fontSize: 17, margin: "0 0 20px" }}>Request a service and the closest available artisan gets the job first.</p>
            <Link className="btn" href="/projects/anywrk">See Anywrk</Link>
          </div>
        </div>
      </section>

      <section className="w" style={{ paddingBottom: 72 }}>
        <h2>What we do</h2>
        <div className="grid">
          <div><b>Messy input to clean data</b><p className="mut">LLM extraction held to strict schemas.</p></div>
          <div><b>Built for real networks</b><p className="mut">Light, fast and usable on mid-range phones.</p></div>
          <div><b>Production access</b><p className="mut">Registered company, so we can hold the API accounts our products need.</p></div>
        </div>
      </section>
    </>
  );
}
