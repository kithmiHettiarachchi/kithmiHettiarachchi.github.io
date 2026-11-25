import { about, education } from '../content.js';
import SectionHead from './SectionHead.jsx';

export default function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" num="03" title="About" />
      <div className="about">
        <p className="about__statement" data-reveal>
          {about.statement}
        </p>

        <div className="about__side">
          <div className="about__body" data-reveal>
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="edu" data-reveal>
            <h3 className="label edu__label">Education</h3>
            <ul>
              {education.map((e) => (
                <li className="edu__item" key={e.programme}>
                  <span className="edu__programme">{e.programme}</span>
                  <span className="edu__period label">{e.period}</span>
                  <span className="edu__school">{e.school}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
