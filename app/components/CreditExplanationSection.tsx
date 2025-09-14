
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function CreditExplanationSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Icon icon="solar:help-linear" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">What is a Credit?</span> 🤔
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light mb-8">
            A credit is your key to unlocking strategic foresight. <strong className="font-semibold text-white">One credit is used each time you ask PlythosAI to analyze a message and generate a strategic move.</strong>
          </p>
          <div className="text-left bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.2)]">
            <p className="text-gray-300 mb-4">For each credit you spend, you receive:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Multiple reply suggestions tailored to your goals.</span>
              </li>
              <li className="flex items-start">
                <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Success probability scores for each option.</span>
              </li>
              <li className="flex items-start">
                <Icon icon="solar:check-circle-bold" className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">A simulated forecast of how the conversation might unfold.</span>
              </li>
            </ul>
            <p className="text-sm text-purple-300/80 mt-6">
              This system ensures you only pay for the value you use, turning every credit into a data-backed decision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
