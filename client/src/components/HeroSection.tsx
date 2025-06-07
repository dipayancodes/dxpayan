import { motion } from "framer-motion";
import { ChevronDown, Zap, Brain, Code, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";
import NeuralGrid from "./NeuralGrid";

const HeroSection = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    { icon: <Code className="w-6 h-6" />, title: "Full-Stack Developer", color: "cyber-blue" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Crypto Trader", color: "cyber-green" },
    { icon: <Brain className="w-6 h-6" />, title: "Data Scientist", color: "cyber-purple" },
    { icon: <Zap className="w-6 h-6" />, title: "AI Innovator", color: "cyber-blue" }
  ];

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good Morning");
    else if (hour < 18) setTimeOfDay("Good Afternoon");
    else setTimeOfDay("Good Evening");

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      <ParticleBackground />
      <NeuralGrid />
      
      {/* Holographic background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 holographic rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 holographic rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [360, 180, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -4 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 holographic rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -2 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional headshot with glassmorphic frame */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple p-1"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.5)",
                    "0 0 30px rgba(0, 212, 255, 0.8)",
                    "0 0 20px rgba(0, 212, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Dipayan Ghosh - Professional Portrait"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyber-green rounded-full flex items-center justify-center border-4 border-dark-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <i className="fas fa-check text-white text-sm"></i>
              </motion.div>
            </div>
          </motion.div>
          
          {/* AI-powered personalized greeting */}
          <motion.div
            className="mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-cyber-blue font-mono">
              {timeOfDay}, I'm
            </p>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient quantum-glow"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dipayan Ghosh
          </motion.h1>
          
          {/* Dynamic role display */}
          <motion.div
            className="mb-8 h-16 flex items-center justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              key={currentRole}
              className={`flex items-center space-x-3 text-2xl md:text-3xl font-semibold text-${roles[currentRole].color}`}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                {roles[currentRole].icon}
              </motion.div>
              <span>{roles[currentRole].title}</span>
            </motion.div>
          </motion.div>

          {/* Holographic skill badges */}
          <motion.div
            className="mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {["Blockchain", "AI/ML", "Trading", "Web3", "Data Science"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 glassmorphic rounded-full text-sm border morphic-border quantum-glow"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)"
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Building the future at the intersection of technology, finance, and innovation. 
            Transforming complex data into actionable insights and crafting digital experiences that push boundaries.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glassmorphic rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-2xl text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
