
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface PricingSectionProps {
  onContactClick: () => void;
}

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  const plans = [
    {
      name: "Professional",
      description: "For professionals and freelancers looking to close better deals.",
      price: "$79 / month",
      priceDetails: "Billed annually",
      monthlyPrice: "or $99 billed monthly",
      save: "Save over 20% with annual billing",
      features: [
        "200 Credits per month",
        "Performance Dashboard",
        "Workflow Integrations (CRM, Slack, etc.)",
        "Priority Email Support",
      ],
      buttonText: "Get Started",
      buttonIcon: "solar:rocket-linear",
      featured: false,
    },
    {
      name: "Business",
      description: "For growing businesses that require deeper integration and API access.",
      price: "$229 / month",
      priceDetails: "Billed annually",
      monthlyPrice: "or $279 billed monthly",
      save: "Get 2 months free with annual billing",
      features: [
        "500 Credits per month",
        "Everything in Professional",
        "API Access",
        "Onboarding & Integration Support",
      ],
      buttonText: "Choose Business",
      buttonIcon: "solar:suitcase-linear",
      featured: true,
    },
    {
      name: "Enterprise",
      description: "For organizations requiring custom solutions, higher volumes, and advanced capabilities.",
      price: "Custom Pricing",
      features: [
        "Custom Credit Allowances",
        "Autonomous Negotiation Agents",
        "Everything in Business",
        "Dedicated Support Channel",
        "Add-on: Train AI on Your Data",
      ],
      buttonText: "Contact Sales",
      buttonIcon: "solar:letter-bold",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
            Plans & Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Choose the right plan to give your business a strategic advantage in every conversation. All plans are designed to scale with your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
              }}
              className={`group rounded-2xl p-8 border transition-all duration-500 h-full flex flex-col ${
                plan.featured
                  ? "bg-purple-900/30 border-purple-500/50 shadow-[0_0_25px_rgba(147,51,234,0.4)]"
                  : "bg-purple-900/20 border-purple-500/30"
              }`}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-white">{plan.price}</div>
                  {plan.priceDetails && <div className="text-sm text-gray-400">{plan.priceDetails}</div>}
                  {plan.monthlyPrice && <div className="text-sm text-gray-500 mt-1">{plan.monthlyPrice}</div>}
                  {plan.save && <div className="text-xs text-purple-300 mt-2">{plan.save}</div>}
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-sm text-white/80 font-semibold">INCLUDES:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Icon icon="solar:check-circle-linear" className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={plan.name === 'Enterprise' ? onContactClick : undefined}
                className={`w-full mt-auto px-6 py-3 rounded-full text-lg font-medium border transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                    : "bg-purple-900/30 border-purple-500/50 text-purple-200 hover:bg-purple-800/50"
                }`}
              >
                <Icon icon={plan.buttonIcon} className="w-5 h-5 mr-2 inline" />
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
