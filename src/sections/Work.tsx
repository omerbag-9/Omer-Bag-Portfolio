import ScrollStack, { ScrollStackItem } from '../bits/ScrollStack';
import BlurText from '../bits/BlurText';
import { projects } from '../data';
import { useMedia } from '../hooks';

const grounds = ['#1a0706', '#141414', '#220a08', '#171717', '#1d0807', '#121212'];

export default function Work() {
  const phone = useMedia('(max-width: 720px)');

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-head wrap">
        <h2 className="section-title" id="work-title">
          Selected work
        </h2>
        <BlurText
          className="section-sub"
          text="Six client projects for a Canadian software house, run side by side. Clients are under NDA, so names stay private."
          delay={30}
          animateBy="words"
        />
      </div>

      <ScrollStack
        useWindowScroll
        smoothScroll={false}
        itemDistance={phone ? 60 : 120}
        itemStackDistance={phone ? 16 : 26}
        stackPosition={phone ? '12%' : '14%'}
        baseScale={0.86}
        itemScale={0.025}
        dimAmount={0.35}
        holdDistance={120}
      >
        {projects.map((p, i) => (
          <ScrollStackItem key={p.id} itemClassName="project" style={{ ['--ground' as string]: grounds[i] }}>
            <article className="project__inner">
              <header className="project__head">
                <p className="project__meta">
                  <span>{p.domain}</span>
                  <span>{p.region}</span>
                </p>
                <h3 className="project__title">{p.name}</h3>
                <p className="project__role">{p.role}</p>
              </header>
              <div className="project__body">
                <p className="project__problem">{p.problem}</p>
                <ul className="project__did">
                  {p.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="project__outcome">{p.outcome}</p>
                <ul className="project__tags" aria-label="Skills used">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
