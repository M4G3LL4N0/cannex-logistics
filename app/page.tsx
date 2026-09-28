import type { Metadata } from "next";
import Link from "next/link";
import { CustodyWalk } from "@/components/CustodyWalk";

export const metadata: Metadata = {
  title: "Cannex Logistics — licensed cannabis warehousing and routing",
  description:
    "Cannex Logistics is software for licensed cannabis operators: warehouse lots, chain-of-custody transfers, and route coordination. Demo surfaces, not a live network.",
};

const layers = [
  {
    title: "Warehouse lots",
    body: "Track what is stored, reserved, or on hold by SKU, origin, and licensed facility — temperature and humidity sit next to the lot, not in a side spreadsheet.",
  },
  {
    title: "Chain of custody",
    body: "Each transfer keeps a visible handoff: who released it, who is moving it, and which license window it has to land in.",
  },
  {
    title: "Route board",
    body: "Dispatch sees lanes, ETAs, and exception states on one board so growers, extractors, and retailers are not coordinating over text threads.",
  },
];

const steps = [
  "Intake a licensed lot into a hub",
  "Reserve or hold it against a transfer",
  "Dispatch a compliant route",
  "Close custody at the receiving license",
];

const transfers = [
  {
    state: "Hub intake",
    detail: "Flower lot waiting on temp check",
    window: "License window 18:00–22:00",
    tone: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  },
  {
    state: "Reserved",
    detail: "Extract cases staged for a retailer window",
    window: "Receiving license 7A-4421",
    tone: "border-amber-200/25 bg-amber-200/10 text-amber-100",
  },
  {
    state: "In transit",
    detail: "Pre-roll cartons on a licensed carrier",
    window: "Lane Hub-North → Retail-4",
    tone: "border-sky-300/25 bg-sky-300/10 text-sky-100",
  },
  {
    state: "Hold",
    detail: "Edibles paused for a paperwork mismatch",
    window: "Custody open — not closed",
    tone: "border-rose-300/25 bg-rose-300/10 text-rose-100",
  },
];

export default function Home() {
  return (
    <div className="cannex-home min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-100">
          Cannex
        </Link>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <Link href="/how-it-works" className="hover:text-white">
            How it works
          </Link>
          <a
            href="mailto:?subject=Cannex%20Logistics%20operator%20briefing&body=I%20want%20a%20briefing%20on%20the%20licensed%20warehousing%20and%20routing%20software."
            className="rounded-full bg-emerald-300 px-4 py-2 font-semibold text-emerald-950"
          >
            Request a briefing
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Licensed cannabis logistics
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Warehouse the lot. Route the transfer. Close custody.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Cannex Logistics is a command surface for licensed growers, distributors,
              extractors, retailers, and transport operators. It is a working product
              demo for warehousing, routing, and compliance visibility — not a live
              statewide network.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:?subject=Cannex%20Logistics%20operator%20briefing&body=I%20want%20a%20briefing%20on%20the%20licensed%20warehousing%20and%20routing%20software."
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-6 text-sm font-semibold text-stone-950"
              >
                Request an operator briefing
              </a>
              <Link
                href="/app"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white"
              >
                Open the demo platform
              </Link>
            </div>
          </div>

          <aside
            aria-label="Example dispatch board"
            className="rounded-[28px] border border-white/10 bg-black/30 p-5"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Example board — labeled demo
            </p>
            <h2 className="mt-2 text-xl font-semibold">Tonight&apos;s transfers</h2>
            <ul className="mt-5 space-y-3">
              {transfers.map((row) => (
                <li
                  key={row.state}
                  className={`rounded-2xl border px-4 py-3 ${row.tone}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">{row.state}</div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                      demo
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-white/70">{row.detail}</div>
                  <div className="mt-2 text-xs text-white/50">{row.window}</div>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="border-y border-white/10 bg-black/20" aria-label="Custody lane">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
              Custody lane — labeled demo
            </p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-4">
              {["Licensed hub", "Reserved lot", "Carrier lane", "Receiving license"].map((node, i) => (
                <li
                  key={node}
                  className="relative rounded-2xl border border-emerald-200/20 bg-emerald-300/5 px-4 py-4"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                    0{i + 1}
                  </div>
                  <p className="mt-2 text-sm font-medium text-white">{node}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black/20">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3">
            {layers.map((layer) => (
              <article key={layer.title} className="rounded-3xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold">{layer.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">{layer.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">How a transfer moves</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step} className="rounded-2xl border border-amber-200/20 bg-amber-200/5 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-amber-200">
                  Step {i + 1}
                </div>
                <p className="mt-3 text-sm font-medium leading-6">{step}</p>
              </li>
            ))}
          </ol>
          <CustodyWalk steps={steps} />
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-white/45 sm:px-6">
        Cannex Logistics · demo software for licensed cannabis logistics · not a live operator network
      </footer>
    </div>
  );
}
