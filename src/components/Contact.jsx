import { profile } from '../content.js';

export default function Contact() {
  const links = [
    ...(profile.email
      ? [{ label: 'Email', handle: profile.email, href: `mailto:${profile.email}`, external: false }]
      : []),
    ...profile.links.map((l) => ({ ...l, external: true })),
    ...(profile.resumeUrl
      ? [{ label: 'Résumé', handle: 'Download PDF', href: profile.resumeUrl, external: true }]
      : []),
  ];

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="label contact__label" data-reveal>
          <span className="contact__num">04</span> Contact
        </p>
        <h2 className="contact__title" id="contact-title" data-reveal>
          Have a role, a project or a question? <em>Let’s talk.</em>
        </h2>
        {profile.availabilityDetail && (
          <p className="contact__note" data-reveal>
            <span className="contact__status" aria-hidden="true" />
            {profile.availabilityDetail}
          </p>
        )}

        <ul className="contact__links">
          {links.map((l) => (
            <li key={l.label} data-reveal>
              <a
                className="contact__link"
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="label contact__link-label">{l.label}</span>
                <span className="contact__handle">{l.handle}</span>
                <span className="contact__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="site-footer wrap">
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </span>
        <a className="tlink" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}
