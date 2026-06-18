import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

export default function MobileMenu({ activeItem, navItems, onClose, onSelect }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[9999] lg:hidden">
      <button
        type="button"
        aria-label="Close navigation menu"
        className="absolute inset-0 h-full w-full cursor-default bg-slate-950/45 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="absolute inset-y-0 right-0 flex w-[78vw] max-w-[310px] flex-col overflow-hidden border-l border-slate-200 bg-white shadow-[-20px_0_48px_rgba(15,23,42,0.3)] dark:border-cyan-300/15 dark:bg-[#080f1f] dark:shadow-[-24px_0_58px_rgba(0,0,0,0.42)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-cyan-300/15">
          <span className="text-base font-black text-slate-950 dark:text-slate-100">Menu</span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-teal-200"
          >
            <FiX />
          </button>
        </div>

        <nav className="grid gap-2 overflow-y-auto p-4">
          {navItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => onSelect(item)}
                className={`flex min-h-12 items-center justify-between rounded-lg border px-4 text-sm font-bold transition duration-200 ${
                  isActive
                    ? 'border-cyan-300 bg-cyan-400 text-slate-950 shadow-[0_10px_24px_rgba(6,182,212,0.24)] dark:border-teal-200 dark:bg-teal-300 dark:text-slate-950'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-300/15 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-teal-200/60 dark:hover:bg-cyan-300/10 dark:hover:text-teal-100'
                }`}
              >
                <span>{item}</span>
                {isActive && <span className="h-2 w-2 rounded-full bg-slate-950" />}
              </a>
            );
          })}
        </nav>
      </aside>
    </div>,
    document.body,
  );
}
