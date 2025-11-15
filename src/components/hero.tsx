// @ts-nocheck
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';

const navItems = [
  { label: 'manifesto', href: '#manifesto' },
  { label: 'antics', href: '#antics' },
  { label: 'spectrum', href: '#spectrum' },
  { label: 'lab notes', href: '#lab-notes' },
  { label: 'join', href: '#join' },
];

const heroWords = ['radical', 'tactile', 'ironic', 'immersive', 'chaotic'];

export function Hero() {
  const { scrollY } = useScroll();
  const skew = useTransform(scrollY, [0, 600], [0, -6]);
  const glow = useTransform(scrollY, [0, 600], [1, 0.4]);

  const marqueePhrase = useMemo(
    () => new Array(6).fill('dorksense').join(' • '),
    []
  );

  return (
    <section className="relative flex min-h-[90vh] flex-col gap-16 pb-24 pt-16 sm:pt-24">
      <motion.header
        style={{ skewY: skew, opacity: glow }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 sm:px-10"
      >
        <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -4, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative rounded-full border-2 border-white bg-ink px-4 py-2 font-mono transition-colors hover:border-neon hover:bg-neon hover:text-ink"
            >
              <span className="relative z-10 mix-blend-screen">{item.label}</span>
              <span className="absolute inset-0 rounded-full border border-dashed border-white/40 group-hover:animate-[ping_1.5s_ease-in-out_infinite]" />
            </motion.a>
          ))}
        </nav>

        <div className="relative flex flex-col gap-8 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-display text-[15vw] uppercase leading-none text-white sm:text-[12vw] lg:text-[10vw]"
          >
            dork<span className="text-outline">sense</span>
          </motion.h1>

          <motion.p
            className="max-w-3xl text-lg font-light text-white/80 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            An overexposed playground for minds that refuse to dim. We mash neon bravado with
            brutal geometry to invent tactile digital experiences that feel like a punchline and a
            prophecy at the same time.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          >
            <Link
              href="#join"
              className="group relative inline-flex items-center gap-3 rounded-full border-4 border-neon bg-bubblegum px-6 py-3 font-mono text-sm uppercase tracking-[0.3em] text-ink shadow-brutal transition-transform hover:-translate-y-1 hover:rotate-1 hover:shadow-[14px_14px_0px_#fbff12]"
            >
              plug in
              <span className="h-2 w-2 rounded-full bg-ink group-hover:animate-ping" />
            </Link>
            <Link
              href="#antics"
              className="inline-flex items-center gap-3 rounded-full border-4 border-white/50 bg-transparent px-6 py-3 font-mono text-sm uppercase tracking-[0.3em] text-white/80 transition hover:border-vapor hover:text-vapor"
            >
              scroll antics ↓
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <motion.div
        className="neon-border relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border-4 border-white/20 bg-ink/80 px-4 py-12 shadow-brutal"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, type: 'spring' }}
      >
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {heroWords.map((word) => (
            <motion.div
              key={word}
              className="flex flex-col gap-2 text-left"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">this
                week&apos;s vibe</span>
              <span className="font-display text-5xl uppercase text-neon sm:text-6xl">
                {word}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col gap-3 text-sm uppercase tracking-[0.6em] text-white/40"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          <div className="whitespace-nowrap font-display text-4xl text-white">
            {marqueePhrase}
          </div>
          <div className="whitespace-nowrap font-display text-4xl text-neon/90">
            {marqueePhrase}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
