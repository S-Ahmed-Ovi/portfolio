'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { hero, profile } from '@/lib/content';

const nodes = [
  { id: 'plan', label: 'Plan', x: 90, y: 80 },
  { id: 'retrieve', label: 'Retrieve', x: 280, y: 40 },
  { id: 'verify', label: 'Verify', x: 280, y: 160 },
  { id: 'synthesize', label: 'Synthesize', x: 470, y: 100 },
];

const edges: [string, string][] = [
  ['plan', 'retrieve'],
  ['plan', 'verify'],
  ['retrieve', 'synthesize'],
  ['verify', 'synthesize'],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient gradient wash, single source, restrained */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6FE3C4, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="relative w-11 h-11 rounded-full overflow-hidden border border-signal/30 flex-shrink-0">
              <Image
                src="/images/profile.png"
                alt="Shahabuddin Ahmed Ovi"
                fill
                className="object-cover"
                style={{ filter: 'grayscale(0.2) contrast(1.05)' }}
                priority
              />
            </span>
            <p className="font-mono text-[13px] text-signal tracking-tight">
              {hero.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tightest text-bone text-balance"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-[17px] text-slate-light leading-relaxed max-w-lg"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-signal text-ink font-medium text-[14px] hover:bg-signal/90 transition-colors duration-200"
            >
              View projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-white/15 text-bone font-medium text-[14px] hover:border-white/30 hover:bg-white/[0.03] transition-colors duration-200"
            >
              Download résumé
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-bone font-medium text-[14px] hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
            >
              Contact me →
            </a>
          </motion.div>
        </div>

        {/* Signature element: live agent pipeline diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/[0.07] bg-graphite/40 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] text-slate-light">agentic_rag.trace</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-signal">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" />
                running
              </span>
            </div>
            <svg viewBox="0 0 560 220" className="w-full h-auto" role="img" aria-label="Diagram of an agentic RAG pipeline with Plan, Retrieve, Verify, and Synthesize stages">
              {edges.map(([from, to], i) => {
                const a = getNode(from);
                const b = getNode(to);
                return (
                  <line
                    key={i}
                    x1={a.x + 36}
                    y1={a.y + 18}
                    x2={b.x - 4}
                    y2={b.y + 18}
                    stroke="#3D4451"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  >
                    <animate
                      attributeName="stroke"
                      values="#3D4451;#6FE3C4;#3D4451"
                      dur="2.4s"
                      begin={`${i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                );
              })}
              {nodes.map((node, i) => (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                  <rect
                    width="92"
                    height="36"
                    rx="8"
                    fill="#1A1F26"
                    stroke="#3D4451"
                    strokeWidth="1.2"
                  >
                    <animate
                      attributeName="stroke"
                      values="#3D4451;#6FE3C4;#3D4451"
                      dur="2.4s"
                      begin={`${i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="46"
                    y="23"
                    textAnchor="middle"
                    fill="#E8E6E1"
                    fontSize="12.5"
                    fontFamily="var(--font-mono)"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="mt-4 font-mono text-[11px] text-slate-light leading-relaxed">
              4 agent roles · self-verifying retrieval · {profile.name.split(' ')[0]}&apos;s research assistant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
