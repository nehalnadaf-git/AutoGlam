import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autoglam.com"),
  title: {
    default: "Auto Glam | Premium Car Detailing, Ceramic Coating & PPF",
    template: "%s | Auto Glam",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon", url: "/icons/icon-192x192.png" },
    ],
  },
  description:
    "Auto Glam delivers elite automotive care - professional car detailing, ceramic coating, and paint protection film for discerning vehicle owners.",
  keywords: [
    "car detailing",
    "ceramic coating",
    "paint protection film",
    "PPF",
    "premium auto detailing",
    "luxury car care",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.autoglam.com",
    siteName: "Auto Glam",
    title: "Auto Glam | Premium Car Detailing & Ceramic Coating",
    description:
      "Elite automotive care services. Ceramic coating, PPF, and professional detailing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auto Glam - Premium Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Glam | Premium Car Detailing",
    description: "Elite automotive care - ceramic coating, PPF, and detailing.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.autoglam.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorant.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* PWA & Apple-specific tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AutoGlam" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="bg-obsidian text-ivory font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
