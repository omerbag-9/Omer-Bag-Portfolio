import { useEffect, useState } from 'react';
import ClickSpark from './bits/ClickSpark';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Work from './sections/Work';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Process from './sections/Process';
import Proof from './sections/Proof';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function Nav() {
  const [hidden, setHidden] = useState(false);

  // Hide on the way down, return on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setHidden(y > 400 && y > last);
      last = y;
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className="nav" data-hidden={hidden}>
      <a className="nav__mark" href="#top">
        Omer Mustafa<span>.</span>
      </a>
      <a className="nav__mono" href="#top" aria-label="Omer Mustafa, back to top">
        OM
      </a>
      <nav className="nav__links" aria-label="Main">
        <a className="link" href="#work">
          Work
        </a>
        <a className="link" href="#services">
          Services
        </a>
        <a className="link" href="#ai">
          AI skills
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
        <a className="btn" href="#process">
          Start a project
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <ClickSpark sparkColor="#e0261e" sparkCount={9} sparkRadius={22} sparkSize={9} duration={420}>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Services />
        <Skills />
        <Process />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </ClickSpark>
  );
}
