import { earlierProjects, projects } from '../content.js';
import SectionHead from './SectionHead.jsx';

function Status({ status, label }) {
  return (
    <span className={`status status--${status}`}>
      <span className="status__glyph" aria-hidden="true" />
      {label}
    </span>
  );
}

function Flow({ index, label, steps }) {
  return (
    <figure className="flow" data-reveal>
      <ol className="flow__steps">
        {steps.map((s, i) => (
          <li className={`flow__step${s.mine ? ' flow__step--mine' : ''}`} key={s.step}>
            <span className="flow__step-name">
              <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span> {s.step}
            </span>
            <span className="flow__detail">{s.detail}</span>
            {s.mine && <span className="visually-hidden">(my part)</span>}
          </li>
        ))}
      </ol>
      <figcaption className="flow__caption">
        Fig. {index} / {label}
        {steps.some((s) => s.mine) && <span className="flow__key"> / Outlined: my part</span>}
      </figcaption>
    </figure>
  );
}

function Project({ project: p, index }) {
  const num = String(index + 1).padStart(2, '0');
  const titleId = `${p.slug}-title`;

  return (
    <article className="project" aria-labelledby={titleId}>
      <div className="project__aside" data-reveal>
        <div className="project__meta">
          <span className="project__num">{num}</span>
          <Status status={p.status} label={p.statusLabel} />
        </div>
        <p className="label project__kind">{p.kind}</p>
        <h3 className="project__title" id={titleId}>
          {p.title}
        </h3>
        <p className="project__subtitle">{p.subtitle}</p>
        {p.role && (
          <div className="project__role">
            <p className="label">{p.team ? 'Team project · My role' : 'My role'}</p>
            <p className="project__role-text">{p.role}</p>
          </div>
        )}
        <ul className="stack" aria-label="Built with">
          {p.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {p.links?.length > 0 && (
          <ul className="project__links">
            {p.links.map((l) => (
              <li key={l.href}>
                <a className="tlink" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="project__main">
        <p className="project__summary" data-reveal>
          {p.summary}
        </p>
        <Flow index={num} label={p.flowLabel} steps={p.flow} />
        <ul className="points">
          {p.points.map((pt) => (
            <li key={pt.lead} data-reveal>
              <div>
                <h4 className="points__lead">{pt.lead}</h4>
                {pt.mine && <span className="points__mine">My part</span>}
              </div>
              <p className="points__text">{pt.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function EarlierProjects() {
  return (
    <div className="archive" aria-labelledby="earlier-title">
      <div className="archive__head" data-reveal>
        <h3 className="archive__title" id="earlier-title">
          Earlier projects
        </h3>
        <p className="label">Coursework &amp; team builds</p>
      </div>
      <ul className="archive__list">
        {earlierProjects.map((p) => {
          const Name = p.href ? 'a' : 'span';
          return (
            <li className="archive__row" key={p.title} data-reveal>
              <Name
                className="archive__name"
                {...(p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {})}
              >
                {p.title}
                {p.href && <span aria-hidden="true"> ↗</span>}
              </Name>
              <span className="archive__desc">{p.description}</span>
              <span className="archive__stack">{p.stack.join(' / ')}</span>
              <span className="archive__tag label">{p.team ? 'Team' : ''}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Work() {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <SectionHead
        id="work-title"
        num="01"
        title="Selected work"
        aside="Three recent projects. One complete, two in development."
      />
      {projects.map((p, i) => (
        <Project key={p.slug} project={p} index={i} />
      ))}
      <EarlierProjects />
    </section>
  );
}
