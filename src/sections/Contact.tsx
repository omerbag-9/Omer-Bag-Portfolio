import LiquidEther from '../bits/LiquidEther';
import SplitText from '../bits/SplitText';
import Magnet from '../bits/Magnet';
import { contact } from '../data';

const subject = encodeURIComponent('Project enquiry from your portfolio');

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <LiquidEther colors={['#4a0907', '#e5261f', '#ff7a6b']} autoDemo autoSpeed={0.4} autoIntensity={1.6} />
      </div>
      <div className="contact__inner wrap">
        <p className="contact__kicker">Have a project in mind?</p>
        <h2 className="contact__title" id="contact-title">
          <SplitText text="Let’s build it" tag="span" splitType="chars" delay={35} duration={0.9} ease="expo.out" mask textAlign="left" />
        </h2>
        <p className="contact__lede">
          Tell me what you’re building, when it’s due and what keeps breaking. Freelance and contract work welcome.
        </p>
        <div className="contact__actions">
          <Magnet padding={60} magnetStrength={3}>
            <a className="btn btn--big" href={`mailto:${contact.email}?subject=${subject}`}>
              {contact.email} <span className="arrow">→</span>
            </a>
          </Magnet>
          <a className="btn btn--ghost" href={contact.cv} download>
            Download CV
          </a>
        </div>
        <ul className="contact__links">
          <li>
            <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="link" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
