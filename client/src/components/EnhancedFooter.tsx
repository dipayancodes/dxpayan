import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MessageCircle, Globe } from "lucide-react";

const EnhancedFooter = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/dipayan-ghosh-a874a327a/",
      color: "cyber-purple",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/dipayancodes",
      color: "cyber-green",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/dxpayan",
      color: "blue-400",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:krishnadipayan108@gmail.com",
      color: "cyber-blue",
      label: "Email"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#",
      color: "blue-500",
      label: "Telegram"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      href: "dxpayan.onrender.com",
      color: "cyber-green",
      label: "Website"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const expertise = [
    "Blockchain Development",
    "Quantitative Trading",
    "Machine Learning",
    "Full-Stack Development"
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 holographic opacity-30" />
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      <div className="relative z-10 glassmorphic border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <motion.div
                className="col-span-2"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gradient mb-4">
                  Dipayan Ghosh
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Building the future of finance through innovative technology. 
                  Specializing in blockchain development, quantitative trading, 
                  and cutting-edge data science solutions.
                </p>
                <div className="flex items-center space-x-2 text-sm text-cyber-blue">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span>Available for new opportunities</span>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyber-blue">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyber-purple">Expertise</h4>
                <ul className="space-y-2">
                  {expertise.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      • {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glassmorphic hover:bg-${social.color}/20 rounded-xl flex items-center justify-center transition-all duration-300 group quantum-glow`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-${social.color} group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
              className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Dipayan Ghosh. All rights reserved. Built with cutting-edge technology.
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Made with ❤️ using React, TypeScript & Tailwind</span>
                <motion.div
                  className="w-2 h-2 bg-cyber-green rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;