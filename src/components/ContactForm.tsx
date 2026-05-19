"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const CONTACT_EMAIL = "laurentiu@plythosai.com";

type Intent = "early-access" | "quote";

const INTENT_LABEL: Record<Intent, string> = {
  "early-access": "Early Access Request",
  quote: "Quote Request",
};

function normalizeIntent(value: string | null): Intent {
  return value === "early-access" ? "early-access" : "quote";
}

const inputClass =
  "w-full bg-black border border-zinc-800 focus:border-amber-500/60 focus:outline-none text-zinc-200 text-sm px-3 py-2 transition-colors duration-200 placeholder:text-zinc-600";
const labelClass =
  "block text-amber-500 text-[10px] tracking-[0.25em] uppercase mb-2";
const buttonClass =
  "flex items-center border border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors duration-200 w-fit";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [intent, setIntent] = useState<Intent>(
    normalizeIntent(searchParams.get("type")),
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  function buildMailto() {
    const subject = INTENT_LABEL[intent];
    const body = [
      `Type: ${INTENT_LABEL[intent]}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      "Message:",
      message,
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const href = buildMailto();
    setMailtoHref(href);

    // Trigger the user's mail client via a real anchor click. This is more
    // reliable than assigning window.location, and if no mail client is
    // configured the fallback panel below still gives the user a way through.
    const a = document.createElement("a");
    a.href = href;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  if (mailtoHref) {
    return (
      <div className="border border-zinc-800 bg-black p-6 md:p-8">
        <div className="mb-2">
          <span className="text-amber-500 text-[10px] tracking-[0.25em] uppercase">
            ── Almost There ──
          </span>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">
          Your email is ready
        </h2>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          We tried to open your email app with the message prefilled. If nothing
          opened, use the button below, or email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-amber-400 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={mailtoHref} className={buttonClass}>
            Open Email App
          </a>
          <button
            type="button"
            onClick={() => setMailtoHref(null)}
            className="flex items-center border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors duration-200 w-fit"
          >
            Edit Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-zinc-800 bg-black p-6 md:p-8 space-y-6">
      <div>
        <label htmlFor="intent" className={labelClass}>
          I&apos;m interested in
        </label>
        <select
          id="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value as Intent)}
          className={inputClass}
        >
          <option value="early-access">Early Access</option>
          <option value="quote">A Quote</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          placeholder="Company Inc."
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about the deal you want to close."
        />
      </div>

      <button type="submit" className={buttonClass}>
        Send Message
      </button>
    </form>
  );
}
