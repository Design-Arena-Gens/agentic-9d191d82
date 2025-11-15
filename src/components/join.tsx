// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

export function JoinSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== 'idle') return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2.5rem] border-4 border-white/20 bg-gradient-to-br from-ink via-ink/95 to-ink/80 p-8 sm:p-12"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-neon/40 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-5">
          <span className="font-mono text-xs uppercase tracking-[0.5em] text-white/60">
            join the signal list
          </span>
          <h3 className="font-display text-4xl uppercase text-white sm:text-5xl">
            Become a certified dork
          </h3>
          <p className="text-sm text-white/70 sm:text-base">
            We drop monthly dispatches packed with prototypes, references, and sneaky invites to our
            midnight design studies. No spam, only sonic gradients.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-4 rounded-3xl border-4 border-white/10 bg-ink/70 p-6 shadow-brutal"
        >
          <label className="font-mono text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="email">
            your hotline
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="dork@dimension.club"
            className="w-full rounded-2xl border-4 border-white/15 bg-transparent px-5 py-3 font-mono text-sm uppercase tracking-[0.2em] text-white placeholder:text-white/30 focus:border-neon focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            disabled={status !== 'idle'}
            className="flex items-center justify-center gap-3 rounded-full border-[3px] border-neon bg-bubblegum px-6 py-3 font-mono text-sm uppercase tracking-[0.35em] text-ink shadow-brutal transition disabled:cursor-not-allowed disabled:border-white/30 disabled:bg-white/20 disabled:text-white/40"
          >
            {status === 'idle' && 'send signal'}
            {status === 'sending' && 'dialing…'}
            {status === 'sent' && 'transmitted ✔'}
          </motion.button>
          <span className="text-xs text-white/40">
            Signing up implies consent to occasionally receive ASCII art and motion experiments.
          </span>
        </form>
      </div>
    </motion.div>
  );
}
