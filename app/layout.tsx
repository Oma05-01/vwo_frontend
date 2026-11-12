import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortName}: real-world problems in, working systems out`, template: `%s | ${site.shortName}` },
  description: "We build software for places where information is messy and the stakes are real.",
  openGraph: { siteName: site.shortName, type: "website" },
  // Add the Facebook verification tag right here using the 'other' property:
  other: {
    'facebook-domain-verification': 'y9uk9yf6fwuu5z5xo5rz1g900jxg4h',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}