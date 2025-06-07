import { motion } from "framer-motion";
import { Code, BarChart3, Coins, Lightbulb } from "lucide-react";
import { useState } from "react";
import PersonaModal from "./PersonaModal";

const ServicesSection = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const personas = [
    {
      id: "developer",
      emoji: "👨‍💻",
      icon: Code,
      title: "Full-Stack Developer",
      color: "cyber-blue",
      description: "Building next-generation web applications with cutting-edge technologies and scalable architectures.",
      features: ["Web Applications", "API Development", "System Architecture", "Performance Optimization"],
      metrics: [
        { label: "Projects Completed", value: "50+", trend: "+25% this year" },
        { label: "Technologies Mastered", value: "15+", trend: "Always learning" },
        { label: "Code Quality Score", value: "98%", trend: "Peer reviewed" },
        { label: "Deployment Success", value: "99.9%", trend: "Zero downtime" }
      ],
      achievements: [
        { title: "Lead Developer - DeFi Platform", description: "Built a decentralized exchange handling $10M+ daily volume", year: "2024" },
        { title: "Full-Stack Certification", description: "Advanced certification in modern web technologies", year: "2023" },
        { title: "Open Source Contributor", description: "Contributed to major blockchain and web3 projects", year: "2022" }
      ],
      technologies: ["React", "Node.js", "TypeScript", "Python", "Solidity", "PostgreSQL", "Docker", "AWS"],
      featured: [
        { title: "DeFi Trading Platform", description: "Real-time trading interface with advanced charting", image: "" },
        { title: "NFT Marketplace", description: "Decentralized marketplace with smart contracts", image: "" },
        { title: "Analytics Dashboard", description: "Real-time data visualization platform", image: "" }
      ]
    },
    {
      id: "trader",
      emoji: "💰",
      icon: Coins,
      title: "Crypto Trader",
      color: "cyber-green",
      description: "Quantitative trading strategies and automated systems with proven track record in volatile markets.",
      features: ["Algorithmic Trading", "Risk Management", "Market Making", "Portfolio Optimization"],
      metrics: [
        { label: "ROI This Year", value: "+247%", trend: "Outperforming market" },
        { label: "Win Rate", value: "89.2%", trend: "Consistent profits" },
        { label: "Max Drawdown", value: "12%", trend: "Risk controlled" },
        { label: "Sharpe Ratio", value: "2.8", trend: "Excellent risk-adj returns" }
      ],
      achievements: [
        { title: "Crypto Fund Management", description: "Managed $2M+ portfolio with consistent alpha generation", year: "2024" },
        { title: "Trading Bot Development", description: "Built automated systems for multiple exchanges", year: "2023" },
        { title: "Risk Management Certification", description: "Advanced certification in quantitative finance", year: "2022" }
      ],
      technologies: ["Python", "Pandas", "NumPy", "TradingView", "Binance API", "ccxt", "TA-Lib", "Machine Learning"],
      featured: [
        { title: "Arbitrage Bot", description: "Multi-exchange arbitrage system", image: "" },
        { title: "Market Maker", description: "Automated liquidity provision", image: "" },
        { title: "Portfolio Optimizer", description: "AI-driven portfolio allocation", image: "" }
      ]
    },
    {
      id: "scientist",
      emoji: "📊",
      icon: BarChart3,
      title: "Data Scientist",
      color: "cyber-purple",
      description: "Advanced analytics and machine learning solutions for complex business problems and market predictions.",
      features: ["Predictive Modeling", "Market Analysis", "ML Pipeline Development", "Data Visualization"],
      metrics: [
        { label: "Models Deployed", value: "25+", trend: "Production ready" },
        { label: "Prediction Accuracy", value: "94.5%", trend: "Continuously improving" },
        { label: "Data Processed", value: "100TB+", trend: "Real-time analytics" },
        { label: "Business Impact", value: "$5M+", trend: "Value generated" }
      ],
      achievements: [
        { title: "ML Trading Algorithms", description: "Developed predictive models for crypto market analysis", year: "2024" },
        { title: "Data Science Certification", description: "Advanced ML and AI certification", year: "2023" },
        { title: "Research Publication", description: "Published research on cryptocurrency price prediction", year: "2022" }
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "Apache Spark", "SQL", "R"],
      featured: [
        { title: "Price Prediction Model", description: "Neural network for crypto price forecasting", image: "" },
        { title: "Sentiment Analysis", description: "Social media sentiment trading signals", image: "" },
        { title: "Risk Assessment Tool", description: "ML-powered risk evaluation system", image: "" }
      ]
    },
    {
      id: "entrepreneur",
      emoji: "🚀",
      icon: Lightbulb,
      title: "Tech Entrepreneur",
      color: "orange-500",
      description: "Strategic consulting and innovative solutions for fintech startups and blockchain projects.",
      features: ["Business Strategy", "Product Development", "Market Entry", "Technical Leadership"],
      metrics: [
        { label: "Startups Advised", value: "12+", trend: "Active mentoring" },
        { label: "Funding Raised", value: "$15M+", trend: "Successful rounds" },
        { label: "Products Launched", value: "8", trend: "Market ready" },
        { label: "Team Members Led", value: "50+", trend: "Global talent" }
      ],
      achievements: [
        { title: "Fintech Startup Co-founder", description: "Co-founded a successful DeFi protocol", year: "2024" },
        { title: "Innovation Award", description: "Recognized for blockchain innovation", year: "2023" },
        { title: "Accelerator Graduate", description: "Top 1% of tech accelerator program", year: "2022" }
      ],
      technologies: ["Product Strategy", "Market Research", "Fundraising", "Team Building", "Agile", "Lean Startup"],
      featured: [
        { title: "DeFi Protocol", description: "Decentralized lending platform", image: "" },
        { title: "Trading Analytics SaaS", description: "B2B crypto analytics platform", image: "" },
        { title: "NFT Marketplace", description: "Creator-focused NFT platform", image: "" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
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
              What I Do
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions across multiple disciplines
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                className={`glassmorphic rounded-2xl p-8 border border-white/10 hover:border-${persona.color}/50 transition-all duration-300 group text-center cursor-pointer quantum-glow`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedPersona(persona.id)}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r from-${persona.color} to-${persona.color.includes('-') ? persona.color.replace('-500', '-600') : persona.color + '-600'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <persona.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">
                  {persona.emoji} {persona.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {persona.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  {persona.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + featureIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className={`mt-4 px-4 py-2 bg-${persona.color}/20 rounded-full text-sm text-${persona.color} font-medium`}
                  whileHover={{ scale: 1.05 }}
                >
                  Click to explore
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Persona Modals */}
          {personas.map((persona) => (
            <PersonaModal
              key={persona.id}
              isOpen={selectedPersona === persona.id}
              onClose={() => setSelectedPersona(null)}
              persona={persona}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
