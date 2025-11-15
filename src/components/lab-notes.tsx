// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

const notes = [
  {
    title: 'Synthwave onboarding',
    date: 'week 23',
    summary:
      'We replaced a fintech sign-up flow with a sequencer that maps user choices to animated riffs.',
    tags: ['ux motion', 'sound design'],
  },
  {
    title: 'Brutal accessibility pass',
    date: 'week 22',
    summary:
      'Prototyped a high-contrast toggle that swaps typography cuts and rebalances motion responsibly.',
    tags: ['a11y', 'interaction'],
  },
  {
    title: 'Holographic lobby',
    date: 'week 20',
    summary:
      'Multi-layer depth simulation using CSS perspective + WebGL shader overlays for a gallery homepage.',
    tags: ['3d', 'shader'],
  },
];

export function LabNotes() {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute left-4 top-6 bottom-6 hidden w-[6px] bg-neon sm:block" />
      <div className="grid gap-10">
        {notes.map((note, index) => (
          <motion.article
            key={note.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border-4 border-white/10 bg-ink/85 p-8 pl-12 shadow-brutal sm:pl-20"
          >
            <div className="absolute left-4 top-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-ink bg-neon sm:flex" />
            <div className="absolute left-0 top-0 h-full w-12 border-r-4 border-white/10 bg-white/5 sm:hidden" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">
                  {note.date}
                </span>
                <div className="flex gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-white/20 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-display text-3xl uppercase text-white">{note.title}</h3>
              <p className="max-w-3xl text-sm text-white/70 sm:text-base">{note.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
