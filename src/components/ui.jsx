export const Button = ({ href, variant = "primary", children, ...p }) => (
  <a className={`btn btn-${variant}`} href={href} {...p}>{children}</a>
);
export const Section = ({ id, title, eyebrow, dark, children }) => (
  <section id={id} className={`section ${dark ? "dark" : ""}`}>
    <div className="container">
      {title && <header className="section-head">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </header>}
      {children}
    </div>
  </section>
);
export const Stars = ({ value }) => (
  <span className="stars" role="img" aria-label={`${value} من 5`}>
    {[1, 2, 3, 4, 5].map((i) => <span key={i} className={i <= Math.round(value) ? "on" : ""}>★</span>)}
  </span>
);
export const Media = ({ image, emoji, label }) => image
  ? <img src={image} alt={label} loading="lazy" decoding="async" />
  : <div className="ph" role="img" aria-label={`${label} (صورة مؤقتة)`}>{emoji}</div>;
