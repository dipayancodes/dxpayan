import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Trading Bot",
      description: "Automated trading system with ML-powered market analysis and risk management for multiple DEX platforms.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Python", "Web3.py", "TensorFlow"],
      color: "cyber-blue",
      year: "2024"
    },
    {
      title: "Crypto Analytics Platform",
      description: "Real-time market analysis platform with advanced charting, portfolio tracking, and predictive modeling.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["React", "Node.js", "D3.js"],
      color: "cyber-purple",
      year: "2024"
    },
    {
      title: "Portfolio Optimizer",
      description: "AI-driven portfolio optimization using modern portfolio theory and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Python", "Pandas", "NumPy"],
      color: "cyber-green",
      year: "2023"
    },
    {
      title: "Blockchain Explorer",
      description: "Advanced blockchain explorer with transaction analysis, smart contract interaction, and network statistics.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Next.js", "Solidity", "GraphQL"],
      color: "cyber-blue",
      year: "2023"
    },
    {
      title: "NFT Marketplace",
      description: "Decentralized marketplace for NFTs with advanced filtering, bidding system, and creator royalties.",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["React", "Ethereum", "IPFS"],
      color: "cyber-purple",
      year: "2023"
    },
    {
      title: "Financial Dashboard",
      description: "Comprehensive financial dashboard with real-time data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Vue.js", "Express", "MongoDB"],
      color: "cyber-green",
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions at the intersection of technology, finance, and user experience
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`glassmorphic rounded-2xl border border-white/10 overflow-hidden hover:border-${project.color}/50 transition-all duration-300 group`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 text-${project.color}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 bg-${project.color}/20 text-${project.color} text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <div className="flex space-x-3">
                      <motion.button
                        className={`text-${project.color} hover:text-white transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.button>
                      <motion.button
                        className={`text-${project.color} hover:text-white transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full font-semibold hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
