"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function BusinessFooter() {
  const footerLinks = {
    product: [
      { name: "Business Solutions", href: "/business-solutions" },
      { name: "Custom Integrations", href: "/business-solutions#b2b-contact" },
      { name: "Use Cases", href: "/business-solutions#use-cases" },
      { name: "Pricing", href: "/#pricing" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Installation Guide", href: "#" },
      { name: "Troubleshooting", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "mdi:twitter", href: "#" },
    { name: "Facebook", icon: "ic:baseline-facebook", href: "#" },
    { name: "LinkedIn", icon: "mdi:linkedin", href: "#" },
    { name: "YouTube", icon: "mdi:youtube", href: "#" }
  ];

  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ message: "Subscribing...", type: "loading" });

    const params = new URLSearchParams();
    params.append('fields[email]', email);
    
    params.append('ml-submit', '1'); 
    params.append('anticsrf', 'true');

    try {
      const response = await fetch('https://assets.mailerlite.com/jsonp/1453124/forms/tbwVnd/subscribe', {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      if (response.ok) {
        setFormStatus({ message: "Thank you for subscribing!", type: "success" });
        setEmail(""); // Clear the input field on success
      } else {
        const data = await response.json();
        setFormStatus({ message: data.error?.message || "An error occurred. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Failed to subscribe:", error);
      setFormStatus({ message: "An unexpected error occurred.", type: "error" });
    }
  };
  
  return (
    <footer className="bg-black text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <Image
                src="https://storage.googleapis.com/cosmic-project-image-assets/images/64edf6ff-8552-43bd-a445-183f57f441b5/Group_152.png"
                alt="PlythosAI"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">PlythosAI</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6 max-w-sm leading-relaxed"
            >
              Specialized AI that transforms business negotiations with psychology-driven strategies and real-time coaching.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-[0_0_10px_rgba(147,51,234,0.2)]"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors text-sm hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors text-sm hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors text-sm hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors text-sm hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-purple-900/20 rounded-2xl p-8 mb-12 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest negotiation tips and PlythosAI updates delivered to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors min-w-[250px] shadow-[0_0_10px_rgba(147,51,234,0.1)] focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap border border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
              {formStatus.message && (
                <p className={`mt-3 text-sm ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {formStatus.message}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 PlythosAI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with</span>
            <Icon icon="solar:heart-bold" className="w-4 h-4 text-purple-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
            <span>for better negotiations</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
