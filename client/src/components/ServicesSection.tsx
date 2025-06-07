import { motion } from "framer-motion";
import { Code, BarChart3, Coins, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      emoji: "👨‍💻",
      icon: <Code className="text-2xl text-white" />,
      title: "Developer",
      color: "cyber-blue",
      description: "Full-stack development with modern frameworks and cutting-edge technologies. Building scalable, performant applications.",
      features: ["Web Applications", "API Development", "System Architecture", "Performance Optimization"]
    },
    {
      emoji: "📊",
      icon: <BarChart3 className="text-2xl text-white" />,
      title: "Data Scientist",
      color: "cyber-purple",
      description: "Advanced analytics and machine learning solutions for complex business problems and market predictions.",
      features: ["Predictive Modeling", "Market Analysis", "ML Pipeline Development", "Data Visualization"]
    },
    {
      emoji: "💰",
      icon: <Coins className="text-2xl text-white" />,
      title: "Crypto Trader",
      color: "cyber-green",
      description: "Quantitative trading strategies and automated systems for cryptocurrency markets with proven track record.",
      features: ["Algorithmic Trading", "Risk Management", "Market Making", "Portfolio Optimization"]
    },
    {
      emoji: "🚀",
      icon: <Lightbulb className="text-2xl text-white" />,
      title: "Entrepreneur",
      color: "orange-500",
      description: "Strategic consulting and innovative solutions for fintech startups and blockchain projects.",
      features: ["Business Strategy", "Product Development", "Market Entry", "Technical Leadership"]
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`glassmorphic rounded-2xl p-8 border border-white/10 hover:border-${service.color}/50 transition-all duration-300 group text-center`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r from-${service.color} to-${service.color.includes('-') ? service.color.replace('-500', '-600') : service.color + '-600'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 12 }}
                >
                  <span className="text-2xl">{service.emoji}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">
                  {service.emoji} {service.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
