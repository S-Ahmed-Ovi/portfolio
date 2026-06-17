import Image from 'next/image';
import { about } from '@/lib/content';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20">
          <Reveal>
            <p className="font-mono text-[13px] text-signal mb-3">01 / About</p>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone text-balance mb-8">
              Why agentic systems, and not just models
            </h2>
            <div className="relative w-full max-w-[260px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08]">
              <Image
                src="/images/profile.png"
                alt="Portrait of Shahabuddin Ahmed Ovi"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(0.25) contrast(1.05)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(11,13,16,0.5) 100%)' }}
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-[16px] lg:text-[17px] text-slate-light leading-[1.75]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
