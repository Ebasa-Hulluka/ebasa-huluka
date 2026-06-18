import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Projects() {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [1500, 2000], [0, 100]);

  return (
    <section
      id="projects"
      className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8"
    >
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
            Projects
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
            Real full-stack projects built with practical features, clean interfaces, and production-focused workflows.
          </motion.p>
        </motion.div>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3" style={{ y: yTransform }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-indigo-300/55 bg-white/85 shadow-[0_18px_50px_rgba(8,145,178,0.14)] backdrop-blur-sm transition duration-300 hover:border-indigo-500/60 hover:shadow-[0_24px_70px_rgba(79,70,229,0.22)] dark:border-cyan-400/20 dark:bg-slate-900/45 dark:hover:border-cyan-300/60"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-80" />
                <motion.a
                  href={project.github}
                  aria-label={`Open ${project.title} on GitHub`}
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-purple-500 to-cyan-400 text-lg text-white shadow-lg backdrop-blur transition sm:right-4 sm:top-4 sm:h-11 sm:w-11 sm:text-xl"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-base font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-slate-700 dark:from-white dark:to-slate-300 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:mt-3 sm:min-h-40 sm:text-sm sm:leading-7">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="rounded-lg bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/40 dark:to-cyan-900/40 px-3 py-1.5 text-xs font-bold text-purple-700 dark:text-purple-200 transition sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className="mt-auto pt-4 sm:pt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 px-3 text-xs font-extrabold text-slate-700 dark:text-white transition hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white dark:hover:text-slate-950 sm:min-h-11 sm:px-4 sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub <FiArrowUpRight />
                  </motion.a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
