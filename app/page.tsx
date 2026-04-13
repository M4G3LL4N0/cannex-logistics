import Link from "next/link"
import SiteNav from "@/components/site-nav"
import { intelligence, kpis, partners, shipments } from "@/lib/mock-data"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-glow absolute inset-0 opacity-20" />
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pb-32 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-200">
              Cannabis infrastructure layer
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Warehouse, routing, compliance, and B2B network software for the cannabis supply chain.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              CannexLogistics connects growers, distributors, extractors, retailers, and transport operators through a premium
              operating layer built for secure storage, reliable transfers, live visibility, and scalable compliance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/app"
                className="rounded-full border border-emerald-400/30 bg-emerald-400/12 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
              >
                Launch platform
              </Link>
              <a
                href="#why"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/10"
              >
                Explore system
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((item) => (
                <div key={item.label} className="metric-shine rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/42">{item.label}</div>
                  <div className="mt-3 text-3xl font-semibold">{item.value}</div>
                  <div className="mt-2 text-sm text-white/48">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.28),transparent_45%),radial-gradient(circle_at_100%_30%,rgba(56,189,248,0.2),transparent_30%)] blur-2xl" />
            <div className="relative rounded-[36px] border border-white/10 bg-black/20 p-5 backdrop-blur-2xl">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">Live operational graph</div>
                    <div className="mt-2 text-2xl font-semibold">California hub mesh</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    24 nodes synced
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {shipments.map((shipment) => (
                    <div key={shipment.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-sm font-medium">{shipment.route}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{shipment.id} · {shipment.carrier}</div>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          {shipment.status}
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-white/55">
                        ETA: {shipment.eta} · Security: {shipment.security}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="why" className="mt-24 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">Why Cannex</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">The operating system for fragmented cannabis logistics.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
              Most operators still run inventory, storage, transport, and compliance across disconnected vendors and manual workflows.
              CannexLogistics turns that fragmented stack into one secure network with premium visibility and better unit economics.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Licensed warehousing + secure handling",
                "Role-based dashboards for every operator",
                "Live environmental monitoring",
                "Transfer, custody, and manifest orchestration",
                "Routing intelligence across licensed fleets",
                "Compliance posture visibility by lot and shipment",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Market participants</div>
            <div className="mt-6 grid gap-4">
              {partners.map((partner) => (
                <div key={partner.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-lg font-medium">{partner.name}</div>
                      <div className="mt-1 text-sm text-white/48">{partner.type} · {partner.market}</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                      {partner.volume}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/40">Intelligence layer</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Infrastructure data becomes market leverage.</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/60">
                Once storage, transfer, and routing activity sits on a unified operational layer, Cannex can generate decision-grade
                intelligence around margin, throughput, bottlenecks, and demand patterns.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {intelligence.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/40">{item.title}</div>
                  <div className="mt-4 text-2xl font-semibold">{item.value}</div>
                  <div className="mt-3 text-sm leading-7 text-white/52">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
