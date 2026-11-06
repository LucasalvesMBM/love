
import './Home.css';
import AmbientEffects from '../../components/AmbientEffects';

function Home({ onStart }) {
  return (
    <main className="home">
      <AmbientEffects />
      <div className="home__content">
        <span className="home__eyebrow">
          UM ANO DA NOSSA HISTÓRIA
        </span>

        <div className="home__heart">♡</div>

        <h1>
          365 dias
          <br />
          <span>de nós.</span>
        </h1>

        <p className="home__description">
          Um ano de histórias, descobertas,
          sorrisos e momentos que quero
          guardar para sempre.
        </p>

        <button className="home__button" onClick={onStart}>
          Começar nossa história 
          <span>→</span>
        </button>

        <span className="home__footer">
          FEITO COM AMOR, ESPECIALMENTE PARA VOCÊ
        </span>
      </div>
    </main>
  );
}

export default Home;
