'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/content';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 bg-graphite/30">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-3">04 / Stack</p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone mb-14 text-balance">
            The tools the systems are built from
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.08}>
              <div className="rounded-xl border border-white/[0.07] bg-ink/40 p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display font-semibold text-[16px] text-bone">{cat.category}</h3>
                  <span className="font-mono text-[12px] text-signal">{cat.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] mb-5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="h-full rounded-full bg-signal"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md border border-white/[0.08] text-[12px] font-mono text-slate-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
