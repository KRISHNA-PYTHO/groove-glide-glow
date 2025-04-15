
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import LearnDanceSection from "@/components/home/LearnDanceSection";
import HireUsSection from "@/components/home/HireUsSection";
import GlobalDanceSection from "@/components/home/GlobalDanceSection";
import StudioSection from "@/components/home/StudioSection";
import FooterCTA from "@/components/home/FooterCTA";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white font-montserrat">
      <Navbar />
      <HeroSection />
      <LearnDanceSection />
      <HireUsSection />
      <GlobalDanceSection />
      <StudioSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
