import React from "react";
import "./cssPgs/vitimas.css";
import "./cssPgs/projects.css";

import Black from "../assets/projectsPagesPhotos/instagram/black.png";
import Blue from "../assets/projectsPagesPhotos/instagram/blue.png";
import BlueDeeper from "../assets/projectsPagesPhotos/instagram/blueDeeper.png";
import Galaxy from "../assets/projectsPagesPhotos/instagram/galaxy.png";
import Green from "../assets/projectsPagesPhotos/instagram/green.png";
import Pink from "../assets/projectsPagesPhotos/instagram/pink.png";
import PinkDeeper from "../assets/projectsPagesPhotos/instagram/pinkDeeper.png";
import Profile from "../assets/projectsPagesPhotos/instagram/profile.png";
import Purple from "../assets/projectsPagesPhotos/instagram/purple.png";
import Red from "../assets/projectsPagesPhotos/instagram/red.png";
import RedDeeper from "../assets/projectsPagesPhotos/instagram/redDeeper.png";
import White from "../assets/projectsPagesPhotos/instagram/white.png";

import IpadProfile from "../assets/projectsPagesPhotos/instagram/ipadProfile.png";
import IpadWhite from "../assets/projectsPagesPhotos/instagram/ipadWhite.png";
import DownloadButton from "../components/ButtonComponent";

const Instagram = () => {
  const instagramPDF = require("../pdfs/instagram.pdf");

  return (
    <div className="content">
      <div className="content-projects">
        <section className="title">
          <h1>Instagram</h1>
        </section>

        <section className="introduction">
          <div className="subtitle-projects">
            <h2>Uma Nova Experiência no Instagram</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Com essa versão, seria possível navegar com facilidade, mergulhar em
            fotos e vídeos e explorar o Instagram em uma nova dimensão.
          </p>
          <p className="projects-texts">
            Além disso, pensei em permitir que os usuários escolhessem entre
            temas claros e escuros, coloridos ou sem cor, refletindo diretamente
            na sua personalidade e estilo.
          </p>
        </section>

        <section className="origin-justification">
          <div className="subtitle-projects">
            <h2>Origem e Justificativa</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            O redesign do Instagram nasceu da necessidade de proporcionar uma
            experiência mais personalizada e inclusiva aos usuários. A ideia de
            permitir a escolha de temas e aprimorar a experiência em tablets foi
            inspirada pela busca contínua por inovação e melhoria na plataforma.
          </p>
          <p className="projects-texts">
            Com o Instagram redesenhado, redefini o conceito de expressão
            digital, tornando mais fácil do que nunca para os usuários
            compartilharem suas histórias de maneiras autênticas e envolventes.
          </p>
        </section>

        <section className="functionalities">
          <div className="subtitle-projects">
            <h2>Funcionalidades</h2>
            <hr className="hr-projects" />
          </div>
          <ul>
            <li>
              Com o meu redesign, você teria o poder de escolher entre temas
              claros e escuros, personalizando completamente o visual do seu
              feed e perfil.
            </li>
            <li>
              Introduzi um novo aplicativo especialmente projetado para tablets
              e iPads, tornando a experiência do Instagram mais acessível e
              envolvente em diferentes dispositivos.
            </li>
          </ul>
        </section>

        <section className="expected-results">
          <div className="subtitle-projects">
            <h2>Resultados Esperados</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Com essas mudanças, esperava elevar a experiência do Instagram a
            novas alturas, proporcionando aos usuários uma plataforma onde sua
            expressão pessoal pudesse realmente prosperar, independentemente do
            dispositivo que estaria usando.
          </p>
        </section>

        <section className="photos-projects">
          <h1>Screenshots</h1>
          <div className="project-photos-container-3grid">
            <img
              className="projects-photo-vertical"
              src={Black}
              alt="Tema Escuro"
            />
            <img
              className="projects-photo-vertical"
              src={White}
              alt="Tema Claro"
            />
            <img
              className="projects-photo-vertical"
              src={Blue}
              alt="Tema Azul"
            />
            <img
              className="projects-photo-vertical"
              src={BlueDeeper}
              alt="Tema Azul com Degradê"
            />
            <img
              className="projects-photo-vertical"
              src={Galaxy}
              alt="Tema da Galaxia"
            />
            <img
              className="projects-photo-vertical"
              src={Purple}
              alt="Tema Roxo"
            />
            <img
              className="projects-photo-vertical"
              src={Green}
              alt="Tema Verde"
            />
            <img
              className="projects-photo-vertical"
              src={Pink}
              alt="Tema Rosa"
            />
            <img
              className="projects-photo-vertical"
              src={PinkDeeper}
              alt="Tema Cores do Instagram"
            />
            <img
              className="projects-photo-vertical"
              src={Red}
              alt="Tema Vermelho"
            />
            <img
              className="projects-photo-vertical"
              src={RedDeeper}
              alt="Tema Vermelho Degradê"
            />
            <img
              className="projects-photo-vertical"
              src={Profile}
              alt="Perfil Redesenhado"
            />
          </div>
          <div className="project-photos-container">
            <img
              className="projects-photo-horizontal"
              src={IpadProfile}
              alt="Perfil Redesenhado"
            />
            <img
              className="projects-photo-horizontal"
              src={IpadWhite}
              alt="Perfil Redesenhado"
            />
          </div>
        </section>

        <section className="donwloadSection">
          <div>
            <DownloadButton
              text={"Download PDF"}
              fileUrl={instagramPDF}
              fileName={"instagram-redesign-otavio-cunha"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Instagram;
