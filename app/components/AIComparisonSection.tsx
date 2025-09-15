
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function AIComparisonSection() {
  return (
    <section id="performance-business" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-purple-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.2)]"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              PlythosAI vs Generic AI for Business
            </h3>
            <p className="text-gray-400">
              See how a specialized AI for strategic communication drives better business outcomes than general-purpose solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PlythosAI */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <Image
                  src="https://storage.googleapis.com/cosmic-project-image-assets/images/64edf6ff-8552-43bd-a445-183f57f441b5/Group_152.png"
                  alt="PlythosAI"
                  width={32}
                  height={32}
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
