import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import GlassCard from './GlassCard';
import { profile } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const contactItems = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    {
      label: 'GitHub',
      value: 'github.com/Ebasa-Hulluka',
      href: 'https://github.com/Ebasa-Hulluka',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ebasa-huluka',
      href: 'https://www.linkedin.com/in/ebasa-huluka',
      icon: FaLinkedin,
    },
    {
      label: 'Telegram',
      value: '@ebo1234e',
      href: 'https://t.me/ebo1234e',
      icon: FaTelegramPlane,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const message = formData.get('message');
    const subject = encodeURIComponent(`New project message from ${name || 'Portfolio visitor'}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        '',
        'Message:',
        message,
      ].join('\n')
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-32 lg:px-8">
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
            Contact
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
            Send a message about the website, API, full-stack app, or video project you want to build.
          </motion.p>
        </motion.div>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="rounded-2xl border-2 border-indigo-300/55 bg-white/85 p-4 backdrop-blur-sm dark:border-cyan-400/20 dark:bg-slate-900/45 sm:rounded-2xl sm:p-6">
            <motion.h3 
              className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 sm:text-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Info
            </motion.h3>
            <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">
              {contactItems.map(({ label, value, href, icon: Icon }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-xl transition sm:gap-4 hover:opacity-90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 text-lg text-white shadow-lg sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon />
                  </motion.span>
                  <span className="min-w-0">
                    <span className="block text-base font-black text-slate-900 dark:text-white sm:text-lg">{label}</span>
                    <span className="mt-0.5 block break-words text-sm font-medium text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.h4 
              className="mt-6 text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-300 sm:mt-8 sm:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Follow Me
            </motion.h4>
            <motion.div 
              className="mt-4 flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {profile.socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-indigo-400/45 bg-gradient-to-br from-white/90 to-cyan-50/80 text-lg text-slate-900 shadow-sm transition hover:border-indigo-500/60 dark:border-cyan-400/20 dark:from-purple-950/20 dark:to-cyan-950/10 dark:text-white dark:hover:border-cyan-300/60"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </GlassCard>

          <GlassCard className="rounded-2xl border-2 border-indigo-300/55 bg-white/85 p-4 backdrop-blur-sm dark:border-cyan-400/20 dark:bg-slate-900/45 sm:rounded-2xl sm:p-6" delay={0.08}>
            <form className="grid gap-3.5" onSubmit={handleSubmit}>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <motion.label 
                  className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Name
                  <motion.input 
                    name="name" 
                    required 
                    className="min-h-11 rounded-lg border-2 border-indigo-300/50 bg-white/90 px-4 text-slate-950 outline-none transition focus:border-indigo-500/70 focus:ring-4 focus:ring-indigo-300/20 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-300/60 dark:focus:ring-cyan-300/20"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.label>
                <motion.label 
                  className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                >
                  Email
                  <motion.input 
                    name="email" 
                    type="email" 
                    required 
                    className="min-h-11 rounded-lg border-2 border-indigo-300/50 bg-white/90 px-4 text-slate-950 outline-none transition focus:border-indigo-500/70 focus:ring-4 focus:ring-indigo-300/20 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-300/60 dark:focus:ring-cyan-300/20"
                    placeholder="you@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.label>
              </div>
              <motion.label 
                className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Project Type
                <motion.input 
                  name="projectType" 
                  required 
                  className="min-h-11 rounded-lg border-2 border-indigo-300/50 bg-white/90 px-4 text-slate-950 outline-none transition focus:border-indigo-500/70 focus:ring-4 focus:ring-indigo-300/20 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-300/60 dark:focus:ring-cyan-300/20"
                  placeholder="Full-stack app, REST API, frontend UI..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.label>
              <motion.label 
                className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                Message
                <motion.textarea 
                  name="message" 
                  required 
                  className="min-h-28 resize-y rounded-lg border-2 border-indigo-300/50 bg-white/90 px-4 py-3 text-slate-950 outline-none transition focus:border-indigo-500/70 focus:ring-4 focus:ring-indigo-300/20 dark:border-cyan-400/20 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-300/60 dark:focus:ring-cyan-300/20"
                  placeholder="Tell me about your goals, timeline, and expected deliverables."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.label>
              <motion.button 
                type="submit" 
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 px-6 text-sm font-extrabold text-white transition hover:shadow-[0_20px_48px_rgba(168,85,247,0.4)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <FiSend />
              </motion.button>
              {sent && (
                <motion.div 
                  className="rounded-lg border-2 border-purple-300/50 dark:border-cyan-400/30 bg-gradient-to-r from-purple-100/40 to-cyan-100/40 dark:from-purple-950/30 dark:to-cyan-950/20 px-4 py-3 text-sm font-bold text-purple-700 dark:text-cyan-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your email app is opening with the message addressed to {profile.email}.
                </motion.div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
