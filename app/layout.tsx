import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { faqs, keywords, launch, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Deft",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [...keywords],
  authors: [{ name: "Josh Day", url: `mailto:${site.email}` }],
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Deft Launch",
    description: site.description,
    email: site.email,
    url: site.url,
    areaServed: ["Greater Manchester", "GB"],
    founder: {
      "@type": "Person",
      name: "Josh Day",
      email: site.email,
    },
    offers: {
      "@type": "Offer",
      name: "Deft Launch",
      description: launch.sub,
      priceCurrency: "GBP",
      priceSpecification: [
        {
          "@type": "UnitPriceSpecification",
          price: launch.setup,
          priceCurrency: "GBP",
          name: "Setup on acceptance",
        },
        {
          "@type": "UnitPriceSpecification",
          price: launch.monthly,
          priceCurrency: "GBP",
          unitText: "MONTH",
          name: "Monthly from go-live",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
