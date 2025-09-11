"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-full border border-black/20 bg-black/10 backdrop-blur-xl backdrop-saturate-150 shadow-2xl shadow-black/50 max-w-4xl w-full"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* Glass highlight effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        
        <div className="relative px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/cosmic-project-image-assets/images/64edf6ff-8552-43bd-a445-183f57f441b5/Group_152.png"
                  alt="PlythosAI"
                  className="h-8 w-8 relative z-10"
                />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm" />
              </div>
              <span className="text-lg font-medium bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                PlythosAI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a 
                href="#features" 
                whileHover={{ scale: 1.05 }}
                className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] px-3 py-2 rounded-full hover:bg-white/5"
              >
                Features
              </motion.a>
              <motion.a 
                href="#performance" 
                whileHover={{ scale: 1.05 }}
                className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] px-3 py-2 rounded-full hover:bg-white/5"
              >
                Performance
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                whileHover={{ scale: 1.05 }}
                className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] px-3 py-2 rounded-full hover:bg-white/5"
              >
                How It Works
              </motion.a>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-purple-600/80 to-purple-800/80 text-white px-5 py-2 rounded-full text-sm font-medium border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, rgba(147, 51, 234, 0.8) 0%, rgba(126, 34, 206, 0.8) 100%)",
                }}
              >
                <span className="relative z-10">Get Extension</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50" />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10"
            >
              <Icon
                icon={isMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"}
                className="w-5 h-5 text-purple-300"
              />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-3">
                <motion.a 
                  href="#features" 
                  whileHover={{ x: 5 }}
                  className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#performance" 
                  whileHover={{ x: 5 }}
                  className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Performance
                </motion.a>
                <motion.a 
                  href="#how-it-works" 
                  whileHover={{ x: 5 }}
                  className="text-sm text-white/80 hover:text-purple-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  How It Works
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-gradient-to-r from-purple-600/80 to-purple-800/80 text-white px-5 py-2 rounded-full text-sm font-medium w-fit border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)] mt-2"
                  style={{
                    background: "linear-gradient(135deg, rgba(147, 51, 234, 0.8) 0%, rgba(126, 34, 206, 0.8) 100%)",
                  }}
                >
                  <span className="relative z-10">Get Extension</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}