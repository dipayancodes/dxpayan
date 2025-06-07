import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, TrendingUp, Brain, Code, Lightbulb } from "lucide-react";

interface PersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
  persona: {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
    metrics: Array<{ label: string; value: string; trend?: string }>;
    achievements: Array<{ title: string; description: string; year: string }>;
    technologies: string[];
    featured: Array<{ title: string; description: string; image: string }>;
  };
}

const PersonaModal = ({ isOpen, onClose, persona }: PersonaModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden glassmorphic rounded-3xl border border-white/20"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={`relative p-8 bg-gradient-to-r from-${persona.color}/20 to-transparent`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-6">
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r from-${persona.color} to-${persona.color.includes('-') ? persona.color.replace('-500', '-600') : persona.color + '-600'} rounded-2xl flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <persona.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">{persona.title}</h2>
                  <p className="text-gray-400 text-lg">{persona.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Metrics Dashboard */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {persona.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="glassmorphic rounded-xl p-4 border border-white/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold text-${persona.color} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                        {metric.trend && (
                          <div className="text-xs text-cyber-green mt-1">
                            {metric.trend}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {persona.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 bg-${persona.color}/20 text-${persona.color} text-sm rounded-full border border-${persona.color}/30`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements Timeline */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
                  <div className="space-y-4">
                    {persona.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="glassmorphic rounded-xl p-4 border border-white/10"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <span className={`text-sm text-${persona.color} font-mono`}>
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {persona.featured.map((project, index) => (
                    <motion.div
                      key={index}
                      className="glassmorphic rounded-xl overflow-hidden border border-white/10"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className={`w-12 h-12 bg-${persona.color}/20 rounded-lg flex items-center justify-center`}>
                          <persona.icon className={`w-6 h-6 text-${persona.color}`} />
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                        <div className="flex space-x-2 mt-3">
                          <button className={`p-2 rounded-lg bg-${persona.color}/20 hover:bg-${persona.color}/30 transition-colors`}>
                            <Github className="w-4 h-4" />
                          </button>
                          <button className={`p-2 rounded-lg bg-${persona.color}/20 hover:bg-${persona.color}/30 transition-colors`}>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PersonaModal;