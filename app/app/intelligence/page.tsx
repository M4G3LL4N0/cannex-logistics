import AppShell from "@/components/app-shell"
import { intelligence, partners } from "@/lib/mock-data"

const opportunities = [
  {
    title: "Dynamic storage pricing",
    body: "Price warehouse capacity by category sensitivity, duration, and route urgency to increase blended margin.",
  },
  {
    title: "Lane optimization engine",
    body: "Use transfer history and delay patterns to prioritize the most reliable corridor mix across time windows.",
  },
  {
    title: "Demand-linked reserve allocation",
    body: "Move more inventory closer to fast-moving retail clusters before orders are placed.",
  },
  {
    title: "Network-level market data",
    body: "Create premium dashboards for pricing velocity, category momentum, and throughput by region.",
  },
]

export default function IntelligencePage() {
  return (
    <AppShell
      eyebrow="Intelligence"
      title="Data turns infrastructure into leverage"
      description="Cannex is not only a logistics operator. It becomes the market intelligence layer once enough storage, movement, and participant activity flows through the network."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {intelligence.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">{item.title}</div>
            <div className="mt-4 text-3xl font-semibold">{item.value}</div>
            <div className="mt-3 text-sm leading-7 text-white/55">{item.detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Compounding advantage</div>
          <h2 className="mt-2 text-2xl font-semibold">Why the moat deepens</h2>
          <div className="mt-6 space-y-4">
            {opportunities.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-base font-medium">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-white/55">{item.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Liquidity surface</div>
          <h2 className="mt-2 text-2xl font-semibold">Who benefits first</h2>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
            <div className="grid grid-cols-3 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/40">
              <div>Operator</div>
              <div>Role</div>
              <div>Value unlocked</div>
            </div>
            {partners.map((partner) => (
              <div key={partner.name} className="grid grid-cols-1 gap-2 border-t border-white/10 px-4 py-4 text-sm md:grid-cols-3">
                <div className="font-medium">{partner.name}</div>
                <div className="text-white/55">{partner.type}</div>
                <div className="text-white/72">
                  {partner.type === "Grower" && "Better storage utilization and cleaner handoff visibility"}
                  {partner.type === "Extractor" && "Tighter inbound scheduling and reserve positioning"}
                  {partner.type === "Retailer" && "Faster replenishment with better shipment predictability"}
                  {partner.type === "Distributor" && "Route density and lower friction transfer coordination"}
                  {partner.type === "Transport" && "Higher network utilization and better scheduling discipline"}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
