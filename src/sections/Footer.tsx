import { contact } from '../data';

export default function Footer() {
  return (
    <footer className="footer wrap">
      <p className="footer__name">Omer Mustafa</p>
      <nav className="footer__nav" aria-label="Footer">
        <a className="link" href="#work">Work</a>
        <a className="link" href="#services">Services</a>
        <a className="link" href="#ai">AI skills</a>
        <a className="link" href="#experience">Experience</a>
        <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="link" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <p className="footer__legal">
        © {new Date().getFullYear()} Omer Mustafa · Cairo, Egypt · Built with React, GSAP and React Bits, tested with
        Playwright.
      </p>
    </footer>
  );
}
