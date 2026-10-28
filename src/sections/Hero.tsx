import Threads from '../bits/Threads';
import SplitText from '../bits/SplitText';
import RotatingText from '../bits/RotatingText';
import CircularText from '../bits/CircularText';
import Magnet from '../bits/Magnet';
import BlurText from '../bits/BlurText';
import { contact } from '../data';
import { useMedia } from '../hooks';

export default function Hero() {
  const phone = useMedia('(max-width: 720px)');

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <Threads color="#e5261f" amplitude={1.4} distance={0.3} enableMouseInteraction lineCount={phone ? 50 : 80} />
      </div>

      <div className="hero__inner">
        <p className="hero__hello">
          <span className="dot" /> Available for freelance projects
        </p>

        <h1 className="hero__title" id="hero-title">
          <SplitText
            text="Omer Mustafa"
            tag="span"
            splitType="chars"
            delay={40}
            duration={1}
            ease="expo.out"
            trigger="load"
            textAlign="left"
            mask
          />
        </h1>

        <div className="hero__rotate" aria-label="I build, test, deliver and automate software">
          <span aria-hidden="true">I</span>
          <RotatingText
            aria-hidden="true"
            texts={['build', 'test', 'deliver', 'automate']}
            mainClassName="hero__word"
            staggerDuration={0.025}
            staggerFrom="last"
            rotationInterval={2200}
            effect="slide"
          />
          <span aria-hidden="true">software.</span>
        </div>

        <BlurText
          className="hero__lede"
          text="Developer, ISTQB-certified tester and technical delivery manager. I work with Canadian teams from Cairo, from the first requirement to launch day."
          delay={40}
          animateBy="words"
        />

        <div className="hero__actions">
          <Magnet padding={50} magnetStrength={3}>
            <a className="btn" href="#contact">
              Start a project <span className="arrow">→</span>
            </a>
          </Magnet>
          <a className="btn btn--ghost" href="#work">
            See my work
          </a>
        </div>
      </div>

      <a className="hero__badge" href="#about" aria-label="Scroll to about">
        <CircularText text="SCROLL • BUILD • TEST • SHIP • " spinDuration={18} size={132} fontSize={13} color="#f1f0ee" />
        <span className="hero__badge-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
      <a className="sr-only" href={contact.cv}>
        Download CV
      </a>
    </section>
  );
}
