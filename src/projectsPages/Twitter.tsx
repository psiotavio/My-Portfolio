import React from "react";
import "./cssPgs/vitimas.css";
import "./cssPgs/projects.css";

import Home from "../assets/projectsPagesPhotos/twitter/Home.png"
import Profile from "../assets/projectsPagesPhotos/twitter/Profile.png"

const Twitter = () => {
  return (
    <div className="content">
      <div className="content-projects">
        <section className="title">
          <h1>Twitter Redesign</h1>
        </section>

        <section className="introduction">
          <div className="subtitle-projects">
            <h2>Uma Nova Era para o Twitter</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Depois de alguns redeigns criados, decidi dar uma nova cara ao Twitter desta vez. Após anos sem grandes mudanças visuais, senti que era hora de um redesign completo. Reformulei tanto a tela inicial quanto a de perfil, conferindo-lhes um visual mais moderno e minimalista. Introduzi curvas suaves para tornar a experiência mais agradável visualmente e tornar a plataforma mais atraente para os usuários.
          </p>
          <p className="projects-texts">
            O objetivo era criar uma interface que fosse ao mesmo tempo familiar para os usuários habituais do Twitter, mas com um toque de frescor e elegância. Com essa abordagem, espero proporcionar uma experiência mais agradável e atraente para os usuários, incentivando um maior engajamento e apreciação da plataforma.
          </p>
        </section>

        <section className="photos-projects">
          <h1>Screenshots</h1>
          <div className="project-photos-container-3grid">
            <img
              className="projects-photo-vertical"
              src={Home}
              alt="Tela home redesenhada do Twitter/X"
            />
              <img
              className="projects-photo-vertical"
              src={Profile}
              alt="Tela de perfil redesenhada do Twitter/X"
            />
            </div>
            </section>
      </div>
    </div>
  );
};

export default Twitter;
