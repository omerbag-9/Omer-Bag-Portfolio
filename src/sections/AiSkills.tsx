import CardSwap, { Card } from '../bits/CardSwap';
import BlurText from '../bits/BlurText';
import { useMedia } from '../hooks';

const cards = [
  { name: 'Skill Router', tag: 'Published', text: 'Runs at the start of every session and picks the right skills for each prompt.' },
  { name: 'User Guides', tag: 'Published', text: 'Turns a feature into a step-by-step guide with screenshots for non-technical users.' },
  { name: 'Test design', tag: 'Daily use', text: 'Acceptance criteria in, test cases out. Every case reviewed before it runs.' },
  { name: 'Your skill', tag: 'For clients', text: 'The task your team repeats most, written once as a skill everyone reuses.' }
];

export default function AiSkills() {
  const phone = useMedia('(max-width: 720px)');

  return (
    <section className="ai wrap" id="ai" aria-labelledby="ai-title">
      <div className="ai__text">
        <h2 className="section-title" id="ai-title">
          How I use AI
        </h2>
        <BlurText
          className="section-sub"
          text="I write Claude agent skills: reusable instructions that make an AI handle one job reliably. Two are published; the rest run my testing and delivery work."
          delay={25}
          animateBy="words"
        />
        <ul className="ai__list">
          <li>
            <b>Skill Router</b> — chooses the right skills so nobody has to name them.
          </li>
          <li>
            <b>User Guides</b> — documentation for stakeholders, generated per release.
          </li>
          <li>
            <b>AI in your workflow</b> — I find the step your team repeats and automate it.
          </li>
        </ul>
      </div>

      <div className="ai__deck">
        <CardSwap
          width={phone ? 300 : 440}
          height={phone ? 230 : 320}
          cardDistance={phone ? 30 : 56}
          verticalDistance={phone ? 36 : 64}
          delay={3800}
          cardRadius={22}
          pauseOnHover
        >
          {cards.map((c) => (
            <Card key={c.name} customClass="skill-card">
              <div className="skill-card__top">
                <span className="skill-card__file">{c.name.toLowerCase().replace(' ', '-')}/SKILL.md</span>
                <span className="skill-card__tag">{c.tag}</span>
              </div>
              <h3 className="skill-card__name">{c.name}</h3>
              <p className="skill-card__text">{c.text}</p>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
}
