import AppShell from "@/components/app-shell"
import { inventoryLots, shipments } from "@/lib/mock-data"

const opsCards = [
  {
    title: "Inbound receiving",
    body: "Manifest validation, weight reconciliation, environmental assignment, intake imaging, and automated lot registration.",
  },
  {
    title: "Storage management",
    body: "Condition-aware rooming, shelf-life tracking, reserve segmentation, and operator-level visibility controls.",
  },
  {
    title: "Fulfillment staging",
    body: "Order wave generation, route grouping, security packaging, and timed release to licensed carriers.",
  },
  {
    title: "Exception response",
    body: "Delay escalation, transfer mismatch detection, hold states, and remediation workflows across every active route.",
  },
]

export default function OperationsPage() {
  return (
    <AppShell
      eyebrow="Operations"
      title="Operational command layer"
      description="From intake to final transfer, Cannex centralizes the physical workflow of storage and distribution into one premium control surface."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {opsCards.map((card) => (
          <div key={card.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="text-lg font-medium">{card.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/55">{card.body}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Storage utilization</div>
          <h2 className="mt-2 text-2xl font-semibold">Lot queue and volume view</h2>

          <div className="mt-6 grid gap-4">
            {inventoryLots.map((lot) => (
              <div key={lot.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-base font-medium">{lot.id} · {lot.category}</div>
                    <div className="mt-1 text-sm text-white/45">
                      {lot.origin} · {lot.warehouse} · {lot.quantity.toLocaleString()} {lot.unit}
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/70">
                    {lot.status}
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(52,211,153,0.85),rgba(56,189,248,0.85))]"
                    style={{ width: `${Math.min(92, 28 + (lot.quantity % 65))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Route orchestration</div>
          <h2 className="mt-2 text-2xl font-semibold">Dispatch status</h2>

          <div className="mt-6 space-y-4">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-base font-medium">{shipment.route}</div>
                <div className="mt-1 text-sm text-white/45">{shipment.carrier}</div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white/55">ETA</span>
                  <span>{shipment.eta}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-white/55">Status</span>
                  <span>{shipment.status}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-white/55">Security</span>
                  <span className="max-w-[60%] text-right text-white/72">{shipment.security}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
