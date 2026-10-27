import FlowingMenu from '../bits/FlowingMenu';
import { contact } from '../data';
import { TestShot } from '../fragments';

const menu = [
  { text: 'Client work', link: '#work', marquee: 'Healthcare · Banking · Pharma · SaaS · E-commerce' },
  { text: 'Services', link: '#services', marquee: 'Build · Test · Deliver · Automate' },
  { text: 'AI skills', link: '#ai', marquee: 'Skill Router · User Guides · Your skill' },
  { text: 'Start a project', link: '#process', marquee: 'Write the brief · See the plan · Send it' },
  { text: 'Contact', link: '#contact', marquee: contact.email }
];

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer__shot" aria-hidden="true">
        <TestShot big />
      </div>
      <div className="footer__side">
        <h2 id="footer-title">Omer Mustafa</h2>
        <nav className="footer__menu" aria-label="Footer">
          <FlowingMenu
            items={menu}
            align="left"
            dividers={false}
            textColor="#f1f0ee"
            bgColor="#0a0a0a"
            marqueeBgColor="#e0261e"
            marqueeTextColor="#ffffff"
            speed={50}
            ariaLabel="Sections"
          />
        </nav>
        <div className="footer__blocks">
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a className="link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a className="link" href={`tel:${contact.phoneHref}`}>
                  {contact.phone}
                </a>
              </li>
              <li>{contact.city}</li>
            </ul>
          </div>
          <div>
            <h3>Elsewhere</h3>
            <ul>
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
                <a className="link" href={contact.cv} download>
                  CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} Omer Mustafa. Built with React, GSAP and React Bits; tested with Playwright.
        </p>
      </div>
    </footer>
  );
}
