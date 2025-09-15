"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  details: string[];
}

interface FeaturesSectionProps {
  title?: string;
  description?: string;
  features?: Feature[];
  showCTA?: boolean;
}

const defaultFeatures: Feature[] = [
    {
      title: "Hidden Leverage",
      description: "Discovers hidden advantages and timing opportunities that generic AI misses entirely.",
      icon: "material-symbols:strategy",
      gradient: "from-purple-500 to-purple-700",
      details: [
        "Analyzes urgency signals",
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
      description: "Calculates success probability and suggests optimal responses with mathematical precision.",
      icon: "material-symbols:shield",
      gradient: "from-purple-600 to-purple-800",
      details: [
        "Success probability scoring",
        "Optimal response calculation",
        "Risk assessment metrics"
      ]
    },
    {
      title: "Strategic Game Plan",
      description: "Creates multi-step roadmaps with contingency plans for different scenarios.",
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

export default function FeaturesSection({ 
  title = "Specialized Features", 
  description = "Unlike generic AI, PlythosAI is purpose-built for communication with features that understand human psychology and conversational dynamics.", 
  features = defaultFeatures,
  showCTA = true 
}: FeaturesSectionProps) {
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
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            {description}
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
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                Ready to Communicate Like a Pro?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have transformed their communication with PlythosAI's specialized intelligence.
              </p>
              <motion.button
                disabled
                className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium border border-gray-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                <Icon icon="mdi:google-chrome" className="w-5 h-5 mr-2 inline" />
                Coming Soon
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}