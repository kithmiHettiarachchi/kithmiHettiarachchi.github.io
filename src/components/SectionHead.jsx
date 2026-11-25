export default function SectionHead({ id, num, title, aside }) {
  return (
    <header className="section-head" data-reveal>
      <h2 className="section-head__title" id={id}>
        <span className="section-head__num" aria-hidden="true">
          {num}
        </span>
        {title}
      </h2>
      {aside && <p className="section-head__aside">{aside}</p>}
    </header>
  );
}
