import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`border border-white/50 bg-white/75 shadow-premium backdrop-blur-xl dark:border-cyan-300/15 dark:bg-slate-900/55 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)] ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
