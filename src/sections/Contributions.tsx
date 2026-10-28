import { useEffect, useState } from 'react';
import { contact } from '../data';

const USER = 'omerbag-9';

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Fetched in the visitor's browser. If the contributions service is down, fall back to a chart image,
// and if that fails too the card hides itself.
export default function Contributions() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [reported, setReported] = useState<number | null>(null);
  const [mode, setMode] = useState<'loading' | 'grid' | 'image' | 'hidden'>('loading');

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: { contributions: Day[]; total?: { lastYear?: number } }) => {
        if (!d.contributions?.length) throw new Error('empty');
        setDays(d.contributions);
        if (typeof d.total?.lastYear === 'number') setReported(d.total.lastYear);
        setMode('grid');
      })
      .catch(() => !ctrl.signal.aborted && setMode('image'));
    return () => ctrl.abort();
  }, []);

  if (mode === 'hidden') return null;

  // prefer the total the service reports (GitHub's own figure) over summing the days ourselves
  const total = reported ?? days?.reduce((a, d) => a + d.count, 0) ?? 0;
  const pad = days ? new Date(days[0].date).getDay() : 0;
  const cells: (Day | null)[] = days ? [...Array(pad).fill(null), ...days] : [];
  const weeks = Math.ceil(cells.length / 7);
  // a month label sits over the first week that starts in that month
  const labels = Array.from({ length: weeks }, (_, w) => {
    const d = cells[w * 7] ?? cells[w * 7 + 6];
    if (!d) return '';
    const date = new Date(d.date);
    return date.getDate() <= 7 ? MONTHS[date.getMonth()] : '';
    // a partial first week can repeat the next week's month: label each month once
  }).map((l, w, all) => (l && all.slice(Math.max(0, w - 3), w).includes(l) ? '' : l));

  return (
    <a className="contrib" href={contact.github} target="_blank" rel="noreferrer" aria-label="My GitHub profile">
      <span className="contrib__head">
        <b>{mode === 'grid' ? `${total} contributions` : 'GitHub activity'}</b>
        <span>in the last year · @{USER}</span>
      </span>

      {mode === 'grid' && (
        <span className="contrib__chart">
          <span className="contrib__months" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }} aria-hidden="true">
            {labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </span>
          <span className="contrib__grid" role="img" aria-label={`${total} GitHub contributions in the last year`}>
            {cells.map((d, i) =>
              d ? <span key={d.date} data-l={d.level} title={`${d.count} on ${d.date}`} /> : <span key={i} data-pad="" />
            )}
          </span>
        </span>
      )}

      {mode === 'image' && (
        <img
          className="contrib__img"
          src={`https://ghchart.rshah.org/e5261f/${USER}`}
          alt={`GitHub contribution chart for ${USER}`}
          loading="lazy"
          onError={() => setMode('hidden')}
        />
      )}

      {mode === 'loading' && <span className="contrib__loading" aria-hidden="true" />}

      <span className="contrib__legend" aria-hidden="true">
        Less
        {[0, 1, 2, 3, 4].map((l) => (
          <i key={l} data-l={l} />
        ))}
        More
      </span>
    </a>
  );
}
