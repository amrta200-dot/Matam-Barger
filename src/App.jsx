import { useState } from "react";
import { restaurant as r, menu, features, reviewThemes, gallery, nav } from "./data/restaurant.js";
import { Button, Section, Stars, Media } from "./components/ui.jsx";
import MenuCard from "./components/MenuCard.jsx";

const Call = ({ variant }) => <Button href={r.phoneHref} variant={variant}>اتصل الآن</Button>;

export default function App() {
  const cats = Object.keys(menu);
  const [cat, setCat] = useState(cats[0]);
  return (
    <>
      <header className="nav"><div className="container nav-in">
        <a href="#top" className="logo">Wiki <span>Burger</span></a>
        <nav aria-label="التنقل الرئيسي">{nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
        <Call />
      </div></header>

      <main id="top">
        <section className="hero dark"><div className="container hero-in">
          <div>
            <span className="eyebrow">مطعم فاست فود في بنها</span>
            <h1>{r.tagline}</h1>
            <p className="lead">{r.intro}</p>
            <div className="actions"><Call /><Button href={r.mapLink} variant="ghost" target="_blank" rel="noopener noreferrer">موقع المطعم</Button></div>
            <p className="rate"><Stars value={r.rating} /> <b>{r.rating}</b> · {r.reviews} تقييم</p>
          </div>
          <div className="hero-art" aria-hidden="true"><span>🍔</span></div>
        </div></section>

        <Section id="about" eyebrow="عن المطعم" title="Wiki Burger… فاست فود محلي في بنها">
          <p className="about">مطعم بسيط وودود في بنها، تخصصه البرجر وساندوتشات الفراخ والبطاطس. تقدر تقعد في المطعم أو تاخد طلبك تيك أواي.</p>
          <ul className="chips">{r.services.map((s) => <li key={s}>{s}</li>)}<li>{r.priceRange}</li></ul>
        </Section>

        <Section id="menu" dark eyebrow="المنيو" title="اختار وجبتك">
          <div className="tabs" role="tablist">{cats.map((c) =>
            <button key={c} role="tab" aria-selected={c === cat} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>)}</div>
          <div className="grid">{menu[cat].map((m, i) => <MenuCard key={i} {...m} />)}</div>
          <p className="note">الأصناف والأسعار أعلاه أمثلة مؤقتة وتُستبدل ببيانات المطعم.</p>
        </Section>

        <Section id="why" eyebrow="ليه Wiki Burger" title="كل اللي محتاجه في مكان واحد">
          <div className="grid four">{features.map((f) => <article key={f.title} className="card feature"><span className="ico">{f.icon}</span><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>
        </Section>

        <Section id="reviews" dark eyebrow="التقييمات" title="رأي الزباين">
          <div className="score"><b>{r.rating}</b><Stars value={r.rating} /><span>من {r.reviews} تقييم</span></div>
          <ul className="chips big">{reviewThemes.map((t) => <li key={t.text}>{t.icon} {t.text}</li>)}</ul>
        </Section>

        <Section id="location" eyebrow="الموقع" title="تعالى زورنا">
          <div className="loc">
            <div className="card info">
              <dl>
                <dt>العنوان</dt><dd>{r.address}</dd>
                <dt>الموقع على الخريطة</dt><dd dir="ltr">{r.plusCode}</dd>
                <dt>الهاتف</dt><dd dir="ltr"><a href={r.phoneHref}>{r.phone}</a></dd>
                <dt>المواعيد</dt><dd>{r.hours}</dd>
                <dt>الخدمات</dt><dd>{r.services.join(" · ")}</dd>
              </dl>
              <div className="actions"><Call /><Button href={r.mapLink} variant="ghost" target="_blank" rel="noopener noreferrer">فتح الموقع</Button></div>
            </div>
            <iframe className="map" title="خريطة Wiki Burger" src={r.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Section>

        <Section id="gallery" dark eyebrow="المعرض" title="لقطات من Wiki Burger">
          <div className="gallery">{gallery.map((g, i) => <figure key={i}><Media {...g} /><figcaption>{g.label}</figcaption></figure>)}</div>
        </Section>

        <section className="cta"><div className="container">
          <h2>جاهز تجرب Wiki Burger؟</h2>
          <div className="actions center"><Call variant="dark" /><Button href={r.mapLink} variant="darkghost" target="_blank" rel="noopener noreferrer">الاتجاهات</Button></div>
        </div></section>
      </main>

      <footer className="footer dark"><div className="container foot">
        <div><a href="#top" className="logo">Wiki <span>Burger</span></a><p>{r.address}</p><p dir="ltr" style={{textAlign:"right"}}>{r.phone}</p><p>{r.hours}</p></div>
        <nav aria-label="روابط سريعة">{nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
        <p className="copy">© {new Date().getFullYear()} Wiki Burger. جميع الحقوق محفوظة.</p>
      </div></footer>
    </>
  );
}
