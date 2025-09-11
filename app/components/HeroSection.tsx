"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle farthest-corner at 10% 20%, rgba(147,51,234,0.3) 0%, rgba(0,0,0,1) 70%)"
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            boxShadow: "0 0 100px rgba(147, 51, 234, 0.4)"
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl"
          style={{
            boxShadow: "0 0 120px rgba(147, 51, 234, 0.3)"
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 text-purple-200 text-sm shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300">
            <Icon icon="solar:lightning-bold" className="w-4 h-4 mr-2 text-yellow-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            78.75% Better Than ChatGPT at Negotiations
            <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4 ml-2 text-purple-300" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Negotiate Like a
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.6)]">
            Specialist
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
        >
          Transform Facebook Marketplace negotiations with specialized AI that understands context, psychology, and strategy—not just generic responses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300"
          >
            <Icon icon="ic:baseline-facebook" className="w-5 h-5 mr-2 inline" />
            Add to Chrome - Free
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
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-lg bg-purple-900/20 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">78.75%</div>
            <div className="text-gray-400 text-sm">Better Success Rate</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-lg bg-purple-900/20 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-lg bg-purple-900/20 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">$2M+</div>
            <div className="text-gray-400 text-sm">Saved in Negotiations</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400"
        >
          <Icon icon="solar:arrow-down-linear" className="w-6 h-6 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
