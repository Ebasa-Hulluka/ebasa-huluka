import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Services() {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [2900, 3400], [0, 100]);

  return (
    <section id="services" className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8">
      <AnimatedLineBackground colorScheme="purple-cyan" />
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
            Services
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
            Practical services for reliable web development, APIs, responsive interfaces, and creative delivery.
          </motion.p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4" style={{ y: yTransform }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border-2 border-indigo-300/55 bg-white/85 p-4 shadow-[0_18px_50px_rgba(8,145,178,0.14)] backdrop-blur-sm transition duration-300 hover:border-indigo-500/60 hover:shadow-[0_24px_70px_rgba(79,70,229,0.22)] dark:border-cyan-400/20 dark:bg-slate-900/45 dark:hover:border-cyan-300/60 dark:hover:shadow-[0_24px_70px_rgba(6,182,212,0.15)] sm:rounded-2xl sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              {/* Animated top border */}
              <motion.div 
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 transition group-hover:opacity-100"
                animate={{ x: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.span 
                className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 text-xl text-white shadow-lg transition duration-300 sm:h-14 sm:w-14 sm:text-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
              >
                <service.icon />
              </motion.span>
              <h3 className="mt-4 text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 transition group-hover:to-purple-600 sm:mt-6 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600 transition dark:text-slate-300 sm:mt-4 sm:text-sm sm:leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
