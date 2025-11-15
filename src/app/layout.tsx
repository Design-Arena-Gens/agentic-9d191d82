import './globals.css';
import type { Metadata } from 'next';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'dorksense',
  description:
    'dorksense — an unapologetically loud neobrutalist experience built for the fringe minds.',
  openGraph: {
    title: 'dorksense',
    description: 'A saturated neobrutalist playground of scroll-triggered color storms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dorksense',
    description: 'Dive into a hyper-colored neobrutalist scroll odyssey.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'relative min-h-screen overflow-x-hidden bg-ink text-white',
          "before:pointer-events-none before:absolute before:inset-0 before:block before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)] before:opacity-40 before:mix-blend-soft-light"
        )}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
          <div className="absolute -top-10 -left-20 h-80 w-80 rounded-full bg-bubblegum blur-3xl" />
          <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-acid blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-vapor blur-3xl" />
        </div>
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
