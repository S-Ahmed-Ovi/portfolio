'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-graphite/70 backdrop-blur-xl border border-white/[0.06] rounded-full mx-4 lg:mx-auto px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : ''
        }`}
      >
        <a
          href="#"
          className="font-display font-semibold text-bone text-[15px] tracking-tight flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_#6FE3C4]" />
          S Ahmed Ovi
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-mono text-slate-light hover:text-bone transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-[13px] font-mono px-4 py-1.5 rounded-full border border-signal/30 text-signal hover:bg-signal/10 transition-colors duration-200"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.header>
  );
}
