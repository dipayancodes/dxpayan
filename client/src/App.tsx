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

      {/* Footer */}
      <footer className="glassmorphic border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gradient">
                  Dipayan Ghosh
                </h3>
                <p className="text-gray-400 mt-2">Building the future of finance and technology</p>
              </div>
              
              <div className="flex space-x-6">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 glassmorphic hover:bg-cyber-blue/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-linkedin text-cyber-blue"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 glassmorphic hover:bg-cyber-green/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github text-cyber-green"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 glassmorphic hover:bg-blue-500/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-twitter text-blue-400"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 glassmorphic hover:bg-red-500/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope text-red-400"></i>
                </motion.a>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Dipayan Ghosh. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
