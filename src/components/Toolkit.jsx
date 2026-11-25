import { toolkit } from '../content.js';
import SectionHead from './SectionHead.jsx';

export default function Toolkit() {
  return (
    <section className="section wrap" id="toolkit" aria-labelledby="toolkit-title">
      <SectionHead
        id="toolkit-title"
        num="02"
        title="Toolkit"
        aside="Languages, frameworks and methods I’ve used in the work above."
      />
      <div className="toolkit">
        {toolkit.map((g) => (
          <div className="toolkit__group" key={g.group} data-reveal>
            <h3 className="label toolkit__label">{g.group}</h3>
            <ul className="toolkit__items">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
