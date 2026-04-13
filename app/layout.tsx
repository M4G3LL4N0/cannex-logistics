import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CannexLogistics",
  description: "Cannabis infrastructure for storage, logistics, compliance, and network intelligence.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
