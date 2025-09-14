
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

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

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-black/80 border border-purple-700/30 rounded-2xl shadow-2xl w-full max-w-3xl mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-t-2xl h-1 bg-gradient-to-r from-purple-800 to-purple-900" />
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
              <Icon icon="solar:close-circle-linear" className="w-6 h-6" />
            </button>
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Contact for custom integrations</h3>
                <p className="text-white/60 text-sm">Tell us about your team and workflows. We will reach out shortly.</p>
              </div>
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
                          className={`px-4 py-2 rounded-full border text-sm transition ${
                            form.useCase.includes(opt)
                              ? "border-purple-600/60 text-purple-200 bg-purple-900/20 shadow-[0_0_12px_rgba(88,28,135,0.45)]"
                              : "border-white/10 text-white/70 hover:border-purple-500/40 hover:text-purple-200"
                          }`}
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
                      className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                        submitting ? "opacity-50 cursor-not-allowed" : ""
                      } bg-gradient-to-r from-purple-800 to-purple-900 text-white border border-purple-700/50 shadow-[0_0_18px_rgba(88,28,135,0.35)]`}
                    >
                      {submitting ? "Sending..." : "Request contact"}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
