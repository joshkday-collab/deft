import { RoiCalculator } from "@/components/roi-calculator";

export function Roi() {
  return (
    <section id="recover" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm text-accent">Recover</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Your missed jobs. Your job value.
        </h2>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.6] text-ink-soft">
          Missed jobs per month × your average job value, set against £79/month
          and the £497 setup payback. The numbers are yours.
        </p>
        <RoiCalculator />
      </div>
    </section>
  );
}
