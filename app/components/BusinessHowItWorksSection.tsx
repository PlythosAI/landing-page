
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function BusinessHowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a deep dive into your business goals, communication challenges, and existing workflows to identify key areas for improvement.",
      icon: "solar:document-add-linear",
      color: "from-purple-500 to-purple-700"
    },
    {
      step: "02", 
      title: "Model Customization",
      description: "We customize and fine-tune the PlythosAI model, incorporating your playbooks, data, and communication style to create a bespoke solution.",
      icon: "solar:settings-linear",
      color: "from-purple-400 to-purple-600"
    },
    {
      step: "03",
      title: "System Integration",
      description: "We seamlessly integrate PlythosAI with your existing systems, such as CRM, helpdesk, or communication platforms, ensuring a smooth workflow.",
      icon: "solar:link-round-angle-linear",
      color: "from-purple-600 to-purple-800"
    },
    {
      step: "04",
      title: "Team Onboarding & Training",
      description: "We provide comprehensive onboarding and training to ensure your team can leverage the full power of PlythosAI from day one.",
      icon: "solar:users-group-rounded-linear",
      color: "from-purple-500 to-purple-900"
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "We continuously monitor performance, providing insights and reports to track ROI and identify new opportunities for optimization.",
      icon: "solar:chart-2-linear",
      color: "from-purple-400 to-purple-800"
    }
  ];

  return (
    <section id="how-it-works-business" className="py-20 bg-black">
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
            How It Works for Your Business
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Our streamlined process ensures a seamless integration of PlythosAI into your existing workflows, delivering value from day one.
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
      </div>
    </section>
  );
}
