import { leadership } from '@/lib/content';
import Reveal from './Reveal';

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-3">05 / Leadership</p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone mb-3 text-balance">
            Leadership beyond engineering
          </h2>
          <p className="text-slate-light text-[15px] mb-14 max-w-xl">
            Coordinating people has turned out to matter as much as coordinating agents.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((entry, i) => (
            <Reveal key={entry.role} delay={i * 0.08}>
              <div className="rounded-xl border border-white/[0.07] bg-graphite/40 p-7 h-full flex flex-col">
                <div className="mb-6">
                  <p className="font-display font-semibold text-[28px] text-signal">{entry.stat.value}</p>
                  <p className="font-mono text-[12px] text-slate-light">{entry.stat.label}</p>
                </div>
                <h3 className="font-display font-semibold text-[17px] text-bone mb-1">{entry.role}</h3>
                <p className="font-mono text-[12px] text-signal mb-1">{entry.org}</p>
                <p className="font-mono text-[11px] text-slate-light mb-4">{entry.period}</p>
                <p className="text-[14px] text-slate-light leading-relaxed">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
