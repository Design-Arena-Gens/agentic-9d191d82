// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative mt-28 border-t-4 border-white/10 bg-ink/80">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="font-display text-4xl uppercase text-neon">dorksense</h4>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/20 px-4 py-2"
            >
              instagram
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/20 px-4 py-2"
            >
              dribbble
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/20 px-4 py-2"
            >
              behance
            </a>
            <a
              href="mailto:hi@dorksense.xyz"
              className="rounded-full border-2 border-white/20 px-4 py-2"
            >
              hi@dorksense.xyz
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t-2 border-dashed border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} dorksense — built with neon &amp; mischief.</span>
          <span className="font-mono uppercase tracking-[0.3em]">made on planet earth*</span>
        </div>
      </motion.div>
    </footer>
  );
}
