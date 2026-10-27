import { useEffect, useState, type RefObject } from 'react';

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds `.in` to every `.rv` inside the root once it scrolls into view. */
export function useReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('.rv'));
    if (reducedMotion()) {
      items.forEach((i) => i.classList.add('in'));
      return;
    }
    // A scroll check rather than an IntersectionObserver: a jump (a link, End, a restored position) can pass an
    // element without it ever intersecting, and anything above the fold must still appear.
    let pending = items.slice();
    let raf = 0;
    const check = () => {
      raf = 0;
      const line = window.innerHeight * 0.9;
      pending = pending.filter((i) => {
        if (i.getBoundingClientRect().top < line) {
          i.classList.add('in');
          return false;
        }
        return true;
      });
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [root]);
}

export function useMedia(query: string) {
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return match;
}
