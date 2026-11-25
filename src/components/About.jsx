import { about, certifications, education, leadership } from '../content.js';
import SectionHead from './SectionHead.jsx';

function FactList({ title, items }) {
  if (!items.length) return null;
  return (
    <div className="facts__group" data-reveal>
      <h3 className="label facts__label">{title}</h3>
      <ul>
        {items.map((item) => (
          <li className="facts__item" key={`${item.title}-${item.detail}`}>
            <span className="facts__title">{item.title}</span>
            {item.meta && <span className="facts__meta label">{item.meta}</span>}
            {item.detail && <span className="facts__detail">{item.detail}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" num="03" title="About" />
      <div className="about">
        <p className="about__statement" data-reveal>
          {about.statement}
        </p>
        <div className="about__body" data-reveal>
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>

      <div className="facts">
        <FactList
          title="Education"
          items={education.map((e) => ({ title: e.programme, meta: e.period, detail: e.school }))}
        />
        <FactList
          title="Leadership & volunteering"
          items={leadership.map((l) => ({ title: l.role, detail: l.organisation }))}
        />
        <FactList
          title="Certifications"
          items={certifications.map((c) => ({ title: c.name, detail: c.issuer }))}
        />
      </div>
    </section>
  );
}
