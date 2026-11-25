import { useEffect, useState } from 'react';
import { profile } from '../content.js';
import { useActiveSection } from '../hooks.js';

const SECTIONS = [
  { id: 'work', num: '01', label: 'Work' },
  { id: 'toolkit', num: '02', label: 'Toolkit' },
  { id: 'about', num: '03', label: 'About' },
  { id: 'contact', num: '04', label: 'Contact' },
];
const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 861px)');
    const onResize = (e) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="wrap site-header__inner">
        <a className="brand" href="#top" onClick={close}>
          {profile.firstName} <span className="brand__last">{profile.lastName}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  className="nav__link"
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'true' : undefined}
                >
                  <span className="nav__num" aria-hidden="true">
                    {s.num}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
            {profile.resumeUrl && (
              <li>
                <a className="nav__cta" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Résumé
                </a>
              </li>
            )}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a className="mobile-menu__link" href={`#${s.id}`} onClick={close}>
                <span className="nav__num" aria-hidden="true">
                  {s.num}
                </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__foot">
          {profile.links.map((l) => (
            <a key={l.label} className="tlink" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a className="tlink" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
