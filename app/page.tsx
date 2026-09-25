import Image from "next/image";
import { mapsUrl, store, whatsappUrl } from "../lib/store";
import ImageCarousel from "./image-carousel";

const instagramUrl = store.instagram;

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: store.name,
  description: store.description,
  telephone: store.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: store.street,
    addressLocality: store.city,
    addressRegion: store.region,
    addressCountry: "BR",
  },
  sameAs: [store.instagram],
};

const products = [
  {
    number: "01",
    title: "Pilchas e vestimenta",
    description: "Peças para celebrar a tradição em cada ocasião.",
    image: "/images/pilcha-bordo.jpg",
    alt: "Conjunto de pilcha com bombacha bordô, camisa, lenço e alpargatas",
    position: "center",
    message: "Olá! Gostaria de saber mais sobre as pilchas e vestimentas da loja.",
  },
  {
    number: "02",
    title: "Botas e calçados",
    description: "Para acompanhar o ritmo do campo e da cidade.",
    image: "/images/botas-campeiras.jpg",
    alt: "Par de botas campeiras de couro sobre o feno",
    position: "center",
    message: "Olá! Gostaria de saber mais sobre as botas e calçados da loja.",
  },
  {
    number: "03",
    title: "Tradição desde cedo",
    description: "O encanto da cultura gaúcha para os pequenos.",
    image: "/images/pilcha-infantil.jpg",
    alt: "Bebê usando camisa xadrez, bombacha e botinhas",
    position: "center 48%",
    message: "Olá! Gostaria de saber mais sobre as roupas infantis da loja.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
      />
      <div className="topline">TRADIÇÃO GAÚCHA EM TENENTE PORTELA, RS</div>

      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio" aria-label="Casa do Laçador, início">
          <Image src="/images/logo.png" width={54} height={54} alt="" />
          <span className="brand-name">
            <strong>Casa do Laçador</strong>
            <small>ARTIGOS GAÚCHOS</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#colecao">Nossa seleção</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#visite">Onde estamos</a>
        </nav>

        <a
          className="header-contact"
          aria-label="Fale com a loja no WhatsApp"
          href={whatsappUrl("Olá! Gostaria de saber mais sobre a Casa do Laçador.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> CASA DO LAÇADOR · TENENTE PORTELA</p>
            <h1 id="hero-title">
              Vista a sua <em>tradição.</em>
            </h1>
            <p className="hero-description">
              Pilchas, botas e peças que levam o espírito gaúcho para todos os
              momentos. Encontre o seu jeito de viver essa história.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={whatsappUrl("Olá! Gostaria de conhecer os produtos da Casa do Laçador.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#colecao">
                Conheça a seleção <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-line" />
              <span>Da nossa terra para o seu dia a dia.</span>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/campo-e-tradicao.jpg"
              fill
              preload
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Pessoa com poncho e chapéu montada a cavalo no campo"
              className="hero-photo"
            />
            <div className="hero-photo-shade" />
            <p className="hero-visual-caption">A tradição acompanha cada caminho.</p>
            <div className="hero-stamp" aria-hidden="true">
              <span>RAÍZES</span>
              <strong>RS</strong>
              <span>& CULTURA</span>
            </div>
          </div>
        </section>

        <ul className="category-strip" aria-label="Categorias da loja">
          <li>PILCHAS</li>
          <li>BOTAS</li>
          <li>VESTIMENTA TRADICIONAL</li>
          <li>ESTILO GAÚCHO</li>
        </ul>

        <section className="collection section-wrap" id="colecao" aria-labelledby="collection-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> NOSSA SELEÇÃO</p>
              <h2 id="collection-title">O jeito gaúcho em <em>cada detalhe.</em></h2>
            </div>
            <p>
              Para o campo, para a festa ou para o cotidiano: uma seleção que
              valoriza o que é nosso.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <div className="product-image">
                  <Image
                    src={product.image}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    alt={product.alt}
                    style={{ objectPosition: product.position }}
                  />
                  <span className="product-number">{product.number} / 03</span>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <a
                    className="product-arrow"
                    href={whatsappUrl(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Perguntar sobre ${product.title} no WhatsApp`}
                  >
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <a
            className="collection-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja mais novidades no Instagram <span aria-hidden="true">↗</span>
          </a>
        </section>

        <ImageCarousel />

        <section className="story" id="sobre" aria-labelledby="story-title">
          <div className="story-images" aria-hidden="true">
            <div className="story-image-main">
              <Image src="/images/pilcha-azul.jpg" fill sizes="(max-width: 800px) 70vw, 32vw" alt="" />
            </div>
            <div className="story-image-small">
              <Image src="/images/calcados.jpg" fill sizes="(max-width: 800px) 40vw, 18vw" alt="" />
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow eyebrow-light"><span /> NOSSA ESSÊNCIA</p>
            <h2 id="story-title">Mais do que vestir, <em>é viver.</em></h2>
            <p>
              A Casa do Laçador reúne peças que fazem parte da identidade
              gaúcha. Uma loja para quem carrega a tradição com orgulho e
              encontra nela um jeito próprio de estar no mundo.
            </p>
            <a
              className="button button-outline"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acompanhe no Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="visit section-wrap" id="visite" aria-labelledby="visit-title">
          <div className="visit-intro">
            <p className="eyebrow"><span /> VENHA NOS VISITAR</p>
            <h2 id="visit-title">A sua próxima parada em <em>Tenente Portela.</em></h2>
          </div>
          <div className="visit-details">
            <div className="visit-address">
              <span className="detail-label">NOSSO ENDEREÇO</span>
              <address>{store.street}<br />{store.city}, {store.region}</address>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Ver rota no mapa <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="visit-contact">
              <span className="detail-label">FALE COM A LOJA</span>
              <p><a className="telephone" href={`tel:${store.phone}`}>{store.phoneDisplay}</a></p>
              <a
                href={whatsappUrl("Olá! Gostaria de falar com a Casa do Laçador.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="social-banner" aria-labelledby="social-title">
          <div>
            <p className="eyebrow"><span /> ACOMPANHE DE PERTO</p>
            <h2 id="social-title">A tradição continua <em>por lá.</em></h2>
            <p>Novidades, inspirações e um pouco do nosso universo gaúcho.</p>
          </div>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            @casadolacadortp <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">Casa do Laçador</a>
        <p>Tradição gaúcha em Tenente Portela, RS.</p>
        <div>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={whatsappUrl("Olá! Gostaria de falar com a Casa do Laçador.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </footer>
    </>
  );
}
