"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Hidden Leverage",
      description: "Discovers psychological pressure points and timing advantages that generic AI misses entirely.",
      icon: "material-symbols:strategy",
      gradient: "from-purple-500 to-purple-700",
      details: [
        "Analyzes seller urgency signals",
        "Identifies optimal timing windows",
        "Detects emotional triggers"
      ]
    },
    {
      title: "Dynamic Learning Engine",
      description: "Adapts negotiation strategies in real-time based on conversation flow and seller responses.",
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
      description: "Creates multi-step negotiation roadmaps with contingency plans for different scenarios.",
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
      description: "Anticipates seller objections and prepares counter-arguments before they&apos;re needed.",
      icon: "solar:lightning-bold",
      gradient: "from-purple-400 to-purple-800",
      details: [
        "Objection anticipation",
        "Pre-prepared responses",
        "Proactive positioning"
      ]
    },
    {
      title: "Personal Negotiation Coach",
      description: "Provides real-time coaching and explains the psychology behind each suggested response.",
      icon: "mdi:coach-lamp",
      gradient: "from-purple-600 to-purple-400",
      details: [
        "Real-time coaching",
        "Psychology explanations",
        "Skill development"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
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
            Specialized Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Unlike generic AI, PlythosAI is purpose-built for negotiation with features that understand human psychology and marketplace dynamics.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
              }}
              className="group"
            >
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(147,51,234,0.4)]`}>
                  <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4 group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (detailIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0 shadow-[0_0_6px_rgba(147,51,234,0.6)]`} />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Ready to Negotiate Like a Pro?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their Facebook Marketplace experience with PlythosAI&apos;s specialized negotiation intelligence.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300"
            >
              <Icon icon="ic:baseline-facebook" className="w-5 h-5 mr-2 inline" />
              Get PlythosAI Extension
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}