import ScrollReveal from '../bits/ScrollReveal';
import CountUp from '../bits/CountUp';
import { stats } from '../data';

export default function About() {
  return (
    <section className="about wrap" id="about" aria-labelledby="about-title">
      <h2 className="eyebrow-title" id="about-title">
        About
      </h2>
      <ScrollReveal
        as="p"
        containerClassName="about__statement"
        baseOpacity={0.12}
        enableBlur
        blurStrength={6}
        baseRotation={0}
        wordAnimationEnd="bottom 60%"
      >
        Most software doesn’t fail in the code. It fails between what the business asked for, what got built and what
        got tested. I work in that gap: I read the business, build the feature, test it properly and own it through
        launch.
      </ScrollReveal>

      <dl className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <dt className="stat__value">
              <CountUp to={s.value} duration={1.6} />
            </dt>
            <dd className="stat__label">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
