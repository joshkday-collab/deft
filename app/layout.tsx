import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Deft — Recover the jobs you already paid to win",
    template: "%s · Deft",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Deft",
    "Deft Launch",
    "consultancy",
    "missed calls",
    "lead capture",
    "WhatsApp",
    "revenue recovery",
    "business systems",
  ],
  authors: [{ name: "Josh Day", url: `mailto:${site.email}` }],
  openGraph: {
    title: "Deft — You sell. We run the backend.",
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deft — You sell. We run the backend.",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  email: site.email,
  url: site.url,
  areaServed: "GB",
  founder: {
    "@type": "Person",
    name: "Josh Day",
    email: site.email,
  },
  offers: {
    "@type": "OfferCatalog",
    name: "Deft services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Deft Launch",
        description:
          "Missed-call and lead capture to WhatsApp — name, number, job — to the van. 3-month minimum, then month-to-month.",
        priceCurrency: "GBP",
        priceSpecification: [
          {
            "@type": "UnitPriceSpecification",
            price: 497,
            priceCurrency: "GBP",
            name: "Setup (one-off)",
          },
          {
            "@type": "UnitPriceSpecification",
            price: 79,
            priceCurrency: "GBP",
            unitText: "MONTH",
            name: "Monthly",
          },
        ],
      },
      "Websites",
      "Automation & workflows",
      "Ops & dashboards",
      "Custom AI",
      "Custom builds",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
