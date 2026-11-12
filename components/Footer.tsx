import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w" style={{ paddingBottom: 56 }}>
      <div className="dark cta">
        <div>
          <h2>Have a problem worth building for?</h2>
          <p style={{ marginTop: 8 }}>{site.email}</p>
        </div>
        <a className="btn light" href={`mailto:${site.email}`}>Get in touch</a>
      </div>
      <p className="mut" style={{ fontSize: 14, margin: "28px 0 0" }}>
        {site.legalName} · {site.city}, Nigeria · {site.rc} · <Link href="/privacy">Privacy</Link>
      </p>
    </footer>
  );
}
