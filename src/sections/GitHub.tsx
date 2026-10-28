import { useEffect, useMemo, useState } from 'react';
import SpotlightCard from '../bits/SpotlightCard';
import { contact } from '../data';

const USER = 'omerbag-9';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#663399',
  SCSS: '#c6538c',
  Java: '#b07219',
  Python: '#3572a5'
};

const ago = (iso: string) => {
  const days = Math.round((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.round(days / 30)}mo ago`;
  return `${Math.round(days / 365)}y ago`;
};

// Public data, fetched in the visitor's browser. If GitHub is unreachable the section falls back to a profile link.
function useGitHub() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=30`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((list: Repo[]) => setRepos(list.filter((r) => !r.fork).slice(0, 6)))
      .catch(() => !ctrl.signal.aborted && setFailed(true));
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: { contributions: Day[] }) => setDays(d.contributions))
      .catch(() => undefined);
    return () => ctrl.abort();
  }, []);

  return { repos, days, failed };
}

function Heatmap({ days }: { days: Day[] }) {
  const total = useMemo(() => days.reduce((a, d) => a + d.count, 0), [days]);
  // pad the first week so columns line up with weekdays
  const pad = new Date(days[0].date).getDay();
  const cells = [...Array(pad).fill(null), ...days];
  return (
    <figure className="heat">
      <div className="heat__grid" role="img" aria-label={`${total} contributions on GitHub in the last year`}>
        {cells.map((d, i) =>
          d ? (
            <span key={d.date} data-l={d.level} title={`${d.count} on ${d.date}`} style={{ ['--i' as string]: i }} />
          ) : (
            <span key={`pad-${i}`} data-pad="" />
          )
        )}
      </div>
      <figcaption>
        <b>{total}</b> contributions in the last year
      </figcaption>
    </figure>
  );
}

export default function GitHub() {
  const { repos, days, failed } = useGitHub();

  return (
    <section className="gh wrap" id="github" aria-labelledby="gh-title">
      <div className="section-head">
        <h2 className="section-title" id="gh-title">
          On GitHub
        </h2>
        <div className="gh__side">
          <p className="section-sub">Live from my profile: what I have been building and pushing lately.</p>
          <a className="btn btn--ghost" href={contact.github} target="_blank" rel="noreferrer">
            @{USER} <span className="arrow">↗</span>
          </a>
        </div>
      </div>

      {days && days.length > 0 && <Heatmap days={days} />}

      {failed ? (
        <a className="gh__fallback" href={contact.github} target="_blank" rel="noreferrer">
          See all repositories on GitHub ↗
        </a>
      ) : (
        <ul className="gh__repos" aria-busy={!repos}>
          {(repos ?? Array.from({ length: 6 }, () => null)).map((r, i) => (
            <li key={r?.id ?? i}>
              {r ? (
                <SpotlightCard className="repo" spotlightColor="rgba(229, 38, 31, 0.25)">
                  <a href={r.homepage || r.html_url} target="_blank" rel="noreferrer" className="repo__link">
                    <span className="repo__name">{r.name.replace(/[-_]/g, ' ')}</span>
                    <span className="repo__desc">{r.description || 'No description yet.'}</span>
                    <span className="repo__meta">
                      {r.language && (
                        <span>
                          <i style={{ background: langColor[r.language] ?? '#aaa' }} /> {r.language}
                        </span>
                      )}
                      {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
                      <span>Updated {ago(r.pushed_at)}</span>
                    </span>
                  </a>
                </SpotlightCard>
              ) : (
                <div className="repo repo--loading" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
