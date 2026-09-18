import { Callback } from "@/components/callback";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { How } from "@/components/how";
import { Launch } from "@/components/launch";
import { Roi } from "@/components/roi";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <How />
        <Launch />
        <Roi />
        <Faq />
        <Callback />
      </main>
      <Footer />
    </div>
  );
}
