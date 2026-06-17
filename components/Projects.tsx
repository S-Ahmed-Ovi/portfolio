'use client';

import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/content';
import Reveal from './Reveal';

function FlowStrip({ flow }: { flow: string[] }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-light overflow-x-auto">
      {flow.map((step, i) => (
        <span key={step} className="flex items-center gap-2 flex-shrink-0">
          <span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-bone whitespace-nowrap">
            {step}
          </span>
          {i < flow.length - 1 && <span className="text-signal">→</span>}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group rounded-2xl border border-white/[0.07] bg-graphite/40 p-8 lg:p-10 hover:border-signal/30 transition-colors duration-300"
      >
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <p className="font-mono text-[12px] text-signal mb-2">{project.tagline}</p>
            <h3 className="font-display font-semibold text-[24px] text-bone mb-4">{project.name}</h3>
            <p className="text-slate-light leading-relaxed text-[15px] mb-6">{project.description}</p>

            <div className="mb-6">
              <FlowStrip flow={project.flow} />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-white/10 text-[12px] font-mono text-bone"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-bone hover:text-signal transition-colors duration-200"
            >
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/[0.06] bg-ink/40 p-4">
                  <p className="font-mono text-[11px] text-slate-light mb-1">{metric.label}</p>
                  <p className="font-display font-semibold text-[15px] text-bone">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-ink/40 p-4">
              <p className="font-mono text-[11px] text-slate-light mb-1.5">Challenge</p>
              <p className="text-[13.5px] text-slate-light leading-relaxed">{project.challenge}</p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-ink/40 p-4">
              <p className="font-mono text-[11px] text-signal mb-1.5">Lesson learned</p>
              <p className="text-[13.5px] text-slate-light leading-relaxed">{project.lesson}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-3">03 / Projects</p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone mb-14 text-balance">
            Systems I&apos;ve shipped, not just demoed
          </h2>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
