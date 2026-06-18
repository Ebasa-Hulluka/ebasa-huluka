import React from 'react';
import { FiAward } from 'react-icons/fi';
import { certifications } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-surface px-4 py-12 text-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8"
    >
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-600 bg-clip-text text-3xl font-black text-transparent dark:from-purple-400 dark:via-cyan-300 dark:to-emerald-300 sm:text-5xl">Certifications</h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 sm:mt-4 sm:w-24" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Verified learning milestones and certificates, arranged for quick horizontal browsing.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-color:#22d3ee_transparent] [scrollbar-width:thin]">
          <div className="flex snap-x snap-mandatory gap-4 sm:gap-5">
            {certifications.map((certificate) => (
              <article
                key={certificate.title}
                className="group min-w-[82%] snap-start overflow-hidden rounded-lg border border-indigo-200/80 bg-white/90 shadow-[0_18px_50px_rgba(8,145,178,0.14)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)] dark:border-white/10 dark:bg-slate-950/70 sm:min-w-[calc((100%_-_2.5rem)_/_3)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} preview`}
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-sm font-black text-slate-950 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-950/95 dark:text-white">
                    <FiAward className="text-cyan-500" />
                    {certificate.title}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 dark:border-white/10">
                  <h3 className="text-sm font-black text-slate-950 dark:text-white">{certificate.title}</h3>
                  <FiAward className="text-cyan-500 dark:text-cyan-300" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
