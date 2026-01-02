import heroImg from "./assets/images/hero.png";
import trufaImg from "./assets/images/trufa-black.png";
import aboutImg from "./assets/images/about.png";
import trufaBlackImg from "./assets/images/menu/trufa-black.png";
import brasaOriginalImg from "./assets/images/menu/brasa-original.png";
import cogumelosBrasaImg from "./assets/images/menu/cogumelos-na-brasa.png";
import crocantePastramiImg from "./assets/images/menu/crocante-de-pastrami.png";
import melPimentaImg from "./assets/images/menu/mel-e-pimenta.png";
import defumadoCasaImg from "./assets/images/menu/defumado-da-casa.png";
import veggieTrufaImg from "./assets/images/menu/veggie-trufa.png";
import duploBrasaImg from "./assets/images/menu/duplo-da-brasa.png";




import { useMemo, useRef } from "react";

const menuItems = [
  {
    name: "Trufa Black",
    desc: "Blend 180g, queijo gruyere, maionese trufada, cebola roxa.",
    price: "R$ 38",
    tag: "Mais pedido",
    image: trufaBlackImg,
  },
  {
    name: "Brasa Original",
    desc: "Blend 160g, cheddar maturado, picles da casa, molho Brasa.",
    price: "R$ 32",
    tag: "Classico",
    image: brasaOriginalImg,
  },
  {
    name: "Cogumelos na Brasa",
    desc: "Blend 160g, mix de cogumelos, queijo brie, aioli.",
    price: "R$ 36",
    tag: "Chef",
    image: cogumelosBrasaImg,
    
  },
  {
    name: "Crocante de Pastrami",
    desc: "Blend 180g, pastrami, swiss, mostarda antiga, crispy.",
    price: "R$ 42",
    tag: "Novo",
    image: crocantePastramiImg,
  },
  {
    name: "Mel & Pimenta",
    desc: "Frango empanado, gorgonzola, mel picante, alface.",
    price: "R$ 34",
    tag: "Leve",
    image: melPimentaImg,
  },
  {
    name: "Defumado da Casa",
    desc: "Blend 180g, bacon defumado, cheddar, barbecue.",
    price: "R$ 37",
    tag: "Mais pedido",
    image: defumadoCasaImg,
  },
  {
    name: "Veggie Trufa",
    desc: "Burger de graos, queijo vegano, molho trufado.",
    price: "R$ 33",
    tag: "Veggie",
    image: veggieTrufaImg,
  },
  {
    name: "Duplo da Brasa",
    desc: "Dois blends 120g, queijo prato, cebola caramelizada.",
    price: "R$ 45",
    tag: "Fome", 
    image: duploBrasaImg,
  },
];

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Cardapio", href: "#cardapio" },
  { label: "Onde Estamos", href: "#onde-estamos" },
];

export default function App() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const heroBadges = useMemo(
    () => ["Grelha aberta", "Ingredientes artesanais", "Entrega rapida"],
    []
  );

  return (
    <div className="page">
      <header className="header">
        <div className="logo">Brasa & Trufa</div>
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#cardapio">
          Ver Cardapio
        </a>
      </header>

      <main>
        <section id="inicio" className="section hero">
          <div className="hero-content">
            <p className="eyebrow">Hamburgueria gourmet</p>
            <h1>
              Fogo alto, sabor profundo.
              <span>Brasa & Trufa.</span>
            </h1>
            <p className="hero-subtitle">
              Uma experiencia intensa: carnes selecionadas, molhos autorais e
              finalizacao na brasa. Cada mordida com textura e aroma.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#cardapio">
                Ver Cardapio
              </a>
              <a
                className="btn secondary"
                href="https://wa.me/000000000000"
                target="_blank"
                rel="noreferrer"
              >
                Pedir no WhatsApp
              </a>
            </div>
            <div className="hero-badges">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            
              <img
                src={heroImg}
                alt="Hamburguer artesanal Brasa & Trufa"
                className="hero-image"
              />
                              
          </div>
        </section>
        <section className="section featured">
          <div className="featured-card">
              <img
                src={trufaImg}
                alt="Trufa Black"
                className="featured-img"
              />
            <div className="featured-info">
              <h3>Trufa Black</h3>
              <p>Creme trufado • gruyère • cebola roxa</p>
            </div>
          </div>
        </section>


        <section id="quem-somos" className="section about">
          <div className="about-content">
            <h2>Quem Somos</h2>
            <p>
              Nascemos da paixao por carnes bem seladas e receitas autorais.
              Nossa cozinha combina tecnicas de brasa com ingredientes frescos
              para criar burgers que fogem do obvio. Atendimento direto, rapido
              e sempre com clima de casa.
            </p>
          </div>
          <div className="about-visual">
            <img
              src={aboutImg}
              alt="Cozinha artesanal da Brasa & Trufa"
              className="about-image"
            />
          </div>
        </section>

        <section id="cardapio" className="section menu">
          <div className="section-head">
            <div>
              <h2>Cardapio em destaque</h2>
              <p>
                Os favoritos da casa com blends artesanais e finalizacao na brasa.
              </p>
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-btn"
                onClick={() => handleScroll("prev")}
                aria-label="Anterior"
              >
                &lsaquo;
              </button>
              <button
                className="carousel-btn"
                onClick={() => handleScroll("next")}
                aria-label="Proximo"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div className="carousel" ref={carouselRef} role="region">
            {menuItems.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="menu-tag">{item.tag}</div>
                <img src={item.image} alt={item.name} className="menu-img" />
                <div className="menu-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="menu-footer">
                    <span className="price">{item.price}</span>
                    <span className="pill">Grelha aberta</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="onde-estamos" className="section location">
          <div className="location-info">
            <h2>Onde Estamos</h2>
            <p>
              Rua dos Aromas, 145 - Vila Gastronoma, Sao Paulo - SP
            </p>
            <p>Seg a Dom: 12h as 23h</p>
            <a
              className="btn primary"
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="location-map">
            <iframe
               title="Mapa Brasa & Trufa"
                src="https://www.google.com/maps?q=Rua%20dos%20Aromas%2C%20145%20-%20Sao%20Paulo%20SP&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame"
/>

          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <h3>Brasa & Trufa</h3>
          <p>Hamburgueria gourmet desde 2017.</p>
        </div>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
        <div className="footer-copy">� 2024 Brasa & Trufa. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
