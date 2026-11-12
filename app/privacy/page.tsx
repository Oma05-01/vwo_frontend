import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Privacy() {
  return (
    <section className="w sec" style={{ maxWidth: 760 }}>
      <h1 style={{ fontSize: 48 }}>Privacy policy</h1>
      <p className="mut lead">
        {/* TODO: have this reviewed. Cover what ReachOut and Anywrk collect (messages, photos, location),
            why, how long you keep it, who sees it, and how people can access or delete it (NDPA). */}
        {site.legalName} publishes its full privacy policy here. [Coming soon..]
      </p>
    </section>
  );
}
