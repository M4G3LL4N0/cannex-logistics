import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2" }],
  },

  manifest: "/site.webmanifest?v=2",

  title: {
    default: "CannexLogistics — Cannabis logistics infrastructure",
    template: "%s · CannexLogistics",
  },
  description:
    "Infrastructure layer for licensed cannabis warehousing, secure logistics, compliance visibility, and B2B operator coordination.",
  openGraph: {
    title: "CannexLogistics",
    description:
      "Premium command-center software for cannabis storage, routing, chain-of-custody visibility, and network intelligence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CannexLogistics",
    description:
      "Infrastructure for licensed cannabis warehousing, logistics, compliance posture, and operator coordination.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
