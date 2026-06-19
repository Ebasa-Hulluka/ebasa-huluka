import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import heroImage from '../assets/optimized/hero-portrait.jpg';

const buttonBase =
  'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-3 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-cyan-300/30 min-[380px]:px-4 sm:min-h-14 sm:gap-2 sm:px-8 sm:text-base';

const rotatingRoles = ['a Full-Stack Web Developer', 'a Video Editor'];

// Animated Line Background Component
const AnimatedLineBackground = () => (
  <>
    <div className="absolute inset-0 hidden overflow-hidden sm:block">
      {/* Animated horizontal lines */}
      <div className="absolute inset-0 opacity-20 dark:opacity-35">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-600 dark:via-sky-400 to-transparent"
            style={{ top: `${i * 5}%` }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 15 + i, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
      {/* Animated vertical lines */}
      <div className="absolute inset-0 opacity-20 dark:opacity-35">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500 dark:via-violet-400 to-transparent"
            style={{ left: `${i * 7}%` }}
            animate={{ y: ['100%', '-100%'] }}
            transition={{ duration: 20 + i, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    </div>

    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_50%_88%,rgba(45,212,191,0.12),transparent_34%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.24),transparent_30%),radial-gradient(circle_at_50%_88%,rgba(45,212,191,0.18),transparent_34%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 dark:via-[#0b1224]/40 dark:to-[#060a16]/85" />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/8 via-transparent to-cyan-100/8 dark:from-cyan-950/30 dark:via-transparent dark:to-violet-950/30" />
  </>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const isComplete = !isDeleting && typedRole === currentRole;
    const isEmpty = isDeleting && typedRole === '';
    const delay = isComplete ? 1400 : isEmpty ? 300 : isDeleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % rotatingRoles.length);
        return;
      }

      setTypedRole((value) =>
        isDeleting ? currentRole.slice(0, value.length - 1) : currentRole.slice(0, value.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <section id="home" className="section-surface min-h-screen px-4 pb-12 pt-[5.5rem] text-slate-950 dark:text-slate-100 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pt-28">
      {/* Animated Line Background */}
      <AnimatedLineBackground />

      {/* Floating Elements */}
      <motion.div
        className="absolute left-[8%] top-20 hidden h-3 w-3 rotate-45 rounded-sm bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.35)] sm:block"
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[12%] top-40 hidden h-6 w-6 rotate-45 border-2 border-gradient-to-r from-cyan-300 to-purple-400 sm:block"
        animate={{ y: [0, 30, 0], rotate: [45, -45, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-56 hidden h-4 w-4 rotate-45 bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_26px_rgba(139,92,246,0.45)] sm:block"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[5%] bottom-40 hidden h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_24px_rgba(45,212,191,0.45)] sm:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-7 sm:gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="max-w-4xl text-[2.75rem] font-black leading-[1.06] text-slate-900 dark:text-slate-100 min-[380px]:text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Welcome To <span className="bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-sky-300 dark:to-violet-300">My</span>
            <motion.span 
              className="block bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-teal-200"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Portfolio!
            </motion.span>
          </motion.h1>

          <motion.p 
            className="mt-6 grid min-h-[4.35rem] max-w-3xl content-start text-xl font-semibold leading-8 text-slate-600 dark:text-slate-300 sm:mt-9 sm:min-h-[4.75rem] sm:text-3xl lg:block lg:min-h-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block lg:inline">I am <span className="bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text font-bold text-transparent dark:from-violet-300 dark:to-teal-200">{profile.name.trim()}</span>,</span>
            <motion.span 
              className="typing-role-dynamic block min-h-8 bg-gradient-to-r from-cyan-600 via-purple-700 to-cyan-600 bg-clip-text font-bold text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-teal-200 sm:min-h-10 lg:inline"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {typedRole || '\u00a0'}
            </motion.span>
          </motion.p>

          <motion.div 
            className="mt-7 flex flex-row gap-3 sm:mt-9 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a 
              href="#contact" 
              className={`${buttonBase} flex-1 bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-[0_16px_36px_rgba(168,85,247,0.3)] hover:shadow-[0_20px_48px_rgba(168,85,247,0.4)] sm:flex-none dark:from-cyan-400 dark:via-sky-400 dark:to-violet-400 dark:text-slate-950 dark:shadow-[0_18px_44px_rgba(14,165,233,0.25)] dark:hover:shadow-[0_24px_58px_rgba(45,212,191,0.28)]`}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me <FiArrowDownRight />
            </motion.a>
            <motion.a 
              href="#projects" 
              className={`${buttonBase} flex-1 border-2 border-purple-500 bg-white/50 text-slate-950 hover:bg-purple-500/20 sm:flex-none dark:border-sky-300/70 dark:bg-slate-900/45 dark:text-slate-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-teal-200 dark:hover:bg-sky-300/10 dark:hover:text-teal-100`}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto grid w-full max-w-lg place-items-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Gradient Border Rectangle */}
          <motion.div
            className="relative h-[25rem] w-[78vw] max-w-[21.5rem] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-300 to-teal-300 p-1 shadow-2xl sm:h-96 sm:w-64 lg:h-[28rem] lg:w-72"
            animate={{ 
              boxShadow: [
                '0 0 42px rgba(14, 165, 233, 0.34)',
                '0 0 66px rgba(45, 212, 191, 0.42)',
                '0 0 42px rgba(139, 92, 246, 0.34)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Inner white background */}
            <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white dark:bg-[#080d1a]">
              <motion.img
                src={heroImage}
                alt={`${profile.name} hero portrait`}
                width="640"
                height="800"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-500 dark:brightness-105 dark:contrast-105"
                whileHover={{ scale: 1.08 }}
              />
              {/* Overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-sky-500/35 via-transparent to-teal-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </motion.div>

          {/* Floating decorative elements around image */}
          <motion.div
            className="absolute -right-2 -top-5 h-16 w-16 rounded-lg border-2 border-violet-300/60 opacity-60 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-5 -left-3 h-20 w-20 rounded-full border-2 border-teal-300/60 opacity-50 sm:-bottom-8 sm:-left-8 sm:h-24 sm:w-24"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
