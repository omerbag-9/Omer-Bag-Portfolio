import { useEffect, useState } from 'react';
import MagicBento, { type MagicBentoItem } from '../bits/MagicBento';
import BlurText from '../bits/BlurText';

const fmt = (zone: string, d: Date) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hour12: false }).format(d);

function Clocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 20000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="v-clocks">
      <div>
        <b>{fmt('Africa/Cairo', now)}</b>
        <span>Cairo</span>
      </div>
      <div>
        <b>{fmt('America/Toronto', now)}</b>
        <span>Toronto</span>
      </div>
    </div>
  );
}

const Chips = ({ items }: { items: string[] }) => (
  <div className="v-chips">
    {items.map((i, n) => (
      <span key={i} style={{ ['--n' as string]: n }}>
        {i}
      </span>
    ))}
  </div>
);

const Router = () => (
  <div className="v-router">
    <p className="v-router__prompt">› write a user guide for the new checkout</p>
    <div className="v-router__skills">
      {['skill-router', 'user-guides', 'test-design', 'release-notes'].map((k, n) => (
        <span key={k} data-on={n < 2} style={{ ['--n' as string]: n }}>
          {k}
        </span>
      ))}
    </div>
  </div>
);

const Steps = () => (
  <ol className="v-steps">
    {['Requirements', 'Build', 'Test', 'Release', 'Handover'].map((s, n) => (
      <li key={s} style={{ ['--n' as string]: n }}>
        {s}
      </li>
    ))}
  </ol>
);

const items: MagicBentoItem[] = [
  {
    label: 'Development',
    title: 'Build web products',
    description: 'React and Node.js features, landing pages and fixes on live products, written to be tested.',
    visual: <Chips items={['React', 'Node.js', 'TypeScript', 'MongoDB', 'MySQL', 'GSAP']} />,
    colSpan: 2,
    rowSpan: 1
  },
  {
    label: 'Quality',
    title: 'Test like your users will',
    description: 'ISTQB-certified. Test plans, Playwright automation, API and accessibility testing.',
    visual: 'automation',
    colSpan: 1,
    rowSpan: 2
  },
  {
    label: 'AI',
    title: 'Claude skills',
    description: 'I write and publish AI agent skills that make repeat work consistent.',
    visual: <Router />,
    colSpan: 1,
    rowSpan: 2
  },
  {
    label: 'Delivery',
    title: 'Own the release',
    description: 'Requirements, risks, weekly updates and launch sign-off. One owner, start to finish.',
    visual: <Steps />,
    colSpan: 2,
    rowSpan: 1
  },
  {
    label: 'Business',
    title: 'Read the business first',
    description: 'I turn what stakeholders mean into acceptance criteria before code is written.',
    visual: 'integration',
    colSpan: 2,
    rowSpan: 1
  },
  {
    label: 'Remote',
    title: 'Canada hours from Cairo',
    description: 'Toronto’s morning is my afternoon. Daily overlap for calls and releases.',
    visual: <Clocks />,
    colSpan: 2,
    rowSpan: 1
  }
];

export default function Services() {
  return (
    <section className="services wrap" id="services" aria-labelledby="services-title">
      <div className="section-head">
        <h2 className="section-title" id="services-title">
          What I do
        </h2>
        <BlurText
          className="section-sub"
          text="One person who can build the feature, test it and own the release. Hire me for one part or the whole path."
          delay={30}
          animateBy="words"
        />
      </div>
      <MagicBento
        items={items}
        columns={6}
        rowHeight={230}
        gap={14}
        radius={22}
        theme="dark"
        glowColor="229, 38, 31"
        enableStars
        enableSpotlight
        enableBorderGlow
        enableTilt={false}
        enableMagnetism
        clickEffect
        textAutoHide={false}
      />
    </section>
  );
}
