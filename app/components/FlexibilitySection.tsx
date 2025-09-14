
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function FlexibilitySection() {
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
          <Icon icon="solar:bolt-linear" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Need More Flexibility?</span> ⚡
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            If you run out of credits before your monthly reset, you can purchase <strong className="font-semibold text-white">Top-Up Packs</strong> at any time to keep your momentum going. Top-ups are available for all plans and never expire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
