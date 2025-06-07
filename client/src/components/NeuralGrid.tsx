import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NeuralGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gridNodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i % 5) * 25,
    y: Math.floor(i / 5) * 25,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      >
        {/* Grid Lines */}
        <defs>
          <pattern
            id="neural-grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(0, 212, 255, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          
          <linearGradient id="neuralGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.8)" />
            <stop offset="50%" stopColor="rgba(138, 43, 226, 0.8)" />
            <stop offset="100%" stopColor="rgba(0, 255, 127, 0.8)" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#neural-grid)" />

        {/* Neural Nodes */}
        {gridNodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="url(#neuralGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              delay: index * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic Neural Connections */}
        {gridNodes.slice(0, -1).map((node, index) => {
          const nextNode = gridNodes[index + 1];
          if (!nextNode) return null;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Mouse-responsive energy pulse */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="50"
          fill="none"
          stroke="rgba(0, 212, 255, 0.5)"
          strokeWidth="2"
          animate={{
            r: [20, 80, 20],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default NeuralGrid;