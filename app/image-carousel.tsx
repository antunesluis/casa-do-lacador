"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/images/campo-e-tradicao.jpg",
    alt: "Pessoa com poncho e chapéu montada a cavalo no campo",
    caption: "Tradição no campo",
  },
  {
    src: "/images/pilcha-bordo.jpg",
    alt: "Conjunto de pilcha bordô com camisa, lenço e alpargatas",
    caption: "Pilcha em cada detalhe",
  },
  {
    src: "/images/pilcha-azul.jpg",
    alt: "Conjunto de pilcha azul com bombacha, lenço e alpargatas",
    caption: "Para viver a tradição",
  },
  {
    src: "/images/botas-campeiras.jpg",
    alt: "Botas campeiras de couro junto a um cachorro e cavalos",
    caption: "Essência campeira",
  },
  {
    src: "/images/calcados.jpg",
    alt: "Par de calçados marrons sobre o feno",
    caption: "Passos com personalidade",
  },
  {
    src: "/images/pilcha-infantil.jpg",
    alt: "Bebê usando camisa xadrez, bombacha e botinhas",
    caption: "Tradição desde cedo",
  },
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);
  const [firstVisible, setFirstVisible] = useState(1);

  function updateControls() {
    const track = trackRef.current;
    if (!track) return;
    setCanGoBack(track.scrollLeft > 2);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
    const firstItem = track.firstElementChild;
    if (firstItem) {
      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const step = firstItem.getBoundingClientRect().width + gap;
      setFirstVisible(Math.min(photos.length, Math.round(track.scrollLeft / step) + 1));
    }
  }

  useEffect(() => {
    updateControls();
    window.addEventListener("resize", updateControls);
    return () => window.removeEventListener("resize", updateControls);
  }, []);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild;
    if (!track || !firstItem) return;

    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstItem.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading section-wrap">
        <div>
          <p className="eyebrow"><span /> NOSSO UNIVERSO</p>
          <h2 id="gallery-title">Um olhar sobre a <em>tradição.</em></h2>
        </div>
        <div className="gallery-controls" role="group" aria-label="Controles do carrossel">
          <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label="Imagem anterior" aria-controls="gallery-track">←</button>
          <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label="Próxima imagem" aria-controls="gallery-track">→</button>
        </div>
      </div>

      <p className="sr-only" role="status">A partir da foto {firstVisible} de {photos.length}</p>
      <ul
        className="gallery-track"
        id="gallery-track"
        ref={trackRef}
        onScroll={updateControls}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        tabIndex={0}
        aria-label="Fotos da Casa do Laçador"
      >
        {photos.map((photo) => (
          <li className="gallery-slide" key={photo.src}>
            <figure>
              <div className="gallery-image">
                <Image src={photo.src} fill sizes="(max-width: 600px) 82vw, (max-width: 900px) 45vw, 30vw" alt={photo.alt} />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="gallery-hint">Deslize para explorar <span aria-hidden="true">→</span></p>
    </section>
  );
}
