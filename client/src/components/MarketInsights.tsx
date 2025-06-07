import { motion } from "framer-motion";
import { TrendingUp, Activity, BarChart3, DollarSign, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const MarketInsights = () => {
  const [activeTab, setActiveTab] = useState("performance");
  const [liveData, setLiveData] = useState({
    btcPrice: 43250,
    ethPrice: 2680,
    portfolioValue: 2470000,
    dailyPnL: 12580
  });

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setLiveData(prev => ({
        btcPrice: prev.btcPrice + (Math.random() - 0.5) * 100,
        ethPrice: prev.ethPrice + (Math.random() - 0.5) * 50,
        portfolioValue: prev.portfolioValue + (Math.random() - 0.5) * 10000,
        dailyPnL: prev.dailyPnL + (Math.random() - 0.5) * 1000
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const performanceStats = [
    { 
      value: "+247%", 
      label: "Portfolio Growth", 
      color: "cyber-green",
      icon: <TrendingUp className="w-5 h-5" />,
      trend: "+12.5% this month"
    },
    { 
      value: "89.2%", 
      label: "Win Rate", 
      color: "cyber-blue",
      icon: <Target className="w-5 h-5" />,
      trend: "Above market avg"
    },
    { 
      value: "24/7", 
      label: "Active Monitoring", 
      color: "cyber-purple",
      icon: <Activity className="w-5 h-5" />,
      trend: "Real-time alerts"
    },
    {
      value: "2.8",
      label: "Sharpe Ratio",
      color: "cyber-green",
      icon: <BarChart3 className="w-5 h-5" />,
      trend: "Risk-adjusted returns"
    }
  ];

  const tradingMetrics = [
    { label: "Total Trades", value: "1,247", change: "+23" },
    { label: "Avg Hold Time", value: "3.2 days", change: "-0.5 days" },
    { label: "Max Drawdown", value: "12.3%", change: "-2.1%" },
    { label: "Profit Factor", value: "2.4", change: "+0.3" }
  ];

  const tabs = [
    { id: "performance", label: "Performance", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "live", label: "Live Data", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section id="market-insights" className="py-20 relative">
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
              Real-time performance metrics and advanced trading analytics
            </p>
          </motion.div>
          
          <motion.div
            className="glassmorphic rounded-2xl p-8 border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 glassmorphic rounded-xl p-1 border border-white/10">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-cyber-blue/20 text-cyber-blue" 
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Performance Tab */}
            {activeTab === "performance" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {performanceStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="glassmorphic rounded-xl p-6 border border-white/10 text-center"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`flex items-center justify-center mb-3 text-${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className={`text-2xl font-bold text-${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.trend}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glassmorphic rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-cyber-purple">Trading Metrics</h4>
                    <div className="space-y-4">
                      {tradingMetrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <span className="text-gray-400">{metric.label}</span>
                          <div className="text-right">
                            <div className="font-semibold">{metric.value}</div>
                            <div className="text-xs text-cyber-green">{metric.change}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glassmorphic rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-cyber-blue">Risk Analysis</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">VaR (95%)</span>
                        <span className="font-semibold">$12,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Beta</span>
                        <span className="font-semibold">0.85</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Correlation</span>
                        <span className="font-semibold">0.72</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Volatility</span>
                        <span className="font-semibold">18.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Live Data Tab */}
            {activeTab === "live" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glassmorphic rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-cyber-green flex items-center">
                      <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse" />
                      Live Prices
                    </h4>
                    <div className="space-y-4">
                      <motion.div
                        className="flex justify-between items-center"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <span className="flex items-center">
                          <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">₿</span>
                          Bitcoin
                        </span>
                        <span className="font-mono font-semibold">${liveData.btcPrice.toLocaleString()}</span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between items-center"
                        animate={{ x: [0, -2, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <span className="flex items-center">
                          <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">Ξ</span>
                          Ethereum
                        </span>
                        <span className="font-mono font-semibold">${liveData.ethPrice.toLocaleString()}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="glassmorphic rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-4 text-cyber-blue">Portfolio Status</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Value</span>
                        <span className="font-mono font-semibold text-cyber-green">
                          ${liveData.portfolioValue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Daily P&L</span>
                        <span className={`font-mono font-semibold ${liveData.dailyPnL >= 0 ? 'text-cyber-green' : 'text-red-400'}`}>
                          {liveData.dailyPnL >= 0 ? '+' : ''}${liveData.dailyPnL.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
