import { motion } from "framer-motion";
import { Code, Brain, Bitcoin, TrendingUp } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="text-4xl text-cyber-blue" />,
      title: "Development",
      color: "cyber-blue",
      skills: ["React.js", "Node.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Brain className="text-4xl text-cyber-purple" />,
      title: "Data Science",
      color: "cyber-purple",
      skills: ["TensorFlow", "Pandas", "Scikit-learn", "PyTorch", "Jupyter"]
    },
    {
      icon: <Bitcoin className="text-4xl text-cyber-green" />,
      title: "Blockchain",
      color: "cyber-green",
      skills: ["Solidity", "Solana", "Web3.js", "DeFi", "Smart Contracts"]
    },
    {
      icon: <TrendingUp className="text-4xl text-cyber-blue" />,
      title: "Trading",
      color: "cyber-blue",
      skills: ["Binance API", "TradingView", "Algorithmic Trading", "Risk Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks that power modern digital experiences
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={`glassmorphic rounded-2xl p-6 border border-white/10 hover:border-${category.color}/50 transition-all duration-300 group`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`skill-tag glassmorphic px-3 py-2 rounded-full text-sm border border-white/20 hover:border-${category.color}/50 cursor-pointer transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
