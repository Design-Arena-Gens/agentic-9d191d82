import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { ManifestoGrid } from '@/components/manifesto';
import { ExperimentsShowcase } from '@/components/experiments';
import { ColorSpectrum } from '@/components/color-spectrum';
import { LabNotes } from '@/components/lab-notes';
import { JoinSection } from '@/components/join';
import { Footer } from '@/components/footer';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <div className="relative flex flex-1 flex-col pb-24">
      <div className="brutal-grid pointer-events-none absolute inset-0 -z-10" />
      <Hero />

      <Section
        id="manifesto"
        eyebrow="core rituals"
        title="we craft neon conviction"
        description="Each project is a theatrical collision of grids, gradients, and glitch. Explore the house rules before stepping inside."
      >
        <ManifestoGrid />
      </Section>

      <Section
        id="antics"
        eyebrow="fresh antics"
        title="recent experiments"
        description="Homework from the dorksense lab ― a rotating stack of experiments where we bend scroll physics and graphic noise into interactive theatre."
      >
        <ExperimentsShowcase />
      </Section>

      <Section
        id="spectrum"
        eyebrow="color doctrine"
        title="chromatic swagger"
        description="Our neon gospel is loud but disciplined. These pigments orchestrate the emotional arc of every digital stunt."
      >
        <ColorSpectrum />
      </Section>

      <Section
        id="lab-notes"
        eyebrow="process leaks"
        title="lab notes"
        description="Snapshots from the secret clubhouse — prototypes, rituals, and design trivia we probably shouldn’t share."
      >
        <LabNotes />
      </Section>

      <Section
        id="join"
        eyebrow="membership"
        title="enter the dojo"
        description="Pledge allegiance to the neon order. We promise to only spam your inbox with inspiration worth screenshotting."
      >
        <Suspense fallback={null}>
          <JoinSection />
        </Suspense>
      </Section>

      <Footer />
    </div>
  );
}
