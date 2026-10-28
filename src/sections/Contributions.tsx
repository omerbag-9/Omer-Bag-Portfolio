import { useEffect, useState } from 'react';
import { contact } from '../data';

const USER = 'omerbag-9';

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Prefers contributions.json (written at deploy, includes private work), then the public calendar service,
// then a chart image; if all fail the card hides itself.
export default function Contributions() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [reported, setReported] = useState<number | null>(null);
  const [mode, setMode] = useState<'loading' | 'grid' | 'image' | 'hidden'>('loading');

  useEffect(() => {
    const ctrl = new AbortController();
    const show = (list: Day[], total?: number) => {
      if (!list?.length) throw new Error('empty');
      setDays(list);
      if (typeof total === 'number') setReported(total);
      setMode('grid');
    };
    const publicCalendar = () =>
      fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { signal: ctrl.signal })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((d: { contributions: Day[]; total?: { lastYear?: number } }) => show(d.contributions, d.total?.lastYear));
    // contributions.json is written at deploy time with the owner's token, so it includes private contributions
    // and matches the count on github.com; without it, use the public calendar.
    fetch('./contributions.json', { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: { contributions: Day[]; total: number }) => show(d.contributions, d.total))
      .catch(() => (ctrl.signal.aborted ? undefined : publicCalendar()))
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
        <b>{mode === 'grid' ? `${total.toLocaleString()} contributions in the last year` : 'GitHub activity'}</b>
        <span>@{USER} on GitHub</span>
      </span>

      {mode === 'grid' && (
        <span className="contrib__chart">
          <span className="contrib__months" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }} aria-hidden="true">
            {labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </span>
          <span className="contrib__days" aria-hidden="true">
            <span />
            <span>Mon</span>
            <span />
            <span>Wed</span>
            <span />
            <span>Fri</span>
            <span />
          </span>
          <span className="contrib__grid" role="img" aria-label={`${total} GitHub contributions in the last year`}>
            {cells.map((d, i) =>
              d ? <span key={d.date} data-l={d.level} title={`${d.count || 'No'} contribution${d.count === 1 ? '' : 's'} on ${d.date}`} /> : <span key={i} data-pad="" />
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
