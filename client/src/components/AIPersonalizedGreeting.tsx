import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, MapPin, Activity } from "lucide-react";

const AIPersonalizedGreeting = () => {
  const [greeting, setGreeting] = useState("");
  const [location, setLocation] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("☀️");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLocalTime(time);

      if (hour < 5) setGreeting("Working late? Let's build something amazing");
      else if (hour < 12) setGreeting("Good morning! Ready to innovate");
      else if (hour < 17) setGreeting("Good afternoon! Let's create the future");
      else if (hour < 22) setGreeting("Good evening! Time for some coding");
      else setGreeting("Burning the midnight oil? Perfect timing");

      // Set weather icon based on time
      if (hour >= 6 && hour < 18) setWeatherIcon("☀️");
      else setWeatherIcon("🌙");
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // In a real app, you'd use a geocoding service
            setLocation("Global Citizen");
          },
          () => {
            setLocation("Digital Nomad");
          }
        );
      } else {
        setLocation("Tech Explorer");
      }
    };

    updateGreeting();
    getUserLocation();
    
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: <Clock className="w-4 h-4" />, label: "Local Time", value: localTime },
    { icon: <MapPin className="w-4 h-4" />, label: "Status", value: location },
    { icon: <Activity className="w-4 h-4" />, label: "Mode", value: "Innovation" }
  ];

  return (
    <motion.div
      className="glassmorphic rounded-2xl p-6 border border-white/10 mb-8"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl"
          >
            {weatherIcon}
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold text-cyber-blue">AI-Powered Insights</h3>
            <p className="text-gray-400 text-sm">{greeting}</p>
          </div>
        </div>
        <motion.div
          className="w-3 h-3 bg-cyber-green rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-1">
              {metric.icon}
              <span className="text-xs">{metric.label}</span>
            </div>
            <div className="text-sm font-semibold text-white">{metric.value}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPersonalizedGreeting;