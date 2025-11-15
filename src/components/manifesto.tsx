// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

type Accent = {
  text: string;
  bg: string;
};

const manifestoPoints: Array<{
  title: string;
  body: string;
  accent: Accent;
}> = [
  {
    title: 'we worship friction',
    body:
      'Smooth is boring. We engineer tactile UI that squeaks, snaps, and somersaults so your audience actually feels something.',
    accent: { text: 'text-bubblegum', bg: 'bg-bubblegum' },
  },
  {
    title: 'we remix nostalgia',
    body:
      'Think VGA palettes drunk on synthwave. We splice analog textures with digital overstimulation for maximum whiplash.',
    accent: { text: 'text-acid', bg: 'bg-acid' },
  },
  {
    title: 'we prototype loud',
    body:
      'From generative typography to physics-driven scrolls, our lab ships experiments before the pixels dry.',
    accent: { text: 'text-vapor', bg: 'bg-vapor' },
  },
];

export function ManifestoGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {manifestoPoints.map((point, index) => (
        <motion.article
          key={point.title}
          whileHover={{ rotate: index % 2 === 0 ? -1.5 : 1.5, translateY: -12 }}
          transition={{ type: 'spring', stiffness: 140, damping: 12 }}
          className="relative flex h-full flex-col gap-6 rounded-3xl border-4 border-white/15 bg-ink/70 p-8 shadow-brutal"
        >
          <span
            className={`font-mono text-xs uppercase tracking-[0.4em] ${point.accent.text}`}
          >
            signal #{index + 1}
          </span>
          <h3 className="font-display text-3xl uppercase text-white">{point.title}</h3>
          <p className="text-sm text-white/70 sm:text-base">{point.body}</p>
          <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
            read more
            <span className={`h-2 w-12 rounded-full ${point.accent.bg}`} />
          </div>
          <div
            className={`pointer-events-none absolute -top-3 -left-3 h-4 w-24 rounded-full ${point.accent.bg}`}
          />
        </motion.article>
      ))}
    </div>
  );
}
