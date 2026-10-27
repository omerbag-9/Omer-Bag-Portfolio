import { useEffect, useRef, useState } from 'react';
import { contact } from '../data';
import { useReveal } from '../hooks';

const fmt = (zone: string, d: Date) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hour12: false }).format(d);

const hourIn = (zone: string, d: Date) =>
  Number(new Intl.DateTimeFormat('en-GB', { timeZone: zone, hour: 'numeric', hour12: false }).format(d)) % 24;

const weekdayIn = (zone: string, d: Date) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: zone, weekday: 'short' }).format(d);

/** Cairo is seven hours ahead of Toronto: Toronto's morning is my afternoon. */
function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(t);
  }, []);
  const t = hourIn('America/Toronto', now);
  const c = hourIn('Africa/Cairo', now);
  const weekend = ['Sat', 'Sun'].includes(weekdayIn('America/Toronto', now));
  const overlap = !weekend && t >= 8 && t < 13 && c >= 9 && c < 21;
  return (
    <p className="clock" aria-live="off">
      Cairo <b>{fmt('Africa/Cairo', now)}</b> · Toronto <b>{fmt('America/Toronto', now)}</b>
      <br />
      {overlap ? (
        <span className="clock__open">Toronto morning: I’m online now</span>
      ) : (
        <span className="clock__closed">Reply by the next Toronto morning</span>
      )}
    </p>
  );
}

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [user, domain] = contact.email.split('@');

  return (
    <section className="contact" ref={root} id="contact" aria-labelledby="contact-title">
      <div className="contact__top">
        <h2 className="head rv" id="contact-title">
          Have a project?
        </h2>
        <p className="rv" style={{ ['--i' as string]: 1 }}>
          Tell me the product, the deadline and what keeps breaking. Freelance and contract welcome.
        </p>
      </div>

      <a className="contact__email rv" style={{ ['--i' as string]: 2 }} href={`mailto:${contact.email}`}>
        <span>{user}@</span>
        <span>{domain}</span>
      </a>

      <div className="contact__bottom">
        <div>
          <a className="link" href={`tel:${contact.phoneHref}`}>
            {contact.phone}
          </a>
          <br />
          {contact.city} · Arabic, English, Turkish
        </div>
        <Clock />
        <div>
          <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href={contact.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
