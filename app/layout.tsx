import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "NepoReadme - GitHub Profile README Generator | Create Stunning GitHub Profiles",
  description:
    "Create beautiful and professional GitHub Profile READMEs in minutes. Add stats, widgets, social links, and more. Free GitHub README generator by Sandipeyy.",
  keywords: [
    "GitHub README",
    "GitHub Profile",
    "README Generator",
    "GitHub Stats",
    "Profile Generator",
    "NepoReadme",
    "NepoFlix",
    "NepoTune",
    "NepoTune API",
    "NepoScrape",
    "Sandipeyy",
    "GitHub Widgets",
    "Developer Profile",
  ],
  authors: [{ name: "Sandipeyy", url: "https://sandip.is-not-a.dev" }],
  creator: "Sandipeyy",
  publisher: "Sandipeyy",
  generator: "NepoReadme",
  applicationName: "NepoReadme",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://neporeadme.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neporeadme.vercel.app",
    title: "NepoReadme - GitHub Profile README Generator",
    description:
      "Create beautiful and professional GitHub Profile READMEs in minutes. Add stats, widgets, social links, and more.",
    siteName: "NepoReadme",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NepoReadme - GitHub Profile README Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NepoReadme - GitHub Profile README Generator",
    description:
      "Create beautiful and professional GitHub Profile READMEs in minutes. Add stats, widgets, social links, and more.",
    images: ["/og-image.png"],
    creator: "@sandip.gg_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}