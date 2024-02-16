import React from "react";
import "./cssPgs/projects.css";

import Corvinal from "../assets/projectsPagesPhotos/potterdle/corvinal.png";
import Forca from "../assets/projectsPagesPhotos/potterdle/forca.png";
import Grifinoria from "../assets/projectsPagesPhotos/potterdle/grifinoria.png";
import Home from "../assets/projectsPagesPhotos/potterdle/home.png";
import LufaLufa from "../assets/projectsPagesPhotos/potterdle/lufalufa.png";
import Noticias from "../assets/projectsPagesPhotos/potterdle/noticias.png";
import Pomo from "../assets/projectsPagesPhotos/potterdle/pomo.png";
import PotterdleGame from "../assets/projectsPagesPhotos/potterdle/potterdle.png";
import Quiz from "../assets/projectsPagesPhotos/potterdle/quiz.png";
import Sonserina from "../assets/projectsPagesPhotos/potterdle/sonserina.png";

const Potterdle = () => {
  return (
    <body>
      <div className="content">
        <div className="content-projects">
          <section className="title">
            <h1>Potterdle</h1>
          </section>

          <section className="introduction">
            <div className="subtitle-projects">
              <h2>Introdução</h2>
              <hr className="hr-projects"></hr>
            </div>
            <p className="projects-texts">
              Seja bem-vindo(a) ao Potterdle, um site dedicado inteiramente aos
              fãs de Harry Potter! Aqui, você poderá desfrutar de diversos jogos
              temáticos baseados no universo mágico de Harry Potter.
            </p>
          </section>

          <section className="origin-justification">
            <div className="subtitle-projects">
              <h2>Origem e Justificativa</h2>
              <hr className="hr-projects"></hr>
            </div>
            <p className="projects-texts">
              A ideia para o Potterdle nasceu da minha paixão pelo mundo de
              Harry Potter e do desejo de proporcionar aos fãs uma experiência
              única de entretenimento. Inspirado pelo desafio de criar jogos
              temáticos, decidi embarcar nessa jornada e oferecer uma plataforma
              repleta de diversão e magia para todos os potterheads.
            </p>
          </section>

          <section className="functionalities">
            <div className="subtitle-projects">
              <h2>Funcionalidades</h2>
              <hr className="hr-projects"></hr>
            </div>
            <ul>
              <li>
                <strong>Variedade de Jogos:</strong> O Potterdle oferece uma
                variedade de jogos, incluindo quizzes, jogos de adivinhação,
                jogos de tabuleiro e muito mais, todos com temática de Harry
                Potter.
              </li>
              <li>
                <strong>Imersão no Mundo Mágico:</strong> Explore diferentes
                aspectos do universo de Harry Potter enquanto joga e mergulhe na
                magia e na aventura.
              </li>
              <li>
                <strong>Diversão Garantida:</strong> Com desafios envolventes,
                gráficos cativantes e uma atmosfera autêntica, o Potterdle
                promete horas de diversão para os fãs de todas as idades.
              </li>
            </ul>
          </section>

          <section className="expected-results">
            <div className="subtitle-projects">
              <h2>Resultados Esperados</h2>
              <hr className="hr-projects"></hr>
            </div>
            <p className="projects-texts">
              Espera-se que o Potterdle se torne uma comunidade vibrante e
              acolhedora para os fãs de Harry Potter, proporcionando
              entretenimento de qualidade e promovendo a conexão entre os
              entusiastas da saga.
            </p>
          </section>

          <section className="conclusion">
            <div className="subtitle-projects">
              <h2>Conclusão</h2>
              <hr className="hr-projects"></hr>
            </div>
            <p className="projects-texts">
              O Potterdle é mais do que apenas um site de jogos; é um espaço
              dedicado à celebração da magia e da imaginação. Junte-se a nós e
              embarque em uma jornada inesquecível pelo mundo de Harry Potter!
            </p>

            <ul className="links-section">
              <li>
                <a className="links" href="https://potterdle.com.br">
                  Potterdle
                </a>
              </li>
            </ul>
          </section>

          <section className="photos-projects">
            <h1>Screenshots</h1>
            <div className="project-photos-container">
              <img
                className="projects-photo-horizontal"
                src={Home}
                alt="Home"
              />

              <img
                className="projects-photo-horizontal"
                src={Pomo}
                alt="Pegue o Pomo Game"
              />
              <img
                className="projects-photo-horizontal"
                src={Grifinoria}
                alt="Grifinoria"
              />
              <img
                className="projects-photo-horizontal"
                src={Sonserina}
                alt="Sonserina"
              />

              <img
                className="projects-photo-horizontal"
                src={Corvinal}
                alt="Corvinal"
              />

              <img
                className="projects-photo-horizontal"
                src={LufaLufa}
                alt="Lufa-Lufa"
              />

              <img
                className="projects-photo-horizontal"
                src={Noticias}
                alt="Noticias"
              />

              <img
                className="projects-photo-horizontal"
                src={PotterdleGame}
                alt="Potterdle"
              />

              <img
                className="projects-photo-horizontal"
                src={Quiz}
                alt="Quiz"
              />

              <img
                className="projects-photo-horizontal"
                src={Forca}
                alt="Forca"
              />
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};

export default Potterdle;
