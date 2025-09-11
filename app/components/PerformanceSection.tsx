"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function PerformanceSection() {
  const metrics = [
    {
      title: "Success Rate",
      value: "78.75%",
      comparison: "vs ChatGPT",
      description: "Higher negotiation success rate compared to generic AI",
      icon: "solar:chart-bold",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Response Time",
      value: "2.3s",
      comparison: "Average",
      description: "Lightning-fast contextual responses",
      icon: "solar:lightning-bold",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "User Satisfaction",
      value: "94%",
      comparison: "Rating",
      description: "Users report better negotiation outcomes",
      icon: "material-symbols:target",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Money Saved",
      value: "$2M+",
      comparison: "Total",
      description: "Collective savings across all users",
      icon: "material-symbols:shield",
      color: "from-purple-500 to-purple-900"
    }
  ];

  return (
    <section id="performance" className="py-20 bg-black">
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
            Proven Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            PlythosAI doesn&apos;t just talk—it delivers measurable results that transform your Facebook Marketplace experience.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
              }}
              className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.4)]`}>
                <Icon icon={metric.icon} className="w-6 h-6 text-white" />
              </div>
              
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-1">
                {metric.value}
              </div>
              
              <div className="text-sm text-purple-300 mb-3">
                {metric.comparison}
              </div>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-purple-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.2)]"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              PlythosAI vs Generic AI
            </h3>
            <p className="text-gray-400">
              See how specialized negotiation AI outperforms general-purpose solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PlythosAI */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/cosmic-project-image-assets/images/64edf6ff-8552-43bd-a445-183f57f441b5/Group_152.png"
                  alt="PlythosAI"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">PlythosAI</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Success Rate</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.6)]"
                      />
                    </div>
                    <span className="text-sm font-medium text-purple-300">85%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Context Understanding</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.6)]"
                      />
                    </div>
                    <span className="text-sm font-medium text-purple-300">92%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Strategy Effectiveness</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.6)]"
                      />
                    </div>
                    <span className="text-sm font-medium text-purple-300">88%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Generic AI */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded mr-3 flex items-center justify-center">
                  <Icon icon="mdi:brain" className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-lg font-semibold text-gray-300">Generic AI</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Success Rate</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "43%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gray-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-400">43%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Context Understanding</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="h-full bg-gray-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-400">35%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Strategy Effectiveness</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "28%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="h-full bg-gray-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-400">28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
