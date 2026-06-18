import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBookOpen, FiDownload, FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';
import cvFile from '../assets/ebasa hulluka (1).pdf';

export default function About() {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [800, 1200], [0, 100]);

  const personalInfo = [
    { label: 'Name', value: profile.name.trim(), icon: FiUser },
    { label: 'Email', value: profile.email, icon: FiMail },
    { label: 'Phone', value: profile.phone, icon: FiPhone },
    { label: 'Location', value: profile.location, icon: FiMapPin },
    { label: 'Education', value: 'Software Engineering', icon: FiBookOpen },
    { label: 'Freelance', value: 'Available', icon: FaHandshake, badge: true },
  ];

  return (
    <section id="about" className="section-surface px-4 py-24 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8">
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 dark:from-purple-400 dark:via-cyan-300 dark:to-purple-400 sm:text-5xl"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.p 
            className="mt-7 text-lg font-medium text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get to know me and my professional journey
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-10 rounded-2xl border-2 border-indigo-300/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(8,145,178,0.16)] backdrop-blur-sm transition duration-300 hover:shadow-[0_30px_80px_rgba(79,70,229,0.18)] dark:border-cyan-400/40 dark:bg-slate-900/50 dark:shadow-[0_20px_60px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_30px_80px_rgba(168,85,247,0.25)] sm:mt-16 sm:p-8 overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ y: yTransform }}
        >
          {/* Animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(340px,0.64fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-600 dark:from-white dark:to-slate-300 sm:text-3xl">
                {profile.name.trim()}
              </h3>
              <p className="mt-4 max-w-3xl text-sm font-normal leading-7 text-slate-600 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-9">
                {profile.summary}
              </p>

              <motion.a
                href={cvFile}
                download
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 text-sm font-black text-white shadow-[0_16px_36px_rgba(168,85,247,0.3)] transition hover:shadow-[0_20px_48px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-4 focus:ring-purple-300/30 sm:mt-8 sm:min-h-14 sm:px-8 sm:text-base"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download My CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex w-full flex-col justify-start rounded-2xl border border-indigo-200/90 bg-gradient-to-br from-white/90 to-cyan-50/70 px-5 py-5 backdrop-blur-sm dark:border-cyan-400/20 dark:from-purple-950/20 dark:to-cyan-950/10 lg:max-w-lg lg:justify-self-end lg:self-stretch"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-600 dark:from-purple-400 dark:to-cyan-300">
                Personal Information
              </h3>
              <dl className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                {personalInfo.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <motion.div 
                      key={item.label} 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 text-base text-white shadow-lg group-hover:shadow-purple-300/50 transition duration-300">
                        <Icon />
                      </span>
                      <div className="min-w-0 flex-1">
                        <dt className="text-sm font-extrabold text-slate-800 dark:text-white">{item.label}</dt>
                        <dd className="mt-1 text-[13px] font-medium leading-5 text-slate-600 dark:text-slate-300">
                          {item.badge ? (
                            <span className="inline-flex rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 px-2.5 py-1 text-xs font-black text-white">
                              {item.value}
                            </span>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    </motion.div>
                  );
                })}
              </dl>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

