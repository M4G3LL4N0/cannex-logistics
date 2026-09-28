"use client";

import { useState } from "react";

export function CustodyWalk({ steps }: { steps: string[] }) {
  const [index, setIndex] = useState(0);
  const step = steps[index] ?? steps[0];
  return (
    <div className="mt-8 rounded-2xl border border-white/15 bg-black/30 p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Demo handoff · not a live transfer</p>
      <p className="mt-3 text-lg font-medium text-white">
        {index + 1}. {step}
      </p>
      <button
        type="button"
        className="mt-4 rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-950"
        onClick={() => setIndex((current) => (current + 1) % steps.length)}
      >
        Next handoff
      </button>
    </div>
  );
}
