import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-slate-light">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[12px] text-slate-light">Built with Next.js, deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
