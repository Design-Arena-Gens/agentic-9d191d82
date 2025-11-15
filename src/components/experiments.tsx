// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiments = [
  {
    title: 'Glitch Bloom',
    blurb: 'Reactive typography that blooms on scroll, weaponizing moiré and brutal offsets.',
    color: 'from-bubblegum via-neon to-vapor',
    image: '/patterns/pattern-1.svg',
  },
  {
    title: 'Analog Sequencer',
    blurb: 'A playable soundboard for UI motion studies, built with haptics and retro noise.',
    color: 'from-acid via-vapor to-bubblegum',
    image: '/patterns/pattern-2.svg',
  },
  {
    title: 'Parallax Paradox',
    blurb: 'Layered brutal slabs that fold over your scroll momentum like graphic origami.',
    color: 'from-vapor via-dusk to-neon',
    image: '/patterns/pattern-3.svg',
  },
];

export function ExperimentsShowcase() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {experiments.map((experiment, index) => (
        <motion.div
          key={experiment.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-3xl border-4 border-white/15 bg-ink/80 p-8 shadow-brutal"
        >
          <div className={`absolute inset-0 opacity-80 transition group-hover:opacity-100 bg-gradient-to-br ${experiment.color}`} />
          <div className="relative z-10 flex h-full flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/70">prototype</span>
            <h3 className="font-display text-3xl uppercase text-ink drop-shadow-[6px_6px_0px_rgba(251,255,18,0.8)] group-hover:drop-shadow-[10px_10px_0px_rgba(15,13,21,0.8)]">
              {experiment.title}
            </h3>
            <p className="text-sm text-white/80 sm:text-base">{experiment.blurb}</p>
            <div className="mt-auto flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em]">
              <span>view case</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                ↗
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-60">
            <Image src={experiment.image} alt="" fill className="object-contain" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
