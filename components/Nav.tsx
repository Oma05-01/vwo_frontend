import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="w nav">
      <Link href="/" style={{ fontSize: 19, fontWeight: 700, textDecoration: "none", margin: 0 }}>
        {site.shortName}
      </Link>
      <nav aria-label="Main">
        <Link href="/#projects">Projects</Link>
        <a href={`mailto:${site.email}`}>Contact</a>
      </nav>
    </header>
  );
}
