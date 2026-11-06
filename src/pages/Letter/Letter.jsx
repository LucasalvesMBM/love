import { useEffect, useState } from 'react';
import './Letter.css';
import AmbientEffects from '../../components/AmbientEffects';
import PageBackButton from '../../components/PageBackButton';

function Letter({ onBack }) {
  const [letterOpened, setLetterOpened] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLetterOpened(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="letter">
      <AmbientEffects />
      <div className="letter__glow" aria-hidden="true" />
      <PageBackButton onBack={onBack} />

      <section className="letter__content">
        <span className="letter__eyebrow">CAPÍTULO 04 — COM TODO MEU AMOR</span>
        <h1>
          Uma carta
          <br />
          <span>para você.</span>
        </h1>
        <p className="letter__intro">
          Algumas palavras que vêm direto do meu coração.
        </p>

        <div className={`letter__reveal${letterOpened ? ' letter__reveal--opened' : ''}`}>
          <div className="letter__envelope-clip" aria-hidden={letterOpened}>
            <button
              className="letter__envelope"
              type="button"
              aria-label="Abrir a carta de amor"
              aria-expanded={letterOpened}
              onClick={() => setLetterOpened(true)}
            >
              <span className="letter__envelope-paper" aria-hidden="true">
                <span>Para Gabriela</span>
                <span>Com amor,</span>
              </span>
              <span className="letter__envelope-flap" aria-hidden="true" />
              <span className="letter__envelope-front" aria-hidden="true" />
              <span className="letter__envelope-seal" aria-hidden="true">♥</span>
              <span className="letter__envelope-prompt">
                <span>Uma carta para você</span>
                <strong>Toque para abrir</strong>
              </span>
            </button>
          </div>

          <div
            className="letter__paper-clip"
            aria-hidden={!letterOpened}
            inert={!letterOpened}
          >
          <article className="letter__paper" aria-label="Carta de amor para Gabriela">
          <div className="letter__paper-top">
            <p>Para Gabriela, com todo o amor que existe em meu coração.</p>
            <span aria-hidden="true">♥</span>
          </div>

          <div className="letter__body">
            <p className="letter__salutation">Minha querida Gabriela,</p>

            <p>
              Eu queria encontrar palavras bonitas o suficiente para descrever o que sinto por você, mas, sinceramente, parece impossível colocar em frases algo tão imenso. Existem sentimentos que não cabem no papel, que não se explicam, apenas se sentem. E você é exatamente esse sentimento para mim.
            </p>

            <p>
              Às vezes, me pego pensando em você sem perceber. No seu sorriso, no seu olhar, no seu jeito de ser e em como, mesmo sem fazer esforço, você consegue tornar meus dias mais bonitos. É incrível como uma única pessoa pode ocupar tantos pensamentos e fazer morada tão profunda no coração de alguém.
            </p>

            <p>
              Se eu pudesse, te mostraria como meus olhos te enxergam. Talvez assim você entendesse o quanto é especial, o quanto sua existência ilumina meus dias e o quanto eu admiro cada pequeno detalhe seu. Porque, para mim, você não é apenas mais uma pessoa no mundo. Você é aquela pessoa que faz o mundo parecer mais bonito.
            </p>

            <p>
              Eu não quero gostar de você apenas nos dias felizes. Quero estar presente quando o céu estiver cinza, quando os dias forem difíceis e quando nem você mesma conseguir encontrar motivos para sorrir. Quero ser abraço quando tudo parecer desabar, carinho quando faltar amor e companhia quando a solidão tentar se aproximar.
            </p>

            <p>
              Se o amor fosse uma poesia, você seria minha inspiração. Se fosse uma estrela, seria a mais brilhante do meu céu (a famosa R136a1). E se fosse uma eternidade, eu escolheria passar cada segundo dela ao seu lado.
            </p>

            <p>
              Não sei o que o futuro nos reserva, mas sei que, se depender de mim, nunca faltarão motivos para você se sentir amada. Não quero ser apenas alguém que passa pela sua vida, quero ser alguém que faça diferença nela, alguém que você possa olhar e pensar: "Que bom que nossos caminhos se encontraram".
            </p>

            <p>
              Meu amor, talvez eu nunca consiga explicar perfeitamente o tamanho do que sinto, mas espero conseguir demonstrar todos os dias. Porque, entre tantas pessoas, tantos lugares e tantos caminhos, meu coração encontrou em você algo que não estava procurando, mas que agora não gostaria de perder.
            </p>

            <p>
              Se eu pudesse fazer um pedido ao universo, pediria apenas estar ao seu lado além da eternidade, pediria mais momentos com seu sorriso e mais oportunidades de te mostrar que você é uma das coisas mais lindas que já aconteceram na minha vida.
            </p>

            <p className="letter__signoff">
              Com todo o carinho, toda a admiração e todo o amor que meu coração consegue sentir. <span aria-label="coração">❤️</span>
            </p>
          </div>
          </article>
          </div>
        </div>

        <button className="letter__back" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Voltar para nossas lembranças
        </button>
      </section>
    </main>
  );
}

export default Letter;
