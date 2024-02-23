import React from "react";
import "./cssPgs/vitimas.css";
import "./cssPgs/projects.css";

import Blue from "../assets/projectsPagesPhotos/primeVideo/blue.png";
import Dark from "../assets/projectsPagesPhotos/primeVideo/dark.png";
import Galaxy from "../assets/projectsPagesPhotos/primeVideo/galaxy.png";
import Login from "../assets/projectsPagesPhotos/primeVideo/login.png";
import ModalImage from "../assets/projectsPagesPhotos/primeVideo/modal.png";
import Movie from "../assets/projectsPagesPhotos/primeVideo/movie.png";
import NewTheme from "../assets/projectsPagesPhotos/primeVideo/newTheme.png";
import Party from "../assets/projectsPagesPhotos/primeVideo/party.png";
import Player from "../assets/projectsPagesPhotos/primeVideo/player.png";
import White from "../assets/projectsPagesPhotos/primeVideo/white.png";
import DownloadButton from "../components/ButtonComponent";

const PrimeVideo = () => {
  const PrimeVideo = require("../pdfs/primevideo.pdf");
  
  return (
    <div className="content">
      <div className="content-projects">
        <section className="title">
          <h1>Prime Video</h1>
        </section>

        <section className="introduction">
          <div className="subtitle-projects">
            <h2>Uma Nova Era de Entretenimento</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Como criador do conceito do Prime Video redesenhado, busquei
            oferecer uma nova perspectiva sobre o entretenimento online. Este
            projeto reflete meu compromisso com a inovação e a melhoria contínua
            na experiência do usuário.
          </p>
          <p className="projects-texts">
            Minha abordagem se concentrou em abordar as deficiências percebidas
            na interface e na experiência do usuário, com ênfase na qualidade,
            na personalização e na acessibilidade.
          </p>
        </section>

        <section className="origin-justification">
          <div className="subtitle-projects">
            <h2>Visão e Propósito</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            O conceito do Prime Video redesenhado surgiu da observação das
            lacunas de usabilidade na plataforma existente e da identificação de
            oportunidades de melhoria. Busquei criar uma visão que atendesse às
            necessidades dos usuários, proporcionando uma experiência mais
            intuitiva e envolvente.
          </p>
        </section>

        <section className="functionalities">
          <div className="subtitle-projects">
            <h2>Recursos e Inovações</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Explore o poder do novo header, projetado para uma navegação
            intuitiva que simplifica a descoberta de conteúdo. Com abas
            personalizáveis e uma variedade de temas, os usuários podem adaptar
            a plataforma às suas preferências individuais.
          </p>
          <p className="projects-texts">
            Cada detalhe da interface foi cuidadosamente repensado para
            proporcionar uma experiência cinematográfica excepcional, mantendo
            um equilíbrio entre estética e funcionalidade.
          </p>
        </section>

        <section className="conclusion">
          <div className="subtitle-projects">
            <h2>Conclusão</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            O conceito do Prime Video redesenhado representa uma visão de como o
            entretenimento online pode evoluir para atender melhor às
            necessidades dos usuários. Estou empolgado em compartilhar este
            projeto como parte do meu portfólio, demonstrando minha capacidade
            de pensar de forma criativa e resolver problemas de design de
            maneira eficaz.
          </p>
        </section>

        <section className="photos-projects">
          <h1>Screenshots</h1>
          <div className="project-photos-container">
            <img
              className="projects-photo-horizontal"
              src={Blue}
              alt="Tema Azul"
            />
            <img
              className="projects-photo-horizontal"
              src={Dark}
              alt="Tema Escuro"
            />
            <img
              className="projects-photo-horizontal"
              src={Galaxy}
              alt="Tema Galáxia"
            />
            <img
              className="projects-photo-horizontal"
              src={Login}
              alt="Tela de Login"
            />
            <img
              className="projects-photo-horizontal"
              src={ModalImage}
              alt="Imagem Modal"
            />
            <img className="projects-photo-horizontal" src={Movie} alt="Filme" />
            <img
              className="projects-photo-horizontal"
              src={NewTheme}
              alt="Novo Tema"
            />
            <img
              className="projects-photo-horizontal"
              src={Party}
              alt="Assistir com Amigos"
            />
            <img
              className="projects-photo-horizontal"
              src={Player}
              alt="Player"
            />
            <img
              className="projects-photo-horizontal"
              src={White}
              alt="Tema Claro"
            />
          </div>
        </section>

        <section className="donwloadSection">
          <div>
            <DownloadButton
              text={"Download PDF"}
              fileUrl={PrimeVideo}
              fileName={"PrimeVideo-redesign-otavio-cunha"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrimeVideo;
