"use client";

import { useId, useState } from "react";
import { formatGbp, launch } from "@/lib/site";

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
    <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
      <form
        className="space-y-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset className="space-y-6">
          <legend className="text-sm text-muted">Your numbers</legend>
          <div>
            <label htmlFor={missedId} className="text-sm text-ink">
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
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-lg text-ink outline-none focus-visible:border-accent"
            />
          </div>
          <div>
            <label htmlFor={valueId} className="text-sm text-ink">
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
              className="mt-2 w-full border border-line bg-paper px-4 py-3 text-lg text-ink outline-none focus-visible:border-accent"
            />
          </div>
        </fieldset>
      </form>

      <div aria-live="polite">
        <dl className="space-y-6">
          <Result
            label="Recovered revenue / month"
            value={formatGbp(recovered)}
          />
          <Result
            label="Versus £79/month"
            value={
              recovered === 0
                ? "Enter a job value"
                : afterMonthly >= 0
                  ? `${formatGbp(afterMonthly)} left after the monthly`
                  : `${formatGbp(Math.abs(afterMonthly))} short of the monthly`
            }
          />
          <Result
            label="£497 setup payback"
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
      </div>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1 text-2xl font-medium tracking-tight text-ink">
        {value}
      </dd>
    </div>
  );
}

function clampNumber(raw: string, min: number, max: number) {
  if (raw === "") return 0;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(max, Math.max(min, parsed));
}
