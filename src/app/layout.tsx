import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Poppins({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PlythosAI — Negotiation AI",
    template: "%s | PlythosAI",
  },
  description:
    "PlythosAI is an AI-powered negotiation platform that helps businesses close better deals, faster. Backed by research and built for enterprise.",
  keywords: [
    "negotiation AI",
    "AI negotiation platform",
    "deal intelligence",
    "enterprise AI",
    "contract negotiation",
    "PlythosAI",
  ],
  authors: [{ name: "PlythosAI" }],
  creator: "PlythosAI",
  metadataBase: new URL("https://plythos.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://plythos.ai",
    siteName: "PlythosAI",
    title: "PlythosAI — Negotiation AI",
    description:
      "AI-powered negotiation platform that helps businesses close better deals, faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1366,
        height: 768,
        alt: "PlythosAI — Negotiation AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlythosAI — Negotiation AI",
    description:
      "AI-powered negotiation platform that helps businesses close better deals, faster.",
    images: ["/og-image.png"],
    creator: "@plythosai",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scrollbar scrollbar-thumb-amber-500/40 scrollbar-track-transparent">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
