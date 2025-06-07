import { motion } from "framer-motion";

const AboutSection = () => {
  const timelineItems = [
    {
      year: "2024 - Present",
      title: "Senior Full-Stack Developer",
      description: "Leading blockchain and fintech solutions, specializing in DeFi protocols and trading algorithms.",
      color: "cyber-blue"
    },
    {
      year: "2023",
      title: "Data Science Consultant",
      description: "Developed ML models for crypto market prediction and risk assessment systems.",
      color: "cyber-purple"
    },
    {
      year: "2022",
      title: "Crypto Trading Success",
      description: "Achieved consistent profitability across multiple market cycles using quantitative strategies.",
      color: "cyber-green"
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", color: "cyber-blue" },
    { value: "5+", label: "Years Experience", color: "cyber-purple" },
    { value: "24/7", label: "Market Monitoring", color: "cyber-green" },
    { value: "∞", label: "Learning Mode", color: "cyber-blue" }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bridging the gap between technology, finance, and innovation through data-driven solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Timeline */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-white/20"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute -left-2 w-4 h-4 bg-${item.color} rounded-full`}></div>
                  <div className="glassmorphic rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h3 className={`text-xl font-semibold mb-2 text-${item.color}`}>{item.year}</h3>
                    <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Personal Info */}
            <motion.div
              className="glassmorphic rounded-2xl p-8 border border-white/10"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate technologist who thrives at the intersection of finance and technology. 
                My journey began with traditional software development, but I quickly discovered my passion 
                for blockchain technology and quantitative finance.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Today, I combine my expertise in full-stack development, data science, and financial markets 
                to build innovative solutions that push the boundaries of what's possible in the digital economy.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 glassmorphic rounded-xl border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
