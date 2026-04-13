import Link from "next/link"
import Brand from "@/components/brand"

const items = [
  { href: "/app", label: "Overview" },
  { href: "/app/network", label: "Network" },
  { href: "/app/operations", label: "Operations" },
  { href: "/app/compliance", label: "Compliance" },
  { href: "/app/intelligence", label: "Intelligence" },
]

export default function AppShell({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string
  eyebrow: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#04100d] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_25%)]" />
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="flex items-center justify-between">
            <Brand />
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Live
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-white/40">System posture</div>
            <div className="mt-3 text-2xl font-semibold">Secure + compliant</div>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Role-based visibility, custody logging, routing intelligence, and inventory-level environmental monitoring.
            </p>
          </div>
        </aside>

        <main className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="border-b border-white/10 pb-6">
            <div className="text-xs uppercase tracking-[0.28em] text-emerald-200/80">{eyebrow}</div>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
                  {description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:w-[320px]">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Storage SLA</div>
                  <div className="mt-2 text-2xl font-semibold">99.94%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Risk posture</div>
                  <div className="mt-2 text-2xl font-semibold text-emerald-200">Stable</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
