import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const MarketInsights = () => {
  const stats = [
    { value: "+247%", label: "Portfolio Growth", color: "cyber-green" },
    { value: "89.2%", label: "Win Rate", color: "cyber-blue" },
    { value: "24/7", label: "Active Monitoring", color: "cyber-purple" }
  ];

  return (
    <section className="py-20 relative">
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
              Market Insights
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time performance metrics and market analysis
            </p>
          </motion.div>
          
          <motion.div
            className="glassmorphic rounded-2xl p-8 border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="bg-dark-primary rounded-xl p-6 border border-white/10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Live Market Data</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="text-4xl mb-4 text-cyber-blue mx-auto" />
                  </motion.div>
                  <p className="text-lg font-medium">TradingView Widget Integration</p>
                  <p className="text-sm mt-2">Real-time crypto market analysis</p>
                  <p className="text-xs mt-4 text-gray-500">
                    Connect your TradingView API for live charts and indicators
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
