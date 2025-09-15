
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import BusinessFooter from "@/app/components/BusinessFooter";
import PricingSection from "@/app/components/PricingSection";
import CreditExplanationSection from "@/app/components/CreditExplanationSection";
import FlexibilitySection from "@/app/components/FlexibilitySection";
import ContactModal from "@/app/components/ContactModal";
import AIComparisonSection from "@/app/components/AIComparisonSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import BusinessHowItWorksSection from "@/app/components/BusinessHowItWorksSection";

const businessFeatures = [
    {
      title: "Hidden Leverage",
      description: "Uncover advantages in high-stakes procurement deals by identifying supplier urgency and optimal timing.",
      icon: "material-symbols:strategy",
      gradient: "from-purple-500 to-purple-700",
      details: [
        "Analyzes supplier urgency signals",
        "Identifies optimal timing windows",
        "Detects emotional triggers"
      ]
    },
    {
      title: "Dynamic Learning Engine",
      description: "Adapts strategies in real-time based on conversation flow and responses.",
      icon: "mdi:brain",
      gradient: "from-purple-400 to-purple-600",
      details: [
        "Real-time strategy adjustment",
        "Pattern recognition learning",
        "Behavioral adaptation"
      ]
    },
    {
      title: "Risk Quantification",
      description: "Calculates deal probability and suggests optimal offer ranges with mathematical precision.",
      icon: "material-symbols:shield",
      gradient: "from-purple-600 to-purple-800",
      details: [
        "Deal probability scoring",
        "Optimal price range calculation",
        "Risk assessment metrics"
      ]
    },
    {
      title: "Strategic Game Plan",
      description: "Develop multi-step roadmaps for complex sales cycles, complete with contingency plans for common objections.",
      icon: "solar:target-bold",
      gradient: "from-purple-500 to-purple-900",
      details: [
        "Multi-step planning",
        "Scenario contingencies",
        "Strategic roadmapping"
      ]
    },
    {
      title: "Proactive Strategy",
      description: "Anticipates objections and prepares counter-arguments before they're needed.",
      icon: "solar:lightning-bold",
      gradient: "from-purple-400 to-purple-800",
      details: [
        "Objection anticipation",
        "Pre-prepared responses",
        "Proactive positioning"
      ]
    },
    {
      title: "Your Personal AI Coach",
      description: "Provides real-time coaching and explains the reasoning behind each suggested response.",
      icon: "mdi:coach-lamp",
      gradient: "from-purple-600 to-purple-400",
      details: [
        "Real-time coaching",
        "Psychology explanations",
        "Skill development"
      ]
    }
];

export default function BusinessSolutionsPage() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
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
            PlythosAI for Business: AI-Powered Negotiation and Communication
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We customize our model for your business and help integrate it with your systems. From sales and procurement to customer support, we tailor PlythosAI to your workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a href="#pricing" onClick={() => setContactModalOpen(true)} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 border border-purple-700/50 shadow-[0_0_20px_rgba(88,28,135,0.35)] hover:shadow-[0_0_30px_rgba(88,28,135,0.5)]">
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
              title: "Sales",
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

      <AIComparisonSection />
      <FeaturesSection 
        title="Specialized Features for Business"
        description="These features are the core of the PlythosAI technology and are highly relevant to business use cases."
        features={businessFeatures} 
        showCTA={false} 
      />
      <BusinessHowItWorksSection />

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

      <PricingSection onContactClick={() => setContactModalOpen(true)} />
      <CreditExplanationSection />
      <FlexibilitySection />

      <BusinessFooter />
    </div>
  );
}
