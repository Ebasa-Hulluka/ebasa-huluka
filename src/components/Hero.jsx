import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import heroImage from '../assets/6050933463902261025.jpg';

const buttonBase =
  'inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-7 text-base font-black transition focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:min-h-14 sm:px-8';

const rotatingRoles = ['a Full-Stack Web Developer', 'a Video Editor'];
const hexClip = {
  clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
};

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
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-50 px-4 pb-20 pt-24 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 sm:pb-28 lg:px-8 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94),rgba(255,255,255,0.78)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22700%22 viewBox=%220 0 1200 700%22%3E%3Cg fill=%22none%22 font-family=%22monospace%22 font-size=%2234%22 font-weight=%22700%22 opacity=%220.28%22%3E%3Ctext x=%2280%22 y=%2280%22 fill=%22%239b1b5a%22%3E%26lt;/Header%26gt;%3C/text%3E%3Ctext x=%22260%22 y=%22160%22 fill=%22%2306b6d4%22%3Econst portfolio = true;%3C/text%3E%3Ctext x=%2230%22 y=%22250%22 fill=%22%239b1b5a%22%3E%26lt;main className=%22hero%22%26gt;%3C/text%3E%3Ctext x=%22440%22 y=%22340%22 fill=%22%2306b6d4%22%3Edisplay: flex;%3C/text%3E%3Ctext x=%22240%22 y=%22480%22 fill=%22%239b1b5a%22%3ElinearGradient id=%22gold%22%3C/text%3E%3Ctext x=%22560%22 y=%22590%22 fill=%22%2306b6d4%22%3Ebuild(realWorldSolutions)%3C/text%3E%3C/g%3E%3C/svg%3E')] dark:bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(15,23,42,0.82)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22700%22 viewBox=%220 0 1200 700%22%3E%3Cg fill=%22none%22 font-family=%22monospace%22 font-size=%2234%22 font-weight=%22700%22 opacity=%220.28%22%3E%3Ctext x=%2280%22 y=%2280%22 fill=%22%239b1b5a%22%3E%26lt;/Header%26gt;%3C/text%3E%3Ctext x=%22260%22 y=%22160%22 fill=%22%2306b6d4%22%3Econst portfolio = true;%3C/text%3E%3Ctext x=%2230%22 y=%22250%22 fill=%22%239b1b5a%22%3E%26lt;main className=%22hero%22%26gt;%3C/text%3E%3Ctext x=%22440%22 y=%22340%22 fill=%22%2306b6d4%22%3Edisplay: flex;%3C/text%3E%3Ctext x=%22240%22 y=%22480%22 fill=%22%239b1b5a%22%3ElinearGradient id=%22gold%22%3C/text%3E%3Ctext x=%22560%22 y=%22590%22 fill=%22%2306b6d4%22%3Ebuild(realWorldSolutions)%3C/text%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(6,182,212,0.22),transparent_22%),radial-gradient(circle_at_16%_30%,rgba(16,185,129,0.15),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(241,245,249,0.96))] dark:bg-[radial-gradient(circle_at_78%_36%,rgba(6,182,212,0.18),transparent_22%),radial-gradient(circle_at_16%_30%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0),rgba(15,23,42,0.9))]" />
      <div className="absolute left-[18%] top-20 h-2 w-2 rotate-45 bg-cyan-400" />
      <div className="absolute left-[48%] top-28 h-4 w-4 rotate-45 border-2 border-cyan-300" />
      <div className="absolute right-[10%] top-56 h-2 w-2 rotate-45 bg-cyan-500/70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-9 sm:gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="max-w-4xl text-[2.85rem] font-black leading-[1.06] text-slate-950 dark:text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
            Welcome To <span className="text-cyan-400">My</span>
            <span className="block text-cyan-500 dark:text-cyan-300">Portfolio!</span>
          </h1>
          <p className="mt-7 flex max-w-3xl flex-wrap items-center gap-x-2 text-xl font-semibold leading-8 text-slate-800 dark:text-white/90 sm:mt-9 sm:text-3xl">
            <span>I am {profile.name.trim()},</span>
            <span className="typing-role-dynamic text-cyan-500 dark:text-cyan-300">{typedRole}</span>
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:gap-4">
            <a href="#contact" className={`${buttonBase} bg-cyan-400 text-slate-950 shadow-[0_16px_36px_rgba(6,182,212,0.25)] hover:-translate-y-1 hover:bg-cyan-300`}>
              Hire Me <FiArrowDownRight />
            </a>
            <a href="#projects" className={`${buttonBase} border-2 border-cyan-400 bg-white/50 text-slate-950 hover:-translate-y-1 hover:bg-cyan-400 dark:bg-transparent dark:text-cyan-300 dark:hover:text-slate-950`}>
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto grid w-full max-w-lg place-items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div
            className="relative grid aspect-square w-60 place-items-center bg-cyan-400 p-[6px] shadow-[0_0_38px_rgba(6,182,212,0.42)] transition duration-500 ease-out hover:scale-105 hover:rotate-2 sm:w-72 sm:p-2 sm:shadow-[0_0_42px_rgba(6,182,212,0.45)] lg:w-80"
            style={hexClip}
          >
            <div className="grid h-full w-full place-items-center bg-white p-[7px]" style={hexClip}>
              <img
                src={heroImage}
                alt={`${profile.name} hero portrait`}
                className="h-full w-full object-cover object-center"
                style={hexClip}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
