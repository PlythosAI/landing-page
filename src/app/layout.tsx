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
  title: "PlythosAI",
  description: "Negotiation AI",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen-dynamic`}
      >
        <Header />
        <main>
          <div className="relative w-full">
            <div className="fixed inset-0 -z-999 h-screen-dynamic overflow-hidden">
              <div className="absolute bg-radial-[circle_farthest-corner_at_10%_20%] from-brand-600/35 via-brand-600/10 to-transparent blur-[180px] -top-70 -left-60 h-250 w-250 md:h-350 md:w-500 md:-top-90 md:-left-100 pointer-events-none rounded-full"></div>
            </div>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
