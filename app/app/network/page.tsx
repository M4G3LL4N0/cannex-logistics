import AppShell from "@/components/app-shell"
import { partners } from "@/lib/mock-data"

const nodes = [
  {
    city: "Los Angeles Hub",
    type: "Primary warehouse",
    detail: "Inbound consolidation, reserve inventory, same-day retail staging, and secure outbound dispatch.",
  },
  {
    city: "San Bernardino Hub",
    type: "Cross-dock node",
    detail: "High-volume transfer handling with direct distributor and extractor routing support.",
  },
  {
    city: "Sacramento Hub",
    type: "Northern gateway",
    detail: "Farm intake, long-term storage, and NorCal replenishment balancing.",
  },
  {
    city: "San Diego Node",
    type: "Delivery corridor",
    detail: "Southbound retail and wholesale fulfillment with timed transport windows.",
  },
]

export default function NetworkPage() {
  return (
    <AppShell
      eyebrow="Network"
      title="Multi-operator network mesh"
      description="Cannex turns separate market participants into one synchronized infrastructure graph with warehouse nodes, secure transfers, and role-based coordination."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Node topology</div>
          <h2 className="mt-2 text-2xl font-semibold">Licensed infrastructure map</h2>

          <div className="mt-6 grid gap-4">
            {nodes.map((node) => (
              <div key={node.city} className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-medium">{node.city}</div>
                    <div className="mt-1 text-sm text-emerald-200/80">{node.type}</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                    Synced
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-white/56">{node.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Participant layer</div>
          <h2 className="mt-2 text-2xl font-semibold">Connected operator classes</h2>

          <div className="mt-6 space-y-4">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-base font-medium">{partner.name}</div>
                    <div className="mt-1 text-sm text-white/45">{partner.type} · {partner.market}</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/70">
                    {partner.volume}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-emerald-400/15 bg-emerald-400/8 p-5">
            <div className="text-sm font-medium text-emerald-100">Why this compounds</div>
            <div className="mt-2 text-sm leading-7 text-emerald-50/80">
              Every added grower, retailer, and transport path increases network density, improving fulfillment efficiency, storage utilization, and data intelligence.
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
