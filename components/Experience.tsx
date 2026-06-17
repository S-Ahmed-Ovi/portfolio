import { experience } from '@/lib/content';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 bg-graphite/30">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-3">02 / Experience</p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone mb-14 text-balance">
            Where the theory meets production
          </h2>
        </Reveal>

        <div className="space-y-10">
          {experience.map((entry, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 border-l-2 border-signal/40 pl-8 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-signal shadow-[0_0_12px_#6FE3C4]" />
                <div>
                  <p className="font-mono text-[13px] text-slate-light">{entry.period}</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[20px] text-bone">{entry.role}</h3>
                  <p className="text-signal text-[14px] font-mono mt-1 mb-4">{entry.org}</p>
                  <p className="text-slate-light leading-relaxed text-[15px] max-w-2xl mb-5">{entry.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-white/10 text-[12px] font-mono text-bone bg-white/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
