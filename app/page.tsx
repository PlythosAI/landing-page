"use client";

import React from "react";
import HeroSection from "@/app/components/HeroSection";
import PerformanceSection from "@/app/components/PerformanceSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PerformanceSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  );
}