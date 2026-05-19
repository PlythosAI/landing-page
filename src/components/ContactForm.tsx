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

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [intent, setIntent] = useState<Intent>(
    normalizeIntent(searchParams.get("type")),
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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

      <button
        type="submit"
        className="flex items-center border border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors duration-200 w-fit"
      >
        Send Message
      </button>
    </form>
  );
}
