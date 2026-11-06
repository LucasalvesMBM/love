
import './Memories.css';
import AmbientEffects from '../../components/AmbientEffects';
import PageBackButton from '../../components/PageBackButton';

function Memories({ onBack, onContinue }) {
  return (
    <main className="memories">
      <AmbientEffects />
      <PageBackButton onBack={onBack} />
      <section className="memories__content">

        <span className="memories__eyebrow">
          CAPÍTULO 01 — O NOSSO COMEÇO
        </span>

        <h1>
          E pensar que tudo
          <br />
          <span>começou assim...</span>
        </h1>

        <p className="memories__description">
          Entre tantos caminhos possíveis,
          a vida encontrou uma maneira
          de cruzar os nossos.
        </p>

        <div className="memories__photo">
            <img
            src="/images/primeira.jpeg"
            alt="Uma lembrança especial nossa"
            className="memories__image"
            />
        </div>

        <div className="memories__date">
          <span>DESDE O DIA</span>
          <strong>11 . 06 . 2022</strong>
        </div>
        <button className="memories__button" onClick={onContinue}>
          Continuar nossa história →
        </button>

      </section>
    </main>
  );
}

export default Memories;
