import { now, profile } from '../content.js';

const portrait = `${import.meta.env.BASE_URL}kithmi-hettiarachchi.jpg`;

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-label="Introduction">
      <div className="hero__meta label">
        <span>{profile.focus}</span>
        <span>{profile.location}</span>
      </div>

      <div className="hero__grid">
        <h1 className="hero__name">
          <span className="hero__line">{profile.firstName}</span>
          <span className="hero__line hero__line--2">{profile.lastName}</span>
        </h1>

        <figure className="hero__portrait">
          <img
            src={portrait}
            width="960"
            height="1050"
            alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
            fetchPriority="high"
          />
        </figure>

        <div className="hero__text">
          <p className="hero__lede">{profile.lede}</p>

          <div className="hero__actions">
            <a className="btn" href="#work">
              See selected work <span className="btn__arrow" aria-hidden="true">↓</span>
            </a>
            <div className="hero__links">
              {profile.resumeUrl && (
                <a className="tlink" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Résumé (PDF)
                </a>
              )}
              {profile.links.map((l) => (
                <a key={l.label} className="tlink" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <dl className="now">
            {now.map((item) => (
              <div className="now__row" key={item.label}>
                <dt className="label">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
