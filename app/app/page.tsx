import AppShell from "@/components/app-shell"
import { inventoryLots, kpis, shipments, timeline } from "@/lib/mock-data"

export default function AppPage() {
  return (
    <AppShell
      eyebrow="Overview"
      title="Cannex command center"
      description="A premium operator surface for licensed warehousing, transfers, environmental control, route visibility, and lot-level compliance posture."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">{item.label}</div>
            <div className="mt-3 text-3xl font-semibold">{item.value}</div>
            <div className="mt-2 text-sm text-white/48">{item.detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/40">Inventory command</div>
              <h2 className="mt-2 text-2xl font-semibold">Active lots</h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
              {inventoryLots.length} lots tracked
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10">
            <div className="grid grid-cols-6 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/40">
              <div>Lot</div>
              <div>Origin</div>
              <div>Category</div>
              <div>Warehouse</div>
              <div>Climate</div>
              <div>Status</div>
            </div>
            {inventoryLots.map((lot) => (
              <div
                key={lot.id}
                className="grid grid-cols-1 gap-2 border-t border-white/10 px-4 py-4 text-sm text-white/78 md:grid-cols-6"
              >
                <div>
                  <div className="font-medium">{lot.id}</div>
                  <div className="text-white/42">{lot.sku}</div>
                </div>
                <div>{lot.origin}</div>
                <div>{lot.category}</div>
                <div>{lot.warehouse}</div>
                <div>{lot.temp} · {lot.humidity}</div>
                <div>{lot.status}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Shipment visibility</div>
            <h2 className="mt-2 text-2xl font-semibold">Route activity</h2>
            <div className="mt-5 space-y-4">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-base font-medium">{shipment.route}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                        {shipment.id} · {shipment.carrier}
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                      {shipment.status}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/55">
                    ETA: {shipment.eta} · Security: {shipment.security}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-black/20 p-6">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Live event stream</div>
            <h2 className="mt-2 text-2xl font-semibold">Today’s timeline</h2>
            <div className="mt-5 space-y-5">
              {timeline.map((event) => (
                <div key={event.time} className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />
                  <div>
                    <div className="text-sm font-medium">{event.title}</div>
                    <div className="mt-1 text-sm leading-7 text-white/52">{event.description}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
