import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

const FloatingNavigation = () => {
  const activeSection = useActiveSection();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "market-insights", label: "Market" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glassmorphic rounded-full px-8 py-4 border border-white/20 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
              activeSection === item.id 
                ? "text-cyber-blue bg-cyber-blue/10 shadow-lg shadow-cyber-blue/25" 
                : "text-white hover:text-cyber-blue hover:bg-white/5"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-lg"
                layoutId="navbar-pill"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNavigation;
