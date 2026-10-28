import { useEffect } from 'react';
import ClickSpark from './bits/ClickSpark';
import StaggeredMenu from './bits/StaggeredMenu';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Work from './sections/Work';
import AiSkills from './sections/AiSkills';
import Stack from './sections/Stack';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { contact } from './data';

const menu = [
  { label: 'Home', ariaLabel: 'Back to the top', link: '#top' },
  { label: 'Work', ariaLabel: 'Selected client work', link: '#work' },
  { label: 'Services', ariaLabel: 'What I do', link: '#services' },
  { label: 'AI skills', ariaLabel: 'How I use AI', link: '#ai' },
  { label: 'Experience', ariaLabel: 'Experience and education', link: '#experience' },
  { label: 'Contact', ariaLabel: 'Contact me', link: '#contact' }
];

const socials = [
  { label: 'LinkedIn', link: contact.linkedin },
  { label: 'GitHub', link: contact.github },
  { label: 'Email', link: `mailto:${contact.email}` }
];

export default function App() {
  // The wordmark only belongs on the hero; past it, the menu button alone stays fixed.
  useEffect(() => {
    const on = () => document.documentElement.classList.toggle('scrolled', window.scrollY > 240);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <ClickSpark sparkColor="#e5261f" sparkCount={9} sparkRadius={22} sparkSize={9} duration={420}>
      <StaggeredMenu
        isFixed
        position="right"
        items={menu}
        socialItems={socials}
        displaySocials
        displayItemNumbering
        colors={['#3a0907', '#e5261f']}
        accentColor="#e5261f"
        menuButtonColor="#f1f0ee"
        openMenuButtonColor="#f1f0ee"
        changeMenuColorOnOpen
        closeOnClickAway
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <AiSkills />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ClickSpark>
  );
}
