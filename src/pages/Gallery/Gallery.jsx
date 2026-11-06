import { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import AmbientEffects from '../../components/AmbientEffects';
import PageBackButton from '../../components/PageBackButton';

const photos = [
  { file: 'primeira.jpeg', caption: 'O começo de tudo' },
  { file: 'foto1.jpg', caption: 'Um momento especial' },
  { file: 'foto2.jpeg', caption: 'Nossos melhores momentos' },
  { file: 'foto3.jpeg', caption: 'Mais uma lembrança' },
  { file: 'foto4.jpeg', caption: 'Sempre juntos' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.06.jpeg', caption: 'Um dia para guardar' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.06 (2).jpeg', caption: 'A felicidade mora nos detalhes' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.06 (3).jpeg', caption: 'Meu lugar favorito é ao seu lado' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.07.jpeg', caption: 'Sorrisos que dizem tudo' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.07 (1).jpeg', caption: 'Mais um capítulo nosso' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.07 (2).jpeg', caption: 'Um pedacinho da nossa história' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.08.jpeg', caption: 'A vida fica mais bonita com você' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.08 (1).jpeg', caption: 'Guardado com carinho' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.08 (2).jpeg', caption: 'A gente, do nosso jeito' },
  { file: 'WhatsApp Image 2026-11-01 at 12.23.08 (3).jpeg', caption: 'E que venham muitos outros momentos' },
].map((photo) => ({
  ...photo,
  src: `/images/${encodeURIComponent(photo.file)}`,
}));

function Gallery({ onBack, onContinue }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const touchStartX = useRef(null);
  const ignoreNextClick = useRef(false);
  const activePhoto = photos[activePhotoIndex];

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
        return;
      }

      if (event.key === 'ArrowRight') {
        showNextPhoto();
      } else if (event.key === 'ArrowLeft') {
        showPreviousPhoto();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen]);

  function showNextPhoto() {
    setSlideDirection('next');
    setActivePhotoIndex((index) => (index + 1) % photos.length);
  }

  function showPreviousPhoto() {
    setSlideDirection('previous');
    setActivePhotoIndex((index) => (index - 1 + photos.length) % photos.length);
  }

  function handleSwipeEnd(event) {
    if (touchStartX.current === null) {
      return;
    }

    const swipeDistance = event.clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(swipeDistance) > 45) {
      ignoreNextClick.current = true;
      window.setTimeout(() => {
        ignoreNextClick.current = false;
      }, 0);

      if (swipeDistance < 0) {
        showNextPhoto();
      } else {
        showPreviousPhoto();
      }
    }
  }

  return (
    <main className="gallery">
      <AmbientEffects />
      <PageBackButton onBack={onBack} />

      <section className="gallery__content">
        <span className="gallery__eyebrow">
          CAPÍTULO 03 — NOSSAS MEMÓRIAS
        </span>

        <h1>
          Pequenos momentos,
          <br />
          <span>grandes lembranças.</span>
        </h1>

        <p className="gallery__description">
          Deslize para passear pelas lembranças
          <br className="gallery__desktop-break" />
          {' '}e reviver cada pedacinho da nossa história.
        </p>

        <div className="gallery__carousel">
          <div
            className="gallery__stage"
            onPointerDown={(event) => {
              touchStartX.current = event.clientX;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerUp={handleSwipeEnd}
            onPointerCancel={() => {
              touchStartX.current = null;
            }}
          >
            <span className="gallery__sparkle gallery__sparkle--one" aria-hidden="true">✦</span>
            <span className="gallery__sparkle gallery__sparkle--two" aria-hidden="true">✧</span>
            <button
              key={activePhoto.file}
              className="gallery__photo"
              data-direction={slideDirection}
              type="button"
              onClick={(event) => {
                if (ignoreNextClick.current) {
                  event.preventDefault();
                  ignoreNextClick.current = false;
                  return;
                }

                setLightboxOpen(true);
              }}
              aria-label={`Ampliar foto ${activePhotoIndex + 1}: ${activePhoto.caption}`}
            >
              <img
                className="gallery__photo-image"
                src={activePhoto.src}
                alt={activePhoto.caption}
                fetchPriority="high"
                decoding="async"
              />
              <span className="gallery__photo-heart" aria-hidden="true">♡</span>
            </button>
          </div>

          <div className="gallery__caption" aria-live="polite">
            <span className="gallery__caption-text" key={`${activePhoto.file}-${slideDirection}`}>
              {activePhoto.caption}
            </span>
            <span className="gallery__counter">
              {String(activePhotoIndex + 1).padStart(2, '0')}
              <span> / </span>
              {String(photos.length).padStart(2, '0')}
            </span>
          </div>

          <div className="gallery__controls">
            <button
              className="gallery__control"
              type="button"
              onClick={showPreviousPhoto}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <div className="gallery__progress" aria-hidden="true">
              <span style={{ '--progress': `${((activePhotoIndex + 1) / photos.length) * 100}%` }} />
            </div>
            <button
              className="gallery__control"
              type="button"
              onClick={showNextPhoto}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </div>

          <span className="gallery__hint">toque na foto para ver de pertinho</span>
        </div>

        <button className="gallery__letter-link" type="button" onClick={onContinue}>
          Ler minha carta <span aria-hidden="true">♡</span>
        </button>
      </section>

      {lightboxOpen && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${activePhotoIndex + 1} de ${photos.length}: ${activePhoto.caption}`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="gallery__close"
            type="button"
            aria-label="Fechar foto"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <button
            className="gallery__nav gallery__nav--previous"
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPhoto();
            }}
          >
            ‹
          </button>
          <figure
            className="gallery__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={`${activePhoto.file}-${slideDirection}`}
              className="gallery__lightbox-image"
              src={activePhoto.src}
              alt={activePhoto.caption}
            />
            <figcaption>
              <span>{activePhoto.caption}</span>
              <small>{activePhotoIndex + 1} / {photos.length}</small>
            </figcaption>
          </figure>
          <button
            className="gallery__nav gallery__nav--next"
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.stopPropagation();
              showNextPhoto();
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
