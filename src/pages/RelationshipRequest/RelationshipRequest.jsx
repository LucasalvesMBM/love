import './RelationshipRequest.css';
import AmbientEffects from '../../components/AmbientEffects';
import PageBackButton from '../../components/PageBackButton';

const photoSlots = [
  {
    className: 'request-day__photo request-day__photo--main',
    src: '/images/pedido1.jpg',
    alt: 'Foto do dia do nosso pedido de namoro',
    label: 'O dia do nosso pedido',
  },
  {
    className: 'request-day__photo request-day__photo--detail',
    src: '/images/pedido2.jpeg',
    alt: 'Um detalhe especial do nosso pedido de namoro',
    label: 'Um detalhe para guardar',
  },
  {
    className: 'request-day__photo request-day__photo--memory',
    src: '/images/pedido%203.jpeg',
    alt: 'Mais uma lembrança do nosso pedido de namoro',
    label: 'Mais uma lembrança desse dia',
  },
];

function RelationshipRequest({ onBack, onContinue }) {
  return (
    <main className="request-day">
      <AmbientEffects />
      <PageBackButton onBack={onBack} />

      <section className="request-day__content">
        <span className="request-day__eyebrow">CAPÍTULO 02 — O DIA DO NOSSO SIM</span>
        <h1>
          O dia em que
          <br />
          <span>escolhemos ser nós.</span>
        </h1>
        <p className="request-day__intro">
          Um momento só nosso, que transformou uma pergunta em uma das partes mais bonitas da nossa história.
        </p>

        <div className="request-day__date-card">
          <span className="request-day__date-icon" aria-hidden="true">♡</span>
          <span className="request-day__date-label">O DIA DO NOSSO PEDIDO</span>
          <time className="request-day__date" dateTime="2022-06-11">04 . 11 . 2025</time>
          <span className="request-day__date-note">O começo de um novo capítulo</span>
        </div>

        <div className="request-day__photos" aria-label="Fotos do pedido de namoro">
          {photoSlots.map((slot, index) => (
            <figure className={slot.className} key={slot.src}>
              <img className="request-day__photo-image" src={slot.src} alt={slot.alt} />
              <span className="request-day__photo-number">0{index + 1}</span>
              <figcaption className="request-day__photo-label">{slot.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="request-day__note">
          Cada foto guarda um pedacinho desse dia tão especial.
        </p>

        <button className="request-day__continue" type="button" onClick={onContinue}>
          Reviver nossas lembranças <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

export default RelationshipRequest;
