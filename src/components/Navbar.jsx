import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems } from '../data/portfolio';
import MobileMenu from './MobileMenu';

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <header className="header-surface fixed inset-x-0 top-0 z-50 border-b border-cyan-700/20 backdrop-blur-2xl dark:border-cyan-300/15">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="text-3xl font-black text-slate-950 dark:text-slate-100">
            E<span className="text-cyan-400 dark:text-teal-300">ba</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className={`relative rounded-full px-4 py-2.5 text-base font-bold transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:text-cyan-500 dark:hover:bg-cyan-300/10 dark:hover:text-teal-200 ${
                  isActive
                    ? 'bg-cyan-400/10 text-cyan-500 after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 dark:bg-cyan-300/12 dark:text-teal-200 dark:after:bg-teal-300'
                    : 'text-slate-800 dark:text-slate-300'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setIsDark((value) => !value)}
            className="grid h-9 w-14 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-teal-200 dark:hover:border-teal-200/60 dark:hover:bg-teal-300/15"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`grid h-10 w-10 place-items-center rounded-lg border text-slate-900 transition hover:border-cyan-300 hover:text-cyan-600 dark:text-white lg:hidden ${
              open
                ? 'border-cyan-300 bg-cyan-400 text-slate-950 shadow-[0_10px_24px_rgba(6,182,212,0.22)] dark:border-teal-200 dark:bg-teal-300 dark:text-slate-950'
                : 'border-slate-200 bg-slate-100 dark:border-cyan-300/20 dark:bg-cyan-300/10'
            }`}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <MobileMenu
          activeItem={activeItem}
          navItems={navItems}
          onClose={() => setOpen(false)}
          onSelect={(item) => {
            setActiveItem(item);
            setOpen(false);
          }}
        />
      )}
    </header>
  );
}
