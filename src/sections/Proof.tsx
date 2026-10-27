import { useRef } from 'react';
import ScrollVelocity from '../bits/ScrollVelocity';
import { credentials } from '../data';
import { useReveal } from '../hooks';

export default function Proof() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const line = (
    <>
      {credentials.map((c) => (
        <span key={c}>
          {c}
          <i className="proof__dot" aria-hidden="true" />
        </span>
      ))}
    </>
  );

  return (
    <section className="proof" ref={root} aria-labelledby="proof-title">
      <div className="proof__band marquee" aria-hidden="true">
        <ScrollVelocity texts={[line]} velocity={40} numCopies={3} />
      </div>
      <div className="proof__text">
        <h2 className="head rv" id="proof-title">
          Credentials and tools
        </h2>
        <p className="rv" style={{ ['--i' as string]: 1 }}>
          ISTQB Certified Tester (Foundation Level). Bachelor of Computer Science from CHI University, June 2025. Full
          stack web development at Route Academy. Preparing for the PMP exam. Since July 2025, Technical Delivery
          Manager and tester at Manage Wise (Orthoplex Solutions), shipping for clients in Canada and North America.
        </p>
      </div>
    </section>
  );
}
