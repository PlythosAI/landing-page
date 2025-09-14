"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import BusinessFooter from "@/app/components/BusinessFooter";
import PricingSection from "@/app/components/PricingSection";
import CreditExplanationSection from "@/app/components/CreditExplanationSection";
import FlexibilitySection from "@/app/components/FlexibilitySection";

interface FormState {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string[];
  message: string;
}

const useCaseOptions = [
  "Sales negotiations",
  "Procurement",
  "Customer support",
  "Other",
];

export default function BusinessSolutionsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    useCase: [],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const toggleUseCase = (val: string) => {
    setForm((prev) => ({
      ...prev,
      useCase: prev.useCase.includes(val)
        ? prev.useCase.filter((u) => u !== val)
        : [...prev.useCase, val],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch("/api/contact-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 0%, rgba(88,28,135,0.35), transparent 50%), radial-gradient(circle at 80% 100%, rgba(126,34,206,0.25), transparent 50%)"
        }} />
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-light bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6"
          >
            Solutions for Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We customize our model for your business and help integrate it with your systems. From sales negotiations and procurement to customer support, we tailor PlythosAI to your workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a href="#b2b-contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 border border-purple-700/50 shadow-[0_0_20px_rgba(88,28,135,0.35)] hover:shadow-[0_0_30px_rgba(88,28,135,0.5)]">
              <Icon icon="solar:letter-bold" className="w-5 h-5 mr-2" />
              Contact us for custom integrations
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-purple-700/40 text-purple-200 hover:bg-purple-900/20">
              <Icon icon="solar:tag-price-linear" className="w-5 h-5 mr-2" />
              See Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Where PlythosAI delivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: "Sales negotiations",
              desc: "Close more deals with guided plays and objection handling across email and chat.",
              icon: "solar:hand-money-linear"
            }, {
              title: "Procurement",
              desc: "Standardize supplier conversations and secure better terms with data-backed tactics.",
              icon: "solar:box-linear"
            }, {
              title: "Customer support",
              desc: "Faster, consistent resolutions with intent-aware replies and integrated knowledge.",
              icon: "solar:users-group-rounded-linear"
            }].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-purple-700/30 bg-black/40 backdrop-blur-xl p-6 shadow-[0_0_16px_rgba(88,28,135,0.25)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center mb-4 shadow-[0_0_14px_rgba(88,28,135,0.4)]">
                  <Icon icon={c.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{c.title}</h3>
                <p className="text-white/70 text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-6 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
            <h3 className="text-xl font-medium text-white mb-4">Integration options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/40">
                <Icon icon="solar:buildings-3-linear" className="w-5 h-5 text-purple-300 mt-0.5" />
                <div>
                  <div className="text-white/90">CRM & Sales tools</div>
                  <div className="text-white/60">Import opportunities, sync notes, push outcomes</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/40">
                <Icon icon="solar:users-group-rounded-linear" className="w-5 h-5 text-purple-300 mt-0.5" />
                <div>
                  <div className="text-white/90">Helpdesk & Chat</div>
                  <div className="text-white/60">Contextual responses, ticket summaries, draft replies</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/40">
                <Icon icon="solar:database-linear" className="w-5 h-5 text-purple-300 mt-0.5" />
                <div>
                  <div className="text-white/90">Data & Knowledge</div>
                  <div className="text-white/60">Private data connectors, custom knowledge bases</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-4">We help implement integrations end-to-end and align them with your security and data policies.</p>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-purple-700/30 bg-black/40 backdrop-blur-xl p-6 shadow-[0_0_16px_rgba(88,28,135,0.25)]">
            <h3 className="text-xl font-medium text-white mb-2">Custom models for your workflows</h3>
            <p className="text-white/70 text-sm">We fine-tune and steer PlythosAI for your use cases, playbooks, tone, and guardrails. From sales scripts to procurement policy, we adapt the system to your team.</p>
          </div>
        </div>
      </section>

      <PricingSection />
      <CreditExplanationSection />
      <FlexibilitySection />

      {/* Contact */}
      <section id="b2b-contact" className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Contact for custom integrations</h3>
            <p className="text-white/60 text-sm">Tell us about your team and workflows. We will reach out shortly.</p>
          </div>
          <div className="rounded-2xl border border-purple-700/30 bg-black/70 backdrop-blur-xl shadow-[0_0_25px_rgba(88,28,135,0.35)]">
            <div className="rounded-t-2xl h-1" style={{ background: "linear-gradient(90deg, rgba(88,28,135,0.6), rgba(126,34,206,0.6))" }} />
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-14 h-14 rounded-full bg-purple-800/40 border border-purple-700/50 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(88,28,135,0.35)]">
                    <div className="w-7 h-7 rounded-full bg-purple-600" />
                  </div>
                  <p className="text-white">Thanks! We will be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/60 mb-2">Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-600/60"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-2">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-600/60"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/60 mb-2">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-600/60"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-2">Team size</label>
                      <input
                        value={form.teamSize}
                        onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-600/60"
                        placeholder="e.g. 25"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-3">Primary use cases</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {useCaseOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleUseCase(opt)}
                          className={`px-4 py-2 rounded-full border text-sm transition ${form.useCase.includes(opt)
                            ? "border-purple-600/60 text-purple-200 bg-purple-900/20 shadow-[0_0_12px_rgba(88,28,135,0.45)]"
                            : "border-white/10 text-white/70 hover:border-purple-500/40 hover:text-purple-200"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-2">Tell us about your needs</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-600/60"
                      placeholder="Integrations, workflows, SLAs, rollout timeline, etc."
                    />
                  </div>
                  {formError && (
                    <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{formError}</div>
                  )}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition ${submitting ? "opacity-50 cursor-not-allowed" : ""} bg-gradient-to-r from-purple-800 to-purple-900 text-white border border-purple-700/50 shadow-[0_0_18px_rgba(88,28,135,0.35)]`}
                    >
                      {submitting ? "Sending..." : "Request contact"}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <BusinessFooter />
    </div>
  );
}