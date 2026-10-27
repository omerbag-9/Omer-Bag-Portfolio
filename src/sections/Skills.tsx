import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetterGlitch from '../bits/LetterGlitch';
import { CasesShot, GuideShot, SkillShot, TeamSkillShot, UpdateShot } from '../fragments';
import { reducedMotion, useMedia } from '../hooks';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { name: 'Skill Router', text: 'Published. Picks the right skills for every prompt, so nobody has to name one.', ground: '#5a1410', Shot: SkillShot },
  { name: 'User Guides', text: 'Published. Writes step-by-step guides with screenshots for non-technical users.', ground: '#2b2f33', Shot: GuideShot },
  { name: 'Test design', text: 'Acceptance criteria in, test cases out. I review every case before it runs.', ground: '#3b2a24', Shot: CasesShot },
  { name: 'Delivery notes', text: 'Drafts of weekly updates and release notes from the week’s real tickets.', ground: '#24302a', Shot: UpdateShot },
  { name: 'Your skill', text: 'The step your team repeats most, written once as a Claude skill they reuse.', ground: '#33221f', Shot: TeamSkillShot }
];

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const phone = useMedia('(max-width: 900px)');

  useEffect(() => {
    if (phone || reducedMotion() || !root.current || !track.current) return;
    const t = track.current;
    const tween = gsap.to(t, {
      x: () => -(t.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [phone]);

  return (
    <section className="skills" ref={root} id="ai" aria-labelledby="skills-title">
      <div className="skills__stage">
        <div className="skills__field" aria-hidden="true">
          <LetterGlitch
            glitchColors={['#e0261e', '#8a1d16']}
            baseColor="#3b3b3b"
            backgroundColor="#0a0a0a"
            characters="SKILL.md name description route test deliver guide ---#"
            fontSize={16}
          />
        </div>
        <div className="skills__track" ref={track}>
          <div className="skills__heading">
            <h2 className="head" id="skills-title">
              How I use AI
            </h2>
            <p>
              I write Claude agent skills: reusable instructions that make an AI do one job the same way every time. Two
              are published; the rest run my testing and delivery work.
            </p>
          </div>
          {cards.map(({ name, text, ground, Shot }) => (
            <article className="skill-card" key={name}>
              <div className="skill-card__shot">
                <Shot />
              </div>
              <div className="skill-card__panel" style={{ ['--card-ground' as string]: ground }}>
                <h3 className="display">{name}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
