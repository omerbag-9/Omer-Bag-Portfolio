import { useRef } from 'react';
import ScrollReveal from '../bits/ScrollReveal';
import { CriteriaShot, FiguresShot, RiskShot } from '../fragments';
import { useReveal } from '../hooks';

export default function Intro() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section className="intro" ref={root} id="about" aria-labelledby="intro-title">
      <div className="intro__pin">
        <div className="intro__text">
          <h2 className="head" id="intro-title">
            Where projects slip
          </h2>
          <ScrollReveal
            as="p"
            containerClassName="intro__statement"
            mode="enter"
            effect="rise"
            splitBy="lines"
            stagger={0.09}
            duration={0.9}
            baseOpacity={0}
            enableBlur={false}
            baseRotation={0}
            highlightColor="#e0261e"
          >
            Software rarely fails in the code. It fails between what was asked for, built and tested. That gap is my
            job.
          </ScrollReveal>
        </div>
      </div>

      <div className="intro__track">
        <figure className="intro__item rv">
          <CriteriaShot />
          <figcaption>Requirements become acceptance criteria before anyone writes code.</figcaption>
        </figure>
        <figure className="intro__item rv">
          <FiguresShot />
          <figcaption>Technical Delivery Manager and tester at Manage Wise (Orthoplex Solutions).</figcaption>
        </figure>
        <figure className="intro__item rv">
          <RiskShot />
          <figcaption>Risks get an owner on day one, not in the week before launch.</figcaption>
        </figure>
      </div>
    </section>
  );
}
