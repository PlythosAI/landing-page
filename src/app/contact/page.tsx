import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request early access or get a quote for PlythosAI — our team will scope a pilot in under a week.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="border-b border-zinc-800 py-8 mb-8">
          <div className="mb-2">
            <span className="text-amber-500 text-[10px] tracking-[0.3em] uppercase">
              ── Get in Touch ──
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Let&apos;s Talk
          </h1>
          <p className="text-zinc-500 text-sm max-w-xl">
            Tell us what you&apos;re working on. Our team will scope a pilot in
            under a week.
          </p>
        </div>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
