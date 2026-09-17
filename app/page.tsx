import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Launch } from "@/components/launch";
import { Pricing } from "@/components/pricing";
import { Roi } from "@/components/roi";
import { Sectors } from "@/components/sectors";
import { Services } from "@/components/services";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Sectors />
        <Launch />
        <Roi />
        <Services />
        <Pricing />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
