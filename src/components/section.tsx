// @ts-nocheck
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="section-pin relative mx-auto mb-32 flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col gap-4"
      >
        {eyebrow ? (
          <span className="font-mono text-xs uppercase tracking-[0.5em] text-acid">{eyebrow}</span>
        ) : null}
        <h2 className="font-display text-5xl uppercase text-neon sm:text-6xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base text-white/70 sm:text-lg">{description}</p>
        ) : null}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative"
      >
        {children}
      </motion.div>
    </section>
  );
}
