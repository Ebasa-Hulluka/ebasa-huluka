import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from './GlassCard';
import { skills } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Skills() {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [2200, 2700], [0, 100]);

  return (
    <section
      id="skills"
      className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8"
    >
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
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
            Skills
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
            Full-stack skills for building responsive interfaces, reliable APIs, and data-driven web applications.
          </motion.p>
        </motion.div>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2" style={{ y: yTransform }}>
          {skills.map((group, index) => (
            <GlassCard
              key={group.category}
              className="rounded-2xl border-2 border-indigo-300/55 bg-white/85 p-3 shadow-[0_18px_50px_rgba(8,145,178,0.14)] backdrop-blur-sm transition hover:shadow-[0_24px_70px_rgba(79,70,229,0.2)] dark:border-cyan-400/20 dark:bg-slate-900/45 dark:shadow-none sm:rounded-2xl sm:p-5"
              delay={index * 0.07}
            >
              <motion.div 
                className="mb-3 flex items-center gap-2 border-b border-purple-300/30 dark:border-cyan-400/10 pb-3 sm:mb-4 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 text-base text-white shadow-lg sm:h-10 sm:w-10 sm:text-lg">
                  <group.icon />
                </span>
                <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 sm:text-lg">
                  {group.category}
                </h3>
              </motion.div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {group.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="group flex min-h-20 flex-col items-center justify-center rounded-xl border-2 border-indigo-300/45 bg-gradient-to-br from-white/90 to-cyan-50/70 p-2 text-center backdrop-blur-sm transition duration-300 hover:border-indigo-500/60 hover:shadow-[0_18px_42px_rgba(79,70,229,0.18)] dark:border-cyan-400/20 dark:from-purple-950/20 dark:to-cyan-950/10 dark:hover:border-cyan-300/60 dark:hover:shadow-[0_18px_42px_rgba(6,182,212,0.15)] sm:min-h-32 sm:p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.03 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <motion.span 
                      className="mb-2 grid h-8 w-8 place-items-center text-2xl text-gradient-to-r from-purple-500 to-cyan-400 dark:from-purple-400 dark:to-cyan-300 sm:mb-5 sm:h-11 sm:w-11 sm:text-4xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, delay: skillIdx * 0.1, repeat: Infinity }}
                    >
                      <skill.icon />
                    </motion.span>
                    <span className="text-[0.72rem] font-black leading-tight text-slate-950 dark:text-white sm:text-sm sm:leading-snug">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
