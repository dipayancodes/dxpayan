import { motion } from "framer-motion";
import FloatingNavigation from "@/components/FloatingNavigation";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import MarketInsights from "@/components/MarketInsights";
import ContactSection from "@/components/ContactSection";
import AIPersonalizedGreeting from "@/components/AIPersonalizedGreeting";
import ParticleBackground from "@/components/ParticleBackground";
import EnhancedFooter from "@/components/EnhancedFooter";

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-white relative overflow-x-hidden">
      <ParticleBackground />
      <FloatingNavigation />
      <ScrollProgress />
      
      <main className="relative z-10">
        <HeroSection />
        <div className="container mx-auto px-6 my-20">
          <AIPersonalizedGreeting />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <MarketInsights />
        <ContactSection />
      </main>

      <EnhancedFooter />
    </div>
  );
}

export default App;
