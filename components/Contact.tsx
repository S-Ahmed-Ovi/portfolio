import { profile } from '@/lib/content';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full opacity-[0.1] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6FE3C4, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-4">07 / Contact</p>
          <h2 className="font-display font-semibold text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tightest text-bone mb-6 text-balance">
            Let&apos;s build the future together
          </h2>
          <p className="text-slate-light text-[16px] leading-relaxed max-w-lg mx-auto mb-10">
            Open to roles and collaborations in agentic AI, applied ML, and systems that need to reason —
            not just respond.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-7 py-3.5 rounded-lg bg-signal text-ink font-medium text-[14px] hover:bg-signal/90 transition-colors duration-200"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg border border-white/15 text-bone font-medium text-[14px] hover:border-white/30 hover:bg-white/[0.03] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg border border-white/15 text-bone font-medium text-[14px] hover:border-white/30 hover:bg-white/[0.03] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
