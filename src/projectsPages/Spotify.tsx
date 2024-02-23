import React from "react";
import "./cssPgs/vitimas.css";
import "./cssPgs/projects.css";

import Artist from "../assets/projectsPagesPhotos/spotify/artist.png";
import Perfil from "../assets/projectsPagesPhotos/spotify/perfil.png";
import DownloadButton from "../components/ButtonComponent";

const Spotify = () => {
  const Spotify = require("../pdfs/spotify.pdf");
  return (
    <div className="content">
      <div className="content-projects">
        <section className="title">
          <h1>Spotify </h1>
        </section>

        <section className="introduction">
          <div className="subtitle-projects">
            <h2>Uma Nova Era no Spotify</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Como designer de UI/UX, eu queria dar uma repaginada no visual e
            tornar a interface mais fácil de usar. Além disso, adicionei uma
            nova aba que não existia antes - a tela de perfil. Agora, os
            usuários podem personalizar seus perfis como quiserem, meio que como
            os músicos querem mostrar sua vibe. A ideia é tornar tudo mais
            amigável ao usuário e dar às pessoas um espaço que pareça mais
            relaxado e personalizado.
          </p>
        </section>

        <section className="functionalities">
          <div className="subtitle-projects">
            <h2>Recursos e Novidades</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            As abas tornam uma brisa explorar novos artistas, criar e curar
            playlists, conectar-se com amigos e navegar diretamente para seu
            perfil sem precisar carregar uma nova página toda vez. É tudo sobre
            vibes suaves e diretas!
          </p>
          <p className="projects-texts">
            Agora, você pode ganhar conquistas! Desbloqueie-as criando
            playlists, colaborando com a comunidade, seguindo os artistas que
            você ama, atingindo marcos impressionantes de assinantes e até anos
            de lealdade ao Spotify!
          </p>
        </section>

        <section className="conclusion">
          <div className="subtitle-projects">
            <h2>Conclusão</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Mostre ao mundo seu estilo único e jornadas musicais
            extraordinárias. Eleve seu perfil do Spotify com nosso recurso mais
            recente: a página de edição de perfil! Personalize do seu jeito -
            destaque conquistas, suas 5 melhores músicas do último mês, talvez
            suas playlists ou faixas recentes, e até fixe aquela música
            especial.
          </p>
        </section>

        <section className="photos-projects">
          <h1>Screenshots</h1>
          <div className="project-photos-container">
            <img
              className="projects-photo-horizontal"
              src={Artist}
              alt="Página do Artista"
            />
            <img
              className="projects-photo-horizontal"
              src={Perfil}
              alt="Página do perfil"
            />
          </div>
        </section>

        <section className="donwloadSection">
          <div>
            <DownloadButton
              text={"Download PDF"}
              fileUrl={Spotify}
              fileName={"PrimeVideo-redesign-otavio-cunha"}
            />
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Spotify;
