import { Media } from "./ui.jsx";
export default function MenuCard({ name, desc, price, image, emoji, badge }) {
  return (
    <article className="card menu-card">
      <div className="media">{badge && <span className="badge">{badge}</span>}<Media image={image} emoji={emoji} label={name} /></div>
      <div className="body">
        <h3>{name}</h3><p>{desc}</p>
        <strong className="price">{price} <small>ج.م</small></strong>
      </div>
    </article>
  );
}
