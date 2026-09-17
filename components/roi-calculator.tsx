"use client";

import { useId, useState } from "react";
import { callbackMailto, formatGbp, launch } from "@/lib/site";

const DEFAULT_MISSED = 3;
const DEFAULT_VALUE = 200;

export function RoiCalculator() {
  const missedId = useId();
  const valueId = useId();
  const [missed, setMissed] = useState(DEFAULT_MISSED);
  const [value, setValue] = useState(DEFAULT_VALUE);

  const recovered = missed * value;
  const afterMonthly = recovered - launch.monthly;
  const paybackMonths =
    recovered > 0 ? launch.setup / recovered : Number.POSITIVE_INFINITY;
  const jobsToCoverSetup =
    value > 0 ? launch.setup / value : Number.POSITIVE_INFINITY;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <form
        className="rounded-3xl border border-line bg-ink-raised/60 p-6 sm:p-8"
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset className="space-y-6">
          <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Your numbers
          </legend>
          <div>
            <label htmlFor={missedId} className="text-sm text-paper">
              Missed jobs per month
            </label>
            <input
              id={missedId}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={missed}
              onChange={(event) =>
                setMissed(clampNumber(event.target.value, 0, 999))
              }
              className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-lg text-paper outline-none focus-visible:border-gold"
            />
          </div>
          <div>
            <label htmlFor={valueId} className="text-sm text-paper">
              Average job value (£)
            </label>
            <input
              id={valueId}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={value}
              onChange={(event) =>
                setValue(clampNumber(event.target.value, 0, 100000))
              }
              className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-lg text-paper outline-none focus-visible:border-gold"
            />
          </div>
        </fieldset>
      </form>

      <div
        className="rounded-3xl border border-line bg-ink p-6 sm:p-8"
        aria-live="polite"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
          Against Launch
        </p>
        <dl className="mt-6 space-y-5">
          <Result
            label="Recovered revenue / month"
            value={formatGbp(recovered)}
          />
          <Result
            label={`Versus ${launch.monthlyLabel}`}
            value={
              recovered === 0
                ? "Enter a job value"
                : afterMonthly >= 0
                  ? `${formatGbp(afterMonthly)} left after the monthly`
                  : `${formatGbp(Math.abs(afterMonthly))} short of the monthly`
            }
          />
          <Result
            label={`${launch.setupLabel} payback`}
            value={
              recovered <= 0
                ? "Enter missed jobs and a job value"
                : paybackMonths < 1
                  ? "Inside the first month of recovered work"
                  : `${paybackMonths.toFixed(1)} months of recovered work`
            }
          />
          <Result
            label="Jobs that cover setup"
            value={
              value <= 0
                ? "Enter a job value"
                : jobsToCoverSetup <= 1
                  ? "One recovered job covers the setup"
                  : `${jobsToCoverSetup.toFixed(1)} recovered jobs`
            }
          />
        </dl>
        <a
          href={callbackMailto()}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm text-gold-bright hover:bg-gold/10"
        >
          Book a callback
        </a>
      </div>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-paper-dim">{label}</dt>
      <dd className="mt-1 font-serif text-2xl text-paper">{value}</dd>
    </div>
  );
}

function clampNumber(raw: string, min: number, max: number) {
  if (raw === "") return 0;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(max, Math.max(min, parsed));
}
