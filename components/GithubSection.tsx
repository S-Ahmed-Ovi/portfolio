'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/content';
import Reveal from './Reveal';

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = profile.githubUsername;

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then((r) =>
        r.ok ? r.json() : Promise.reject()
      ),
    ])
      .then(([userData, repoData]) => {
        setUser(userData);
        setRepos(repoData);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section className="relative py-28 lg:py-36 bg-graphite/30">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-signal mb-3">06 / Activity</p>
          <h2 className="font-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tighter text-bone mb-14 text-balance">
            Live from GitHub
          </h2>
        </Reveal>

        {error && (
          <Reveal>
            <p className="font-mono text-[13px] text-slate-light">
              GitHub data didn&apos;t load — view the profile directly:{' '}
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-signal underline">
                {profile.githubLabel}
              </a>
            </p>
          </Reveal>
        )}

        {!error && (
          <>
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
              {[
                { label: 'Repositories', value: user?.public_repos },
                { label: 'Followers', value: user?.followers },
                { label: 'Following', value: user?.following },
              ].map((stat) => (
                <Reveal key={stat.label}>
                  <div className="rounded-xl border border-white/[0.07] bg-ink/40 p-5 text-center">
                    <p className="font-display font-semibold text-[26px] text-signal tabular-nums">
                      {stat.value ?? '—'}
                    </p>
                    <p className="font-mono text-[11px] text-slate-light mt-1">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(repos ?? Array.from({ length: 3 })).map((repo, i) => (
                <Reveal key={repo ? (repo as Repo).name : i} delay={i * 0.06}>
                  {repo ? (
                    <a
                      href={(repo as Repo).html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-white/[0.07] bg-ink/40 p-6 hover:border-signal/30 transition-colors duration-300 h-full"
                    >
                      <p className="font-display font-semibold text-[15px] text-bone mb-2 truncate">
                        {(repo as Repo).name}
                      </p>
                      <p className="text-[13px] text-slate-light leading-relaxed mb-4 line-clamp-2 min-h-[2.5em]">
                        {(repo as Repo).description || 'No description provided.'}
                      </p>
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-light">
                        <span>{(repo as Repo).language || '—'}</span>
                        <span>★ {(repo as Repo).stargazers_count}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="rounded-xl border border-white/[0.07] bg-ink/40 p-6 h-[140px] animate-pulse" />
                  )}
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
