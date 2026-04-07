import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import "@/styles/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://embarqx.com"),
  title: {
    default: "EmbarqX — Premium Themed Cruise Platform",
    template: "%s | EmbarqX",
  },
  description:
    "EmbarqX creates premium themed cruise concepts that unite culture, celebrity, community, luxury, and destination into unforgettable voyages built for scale. Investor and partner inquiries welcome.",
  keywords: [
    "themed cruise",
    "premium cruise experiences",
    "cruise investment",
    "celebrity cruise",
    "luxury cruise platform",
    "cruise partnership",
    "entertainment cruise",
    "cruise sponsor",
  ],
  openGraph: {
    type: "website",
    siteName: "EmbarqX",
    title: "EmbarqX — Premium Themed Cruise Platform",
    description:
      "Where themed worlds come to sea. A premium platform for originating, packaging, and scaling iconic themed cruise experiences.",
    images: [
      {
        url: "/assets/og/embarqx-og.jpg",
        width: 1200,
        height: 630,
        alt: "EmbarqX — Premium Themed Cruise Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmbarqX — Premium Themed Cruise Platform",
    description: "Where themed worlds come to sea.",
    images: ["/assets/og/embarqx-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-bg-deep text-fg-primary antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] btn-primary">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
