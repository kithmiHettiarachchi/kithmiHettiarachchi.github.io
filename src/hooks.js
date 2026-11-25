import { useEffect, useState } from 'react';

/** Adds `is-in` to every [data-reveal] element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.06 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        setActive(ids.find((id) => visible.get(id)) ?? null);
      },
      { rootMargin: '-45% 0px -54% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);

  return active;
}
