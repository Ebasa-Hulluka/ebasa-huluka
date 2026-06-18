import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedLineBackground = ({ colorScheme = 'purple-cyan' }) => {
  const colorMap = {
    'purple-cyan': { 
      hColor: '#9333ea', 
      vColor: '#06b6d4',
      lightH: 'rgba(147, 51, 234, 0.6)',
      lightV: 'rgba(6, 182, 212, 0.6)',
    },
    'cyan-purple': { 
      hColor: '#06b6d4', 
      vColor: '#9333ea',
      lightH: 'rgba(6, 182, 212, 0.6)',
      lightV: 'rgba(147, 51, 234, 0.6)',
    },
    'emerald-blue': { 
      hColor: '#10b981', 
      vColor: '#3b82f6',
      lightH: 'rgba(16, 185, 129, 0.6)',
      lightV: 'rgba(59, 130, 246, 0.6)',
    },
  };

  const colors = colorMap[colorScheme];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated horizontal lines */}
        <div className="absolute inset-0 opacity-20 dark:opacity-25">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px w-full"
              style={{ 
                top: `${i * 5}%`,
                background: `linear-gradient(to right, transparent, ${colors.hColor}, transparent)`,
                filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))'
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 15 + i, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>
        {/* Animated vertical lines */}
        <div className="absolute inset-0 opacity-20 dark:opacity-25">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-px h-full"
              style={{ 
                left: `${i * 7}%`,
                background: `linear-gradient(to bottom, transparent, ${colors.vColor}, transparent)`,
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
              }}
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 20 + i, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlays - lighter for light mode, darker for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/12 via-transparent to-cyan-200/12 dark:from-purple-950/25 dark:to-cyan-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent dark:from-slate-950/60 dark:to-transparent" />
    </>
  );
};

export const FloatingElements = () => (
  <>
    <motion.div
      className="absolute left-[5%] top-20 h-3 w-3 rotate-45 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-sm"
      animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute left-[15%] top-40 h-5 w-5 rotate-45 border-2 border-cyan-300"
      animate={{ y: [0, 30, 0], rotate: [45, -45, 45] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute right-[12%] top-56 h-4 w-4 rotate-45 bg-gradient-to-br from-cyan-500 to-purple-500"
      animate={{ y: [0, -25, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute right-[8%] bottom-40 h-3 w-3 bg-purple-400 rounded-full"
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </>
);
