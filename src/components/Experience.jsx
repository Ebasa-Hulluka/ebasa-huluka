import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Experience() {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [3600, 4100], [0, 100]);

  return (
    <section id="experience" className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8">
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-5xl">
        <motion.div 
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 dark:from-purple-400 dark:via-cyan-300 dark:to-purple-400 sm:text-5xl"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 sm:mt-4 sm:w-24"
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.p 
            className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A focused timeline of academic growth, full-stack projects, and creative client work.
          </motion.p>
        </motion.div>
        <div className="relative" style={{ y: yTransform }}>
          <motion.div 
            className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 dark:from-purple-400 dark:via-cyan-300 dark:to-purple-400 sm:left-1/2"
            animate={{ height: ['0%', '100%'] }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <div className="space-y-5 sm:space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative grid gap-4 sm:grid-cols-2 sm:gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {/* Animated timeline dot */}
                <motion.span 
                  className="absolute left-2 top-6 h-4 w-4 rounded-full border-[3px] border-white bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_24px_rgba(168,85,247,0.5)] dark:border-slate-950 sm:left-1/2 sm:top-8 sm:-ml-2.5 sm:h-5 sm:w-5 sm:border-4"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                />
                <motion.div
                  className={`relative ml-8 overflow-hidden rounded-2xl border-2 border-indigo-300/55 bg-white/85 p-4 shadow-[0_18px_50px_rgba(8,145,178,0.14)] backdrop-blur-sm transition duration-300 hover:border-indigo-500/60 hover:shadow-[0_24px_70px_rgba(79,70,229,0.22)] dark:border-cyan-400/20 dark:bg-slate-900/45 dark:hover:border-cyan-300/60 dark:hover:shadow-[0_24px_70px_rgba(6,182,212,0.15)] sm:ml-0 sm:rounded-2xl sm:p-6 ${
                    index % 2 === 1 ? 'sm:col-start-2' : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {/* Animated top border */}
                  <motion.div 
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 transition group-hover:opacity-100"
                    animate={{ x: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 sm:text-xs sm:tracking-[0.22em]">
                    {item.type}
                  </span>
                  <h3 className="mt-2 text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 transition sm:mt-3 sm:text-xl">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-purple-500 dark:text-purple-400 sm:text-sm">{item.period}</div>
                  <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
