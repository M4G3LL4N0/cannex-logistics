import Link from "next/link"

export default function Brand() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(40,220,140,0.9),rgba(10,20,20,0.1)_45%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.35),transparent_45%,rgba(34,197,94,0.2))]" />
      </div>
      <div>
        <div className="text-sm font-semibold tracking-[0.24em] text-white/80 uppercase">Cannex</div>
        <div className="text-xs text-white/45 transition-colors group-hover:text-white/70">Logistics</div>
      </div>
    </Link>
  )
}
