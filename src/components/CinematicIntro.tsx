
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage(1), 800),   // Logo appears
      setTimeout(() => setStage(2), 2500),  // Boutique text
      setTimeout(() => setStage(3), 4000),  // Final flourish
      setTimeout(() => onComplete(), 5500)  // Complete intro
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -100, -200],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative text-center">
          {/* Stage 0 & 1: Brand Name Animation */}
          <AnimatePresence>
            {stage >= 0 && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-playfair font-bold text-gradient mb-4"
                  animate={stage >= 1 ? { 
                    textShadow: [
                      "0 0 20px rgba(245, 158, 11, 0.5)",
                      "0 0 40px rgba(245, 158, 11, 0.8)",
                      "0 0 20px rgba(245, 158, 11, 0.5)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Jeet Davindra
                </motion.h1>
                
                {stage >= 1 && (
                  <motion.div
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="text-gold-400" size={24} />
                    </motion.div>
                    <motion.h2
                      className="text-3xl md:text-5xl font-dm-serif text-gold-300"
                      initial={{ letterSpacing: "0.2em", opacity: 0 }}
                      animate={{ letterSpacing: "0.1em", opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    >
                      Boutique
                    </motion.h2>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="text-gold-400" size={24} />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 2: Tagline */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.p
                  className="text-xl md:text-2xl text-muted-foreground font-poppins mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.8] }}
                  transition={{ duration: 2, delay: 0.3 }}
                >
                  Where Elegance Meets Fashion
                </motion.p>
                
                <motion.div
                  className="w-32 h-1 bg-gold-gradient mx-auto rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 128, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stage 3: Final Animation */}
          {stage >= 3 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.div
                className="w-96 h-96 border-2 border-gold-400/30 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>

        {/* Loading indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gold-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.4, 1, 0.4] 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CinematicIntro;
