"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Install Extension",
      description: "Add PlythosAI to Chrome in seconds. No setup required—it integrates seamlessly with Facebook Marketplace.",
      icon: "solar:download-square-bold",
      color: "from-purple-500 to-purple-700"
    },
    {
      step: "02", 
      title: "Browse Marketplace",
      description: "Shop normally on Facebook Marketplace. PlythosAI automatically detects when you&apos;re viewing items or messaging sellers.",
      icon: "ic:baseline-facebook",
      color: "from-purple-400 to-purple-600"
    },
    {
      step: "03",
      title: "AI Analyzes Context",
      description: "Our specialized AI instantly analyzes the listing, seller behavior, and conversation history to understand the negotiation landscape.",
      icon: "mdi:brain",
      color: "from-purple-600 to-purple-800"
    },
    {
      step: "04",
      title: "Get Smart Suggestions",
      description: "Receive real-time, contextual negotiation strategies and responses tailored to your specific situation and goals.",
      icon: "solar:lightning-bold",
      color: "from-purple-500 to-purple-900"
    },
    {
      step: "05",
      title: "Close Better Deals",
      description: "Execute proven negotiation tactics with confidence and secure better prices on your Facebook Marketplace purchases.",
      icon: "material-symbols:target",
      color: "from-purple-400 to-purple-800"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Get started in minutes and transform your negotiation game with AI that actually understands the art of the deal.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-400/30 to-purple-500/50 transform -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 lg:hidden rounded-full bg-purple-900/30 border border-purple-500/50 mb-6 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    {/* Step Number (Desktop) */}
                    <div className="hidden lg:block absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-900/50 border-2 border-purple-500/50 backdrop-blur-sm flex items-center justify-center z-10 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                      <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                        {step.step}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className={`w-32 h-32 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]`}>
                      <Icon icon={step.icon} className="w-16 h-16 text-white" />
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-32 h-32 rounded-3xl bg-gradient-to-r ${step.color} opacity-20 blur-xl -z-10`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-purple-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.2)]">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Start Negotiating Smarter Today
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the thousands of users who have already discovered the power of specialized negotiation AI. Installation takes less than 30 seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300"
              >
                <Icon icon="solar:download-square-bold" className="w-5 h-5 mr-2 inline" />
                Install Free Extension
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500/50 text-purple-200 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                <Icon icon="solar:play-bold" className="w-5 h-5 mr-2 inline" />
                Watch Tutorial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}