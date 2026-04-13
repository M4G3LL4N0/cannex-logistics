import AppShell from "@/components/app-shell"

const controls = [
  {
    title: "Chain of custody",
    body: "Every intake, move, hold, and transfer is logged with operator identity, timestamp, and shipment-level lineage.",
  },
  {
    title: "Manifest integrity",
    body: "Transfer documentation stays attached to lot records so discrepancies surface before dispatch, not after delivery.",
  },
  {
    title: "Environmental evidence",
    body: "Temperature and humidity states remain visible by inventory segment, preserving audit-ready storage history.",
  },
  {
    title: "Exception states",
    body: "Compliance holds, route delays, and reconciliation mismatches move into dedicated escalation workflows instantly.",
  },
]

const readiness = [
  { label: "Custody verification", score: "100%" },
  { label: "Warehouse sensor coverage", score: "97.8%" },
  { label: "Transfer reconciliation", score: "99.2%" },
  { label: "Incident response readiness", score: "94.6%" },
]

export default function CompliancePage() {
  return (
    <AppShell
      eyebrow="Compliance"
      title="Audit-first compliance posture"
      description="Cannex is designed so operational reliability and regulatory readiness reinforce each other, instead of living in separate systems."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {controls.map((control) => (
          <div key={control.title} className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="text-lg font-medium">{control.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/55">{control.body}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Readiness scoring</div>
          <h2 className="mt-2 text-2xl font-semibold">Control surface health</h2>

          <div className="mt-6 space-y-4">
            {readiness.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/62">{item.label}</div>
                  <div className="text-lg font-semibold">{item.score}</div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.95),rgba(59,130,246,0.9))]"
                    style={{ width: item.score }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/10 bg-black/20 p-6">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">System logic</div>
          <h2 className="mt-2 text-2xl font-semibold">How Cannex reduces risk</h2>

          <div className="mt-6 space-y-5">
            {[
              "Separate systems create blind spots between storage, movement, and paperwork.",
              "Cannex unifies those layers so lot status, carrier route, and custody history remain attached to the same operational object.",
              "That means exceptions are caught early, warehouse managers act faster, and retailers receive more predictable fulfillment.",
              "As network volume grows, compliance data also becomes an intelligence asset for margin, throughput, and service reliability."
            ].map((text, index) => (
              <div key={index} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-8 text-white/58">
                {text}
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
