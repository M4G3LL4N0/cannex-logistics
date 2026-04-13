import Link from "next/link"
import Brand from "@/components/brand"

const links = [
  { href: "/", label: "Home" },
  { href: "/app", label: "Platform" },
  { href: "/app/network", label: "Network" },
  { href: "/app/operations", label: "Operations" },
  { href: "/app/compliance", label: "Compliance" },
  { href: "/app/intelligence", label: "Intelligence" },
]

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06110f]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Brand />
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            Live Platform
          </Link>
        </div>
      </div>
    </header>
  )
}
