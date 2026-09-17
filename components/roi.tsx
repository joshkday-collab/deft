import { launch } from "@/lib/site";
import { RoiCalculator } from "@/components/roi-calculator";

export function Roi() {
  return (
    <section id="recover" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
            Recover
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-paper sm:text-5xl">
            What do missed jobs actually cost?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper-dim sm:text-lg">
            Missed jobs per month × average job value, then set that against{" "}
            {launch.monthlyLabel} and the {launch.setupLabel} payback. The
            numbers are yours — Launch does not invent a job value.
          </p>
        </div>
        <RoiCalculator />
      </div>
    </section>
  );
}
