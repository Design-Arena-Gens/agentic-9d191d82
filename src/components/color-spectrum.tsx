// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

const MotionCard = motion.article as any;

const palette = [
  {
    name: 'Neon Echo',
    hex: '#fbff12',
    description: 'The ringtone of a fluorescent sun. Our signature shock highlight for brutal edges.',
  },
  {
    name: 'Bubble Rebellion',
    hex: '#ff71ce',
    description: 'Playful poison pink for moments that should feel like bubblegum laced with glitch.',
  },
  {
    name: 'Acid Bloom',
    hex: '#05ffa1',
    description: 'The afterimage of a rave laser. Balances the palette with electric optimism.',
  },
  {
    name: 'Vapor Soul',
    hex: '#00c2ff',
    description: 'A digital breeze that cools the canvas and anchors magnetic gradients.',
  },
  {
    name: 'Midnight Graph',
    hex: '#1f1b2c',
    description: 'Matte ink that lets every neon scream without losing control.',
  },
];

export function ColorSpectrum() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 lg:grid-cols-5">
        {palette.map((swatch, index) => (
          <MotionCard
            key={swatch.name}
            whileHover={{ y: -12, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative rounded-3xl border-4 border-white/10 bg-ink/90 p-6 shadow-brutal"
          >
            <div
              className="mb-6 h-24 w-full rounded-2xl"
              style={{ background: swatch.hex }}
            />
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">
                {swatch.hex}
              </span>
              <h3 className="font-display text-2xl uppercase text-white">{swatch.name}</h3>
              <p className="text-sm text-white/70">{swatch.description}</p>
            </div>
          </MotionCard>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-3xl border-4 border-white/10 bg-gradient-to-r from-neon via-bubblegum to-vapor p-[3px]"
      >
        <div className="rounded-[1.35rem] bg-ink/90 px-8 py-6 text-sm text-white/70 sm:text-base">
          We treat color like sound design – layering saturation, distortion, and silence until your UI
          bounces. Every project starts with building a bespoke neon chord progression.
        </div>
      </motion.div>
    </div>
  );
}
