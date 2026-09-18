"use client";

import { useEffect, useRef, useState } from "react";
import { demoScenes } from "@/lib/site";

const SCENE_MS = 15_000;

export function Demo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  function open() {
    dialogRef.current?.showModal();
    setIndex(0);
    setPlaying(true);
  }

  function close() {
    setPlaying(false);
    dialogRef.current?.close();
  }

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => {
      setIndex((current) => {
        if (current >= demoScenes.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, SCENE_MS);
    return () => window.clearTimeout(id);
  }, [playing, index]);

  const scene = demoScenes[index];
  const elapsedLabel = `${index + 1} of ${demoScenes.length}`;

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent-hover"
      >
        Play the one-minute demo
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(40rem,calc(100%-2rem))] border border-line bg-paper p-0 text-ink shadow-none"
        onClose={() => setPlaying(false)}
        onCancel={close}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="text-sm text-accent">One-minute demo · WhatsApp only</p>
          <button
            type="button"
            onClick={close}
            className="text-sm text-muted hover:text-ink"
          >
            Close
          </button>
        </div>

        <div className="px-5 py-8 sm:px-8">
          <p className="text-sm text-muted">
            {scene.label} · {elapsedLabel} · labeled placeholder, not a live
            number
          </p>
          <h2 className="mt-3 text-2xl font-medium leading-tight tracking-tight">
            {scene.title}
          </h2>
          <p className="mt-4 max-w-lg text-[1.0625rem] leading-[1.6] text-ink-soft">
            {scene.body}
          </p>

          {scene.label === "WhatsApp to the van" ? (
            <div className="mt-8 border border-line bg-paper-raised px-4 py-4 text-sm leading-[1.6]">
              <p className="text-muted">WhatsApp · to [van WhatsApp]</p>
              <p className="mt-3">Name: [caller name]</p>
              <p>Number: [callback number]</p>
              <p>Job: [what they need]</p>
              <p>Callback window: [when they can talk]</p>
            </div>
          ) : null}

          <ol className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
            {demoScenes.map((item, sceneIndex) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(sceneIndex);
                    setPlaying(true);
                  }}
                  className={
                    sceneIndex === index ? "text-accent" : "hover:text-ink"
                  }
                >
                  {item.label}
                </button>
                {sceneIndex < demoScenes.length - 1 ? (
                  <span aria-hidden="true"> →</span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
