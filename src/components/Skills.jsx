import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFileAlt } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';
import resumePdf from '../assets/ebasa hulluka (1).pdf';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-surface px-4 py-10 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-24 lg:px-8"
    >
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-lg border border-indigo-200/80 bg-white/85 p-3 shadow-[0_20px_60px_rgba(8,145,178,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl dark:!bg-[#0b1224]/80 dark:!bg-none dark:border-cyan-300/20 dark:shadow-[0_22px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex flex-co gap-3 border-b border-indigo-200/80 pb-4 dark:border-cyan-300/10 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-200 bg-cyan-100/70 text-lg text-cyan-600 shadow-[0_0_28px_rgba(34,211,238,0.14)] dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-300 sm:h-11 sm:w-11 sm:text-xl">
                <FaCode />
              </span>
              <div>
                <h2 className="text-xl font-black leading-tight text-slate-900 dark:text-white sm:text-2xl">Developer Skills</h2>
                <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">Professional toolkit & expertise</p>
              </div>
            </div>

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/70 bg-gradient-to-r from-purple-500 to-cyan-400 px-4 text-sm font-black text-white shadow-[0_12px_28px_rgba(8,145,178,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(79,70,229,0.2)] dark:border-slate-600/60 dark:bg-slate-800/75 dark:bg-none dark:text-slate-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-cyan-300/40 dark:hover:bg-slate-800 sm:w-auto"
            >
              <FaFileAlt className="text-base text-white dark:text-slate-300" />
              View Resume
            </a>
          </div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                className="rounded-lg border border-indigo-200/80 bg-gradient-to-br from-white/95 to-cyan-50/70 p-3 shadow-[0_12px_34px_rgba(8,145,178,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] dark:!bg-slate-900/55 dark:!bg-none dark:border-cyan-300/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-200 bg-gradient-to-br from-cyan-100 to-purple-100 text-base text-cyan-600 shadow-[0_0_24px_rgba(34,211,238,0.12)] dark:border-cyan-300/10 dark:from-cyan-400/15 dark:to-purple-500/20 dark:text-cyan-300 sm:h-10 sm:w-10 sm:text-lg">
                    <group.icon />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-slate-100 sm:text-lg">{group.category}</h3>
                    <p className="mt-0.5 text-[0.7rem] font-medium leading-tight text-slate-600 dark:text-slate-400 sm:text-sm">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4">
                  {group.items.map((skill, skillIdx) => {
                    const iconColor =
                      skill.color === 'text-slate-100' ? 'text-slate-700 dark:text-slate-100' : skill.color;

                    return (
                      <motion.div
                        key={skill.name}
                        className="group flex min-h-20 flex-col items-center justify-center rounded-md border border-indigo-100 bg-white/90 p-2 text-center shadow-[0_8px_22px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-50/70 hover:shadow-[0_14px_34px_rgba(6,182,212,0.12)] dark:!bg-slate-800/60 dark:!bg-none dark:border-cyan-300/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-cyan-300/35 dark:hover:!bg-slate-800/80 sm:min-h-32 sm:p-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + skillIdx * 0.03 }}
                      >
                        <motion.span
                          className={`mb-2 grid h-8 w-8 place-items-center text-3xl sm:mb-3 sm:h-10 sm:w-10 sm:text-4xl ${iconColor}`}
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 2.2, delay: skillIdx * 0.12, repeat: Infinity }}
                        >
                          <skill.icon />
                        </motion.span>
                        <span className="text-[0.68rem] font-black leading-tight text-slate-900 dark:text-slate-100 sm:text-sm">{skill.name}</span>
                        <span className="mt-1 text-[0.62rem] font-semibold leading-tight text-slate-600 dark:text-slate-400 sm:mt-2 sm:text-xs">
                          {skill.subtitle}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
