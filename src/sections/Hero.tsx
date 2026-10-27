import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../bits/SplitText';
import Magnet from '../bits/Magnet';
import { CodeShot, SkillShot, TestShot, UpdateShot } from '../fragments';
import { reducedMotion } from '../hooks';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { step: 'Build', ground: '#0a0a0a', panel: '#1b1b1b', caption: 'the routing code behind the brief form on this page.', Shot: CodeShot },
  { step: 'Test', ground: '#120d0c', panel: '#2a1412', caption: 'this site’s own Playwright suite, run on every push.', Shot: TestShot },
  { step: 'Deliver', ground: '#0c0e10', panel: '#1a1f24', caption: 'the weekly update format I send every client.', Shot: UpdateShot },
  { step: 'Automate', ground: '#100b0a', panel: '#33100d', caption: 'Skill Router, a Claude skill I wrote and published.', Shot: SkillShot }
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = gsap.utils.toArray<HTMLElement>('.panel', el);
    const reduce = reducedMotion();
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      scrub: reduce ? false : 0.4,
      onUpdate: (self) => {
        const p = self.progress * (panels.length - 1);
        items.forEach((item, i) => {
          if (i === 0) return;
          const local = gsap.utils.clamp(0, 1, (p - (i - 1)) / 0.85);
          const shown = reduce ? (local > 0.5 ? 0 : 100) : 100 - local * 100;
          item.style.clipPath = `inset(${shown}% 0 0 0)`;
        });
        const idx = Math.min(panels.length - 1, Math.floor(p + 0.5));
        setActive(idx);
      }
    });
    return () => st.kill();
  }, []);

  const current = panels[active];

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title" id="top">
      <div className="hero__stage" style={{ ['--hero-ground' as string]: current.ground }}>
        <h1 className="hero__title display" id="hero-title">
          <SplitText
            text="Omer Mustafa"
            tag="span"
            splitType="chars"
            mask
            delay={35}
            duration={1.1}
            ease="expo.out"
            trigger="load"
            textAlign="center"
          />
        </h1>

        <div className="hero__panels">
          {panels.map(({ step, panel, caption, Shot }) => (
            <figure key={step} className="panel" style={{ ['--panel-ground' as string]: panel }}>
              <Shot />
              <figcaption className="panel__caption">
                <b>{step}:</b> {caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="hero__side">
          <ul className="hero__steps" aria-label="What I do">
            {panels.map((p, i) => (
              <li key={p.step} data-on={i === active}>
                {p.step}
              </li>
            ))}
          </ul>
          <p className="hero__lede">
            I build, test and deliver software for Canadian teams, from the first requirement to launch day.
          </p>
        </div>

        <div className="hero__action">
          <p>Based in Cairo. Working Toronto mornings.</p>
          <Magnet padding={60} magnetStrength={3}>
            <a className="btn" href="#process">
              Start a project <span className="arrow">→</span>
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
