import { useRef } from 'react';
import SpotlightCard from '../bits/SpotlightCard';
import { experience } from '../data';
import { useReveal } from '../hooks';
import Contributions from './Contributions';

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section className="experience wrap" id="experience" aria-labelledby="exp-title" ref={root}>
      <div className="experience__side">
        <h2 className="section-title" id="exp-title">
          Experience &amp; education
        </h2>
        <p className="section-sub">
          Speaking Arabic, English and Turkish. Comfortable in a client call, a code review or a test report.
        </p>
        <Contributions />
      </div>
      <ol className="timeline">
        {experience.map((e, i) => (
          <li key={e.what} className="rv" style={{ ['--i' as string]: i }}>
            <SpotlightCard className="timeline__card" spotlightColor="rgba(229, 38, 31, 0.28)">
              <span className="timeline__when">{e.when}</span>
              <h3 className="timeline__what">{e.what}</h3>
              <p className="timeline__where">{e.where}</p>
              <p className="timeline__note">{e.note}</p>
            </SpotlightCard>
          </li>
        ))}
      </ol>
    </section>
  );
}
