import { useEffect, useMemo, useRef, useState } from 'react';
import Magnet from '../bits/Magnet';
import { example, mailto, route, skills } from '../router';
import { useMedia } from '../hooks';

const steps = [
  {
    word: 'Tell me',
    rest: ' the problem in your own words.',
    text: 'A few sentences is enough: what is broken, what is due, and who it is for. Try it in the box.'
  },
  {
    word: 'I route it',
    rest: ' to the work it needs.',
    text: 'Build, test, deliver or automate. Usually a mix, sized to your budget and your deadline.'
  },
  {
    word: 'You get',
    rest: ' a plan you can sign off.',
    text: 'A first-week plan with the risks named up front, then a delivery update every week after.'
  }
];

const samples = [
  'Our releases keep breaking and nobody owns testing.',
  'I need a React landing page that wins clients.',
  'Our team writes the same user guides every release.',
  'We integrate with an ERP and orders go missing.'
];

export default function Process() {
  const root = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [brief, setBrief] = useState('');
  const [typed, setTyped] = useState(false);
  const phone = useMedia('(max-width: 900px)');

  // As each statement reaches the middle of the screen, the fragment shows that state of the example.
  useEffect(() => {
    const blocks = root.current?.querySelectorAll<HTMLElement>('.step');
    if (!blocks?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  const shownBrief = typed ? brief : step === 0 && !phone ? '' : example;
  const picked = useMemo(() => route(shownBrief), [shownBrief]);
  const showPlan = typed ? picked.length > 0 : phone || step >= 2;
  const showSkills = typed || phone || step >= 1;

  return (
    <section className="process" ref={root} id="process" aria-labelledby="process-title">
      <div className="process__steps">
        <h2 className="head" id="process-title">
          How a project starts
        </h2>
        <p className="muted">No forms to fill in. Write the brief, see the plan, send it.</p>
        {steps.map((s, i) => (
          <div className="step" data-index={i} data-on={i === step} key={s.word}>
            <h3>
              <span className="step__word">{s.word}</span>
              {s.rest}
            </h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="process__stage">
        <div className="ui router" data-ui>
          <div className="ui__bar">
            <span>Brief router</span>
            <span>{typed ? 'your brief' : 'example'}</span>
          </div>
          <div className="ui__body">
            <label htmlFor="brief">Describe your project or problem</label>
            <textarea
              id="brief"
              value={shownBrief}
              placeholder="We launch in six weeks and…"
              onChange={(e) => {
                setTyped(true);
                setBrief(e.target.value);
              }}
              onFocus={() => {
                if (!typed) {
                  setTyped(true);
                  setBrief('');
                }
              }}
            />
            <div className="router__examples" aria-label="Example briefs">
              {samples.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => {
                    setTyped(true);
                    setBrief(s);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="router__skills" aria-live="polite">
              {skills.map((s) => (
                <span key={s.id} className="router__skill" data-on={showSkills && picked.some((p) => p.id === s.id)}>
                  {s.name}
                </span>
              ))}
            </div>

            <ol className="router__plan" aria-label="First-week plan">
              {showPlan &&
                picked.slice(0, 4).map((s) => (
                  <li key={s.id + shownBrief.length}>
                    <b>{s.name}</b>
                    <span>{s.step}</span>
                  </li>
                ))}
              {!showPlan && !(typed && brief.trim().length > 2) && (
                <li className="router__empty">The first-week plan for your brief appears here.</li>
              )}
              {typed && brief.trim().length > 2 && picked.length === 0 && (
                <li>
                  <b>Not sure yet</b>
                  <span>Send it anyway and I will reply with a few questions.</span>
                </li>
              )}
            </ol>

            <div className="router__send">
              <span className="dim">Opens your email with the brief and plan filled in.</span>
              <Magnet padding={40} magnetStrength={4}>
                <a className="btn" href={mailto(shownBrief || example, picked)}>
                  Send this brief <span className="arrow">→</span>
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
