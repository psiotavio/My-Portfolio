import React, { useState, useEffect } from "react";
import me from "./assets/me.png";
import aboutMe from "./assets/aboutMe.png";
import certificationIcon from "./assets/studyIcon.png";

import connectPharmacy from "./assets/projects/connect.png";
import potterdle from "./assets/projects/potterdle.png";
import vitimasDoCrime from "./assets/projects/vitimas.png";
import watchfolio from "./assets/projects/watchfolio.png";

import spotify from "./assets/redesigns/spotify.png";
import instagram from "./assets/redesigns/instagram.png";
import twitter from "./assets/redesigns/twitter.png";
import primeVideo from "./assets/redesigns/prime.png";

import DownloadButton from "./components/ButtonComponent";
import "./home.css";
import CircularProgressBar from "./components/CircularProgressBar";
import LinearProgressBar from "./components/LinearProgressBar";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const windowHeight = window.innerHeight;
      const newVisibleSections: string[] = [];

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.6) {
          newVisibleSections.push(section.id);
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let docTitle = document.title;

  window.addEventListener("blur", () => {
    document.title = "Volte aqui!";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  return (
    <body>
      <div className="content">
        <section className="apresentation">
          <div className="two-sides-container">
            <div className="left-side">
              <p className="subtitle">BEM VINDO</p>
              <h1>Eu sou Otávio Cunha</h1>
              <p>UI/UX DESIGNER, FRONT-END AND GAME DEVELOPER</p>
              <DownloadButton text={"Download CV"} />
            </div>
            <div className="right-side-secondary">
              <img src={me} className="me" alt="Me" />
            </div>
          </div>
        </section>

        <hr className="division"></hr>

        <section
          id="about-me"
          className={
            visibleSections.includes("about-me") ? "fade-in active" : "fade-in"
          }
        >
          <div className="two-sides-container-secondary">
            <div className="left-side-secondary">
              <img src={aboutMe} className="aboutMe" alt="Me" />
            </div>
            <div className="right-side">
              <div className="texts">
                <h1>Sobre Mim</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sollicitudin ut augue netus fusce fringilla. Aliquam blandit
                  enim odio cursus id. Pulvinar commodo pellentesque non massa,
                  nunc massa nisi est id. Diam est molestie massa commodo
                  pulvinar aliquam arcu gravida. Dictum pretium senectus dolor
                  vulputate tempor ac vel. Placerat proin sed risus at fusce
                  aliquam. Convallis varius auctor quam fusce diam. Vulputate
                  enim est nibh diam pellentesque. Adipiscing dolor turpis
                  egestas velit sit feugiat ultricies. Id ac placerat dolor sem
                  neque elit. Ut nisl turpis nisi etiam ac nibh.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="division"></hr>

        <section
          id="skills"
          className={
            visibleSections.includes("skills") ? "fade-in active" : "fade-in"
          }
        >
          <div className="skill-content">
            <h1 className="skill-title">Minhas Habilidades</h1>

            <div className="skillScroll">
              <CircularProgressBar progress={7.5} text={"Java"} />
              <CircularProgressBar progress={8} text={"Typescript"} />
              <CircularProgressBar progress={8} text={"React JS"} />
              <CircularProgressBar progress={7.5} text={"React Native"} />
              <CircularProgressBar progress={9} text={"Figma"} />
              <CircularProgressBar progress={5} text={"C#"} />
            </div>

            <div className="two-sides-container-secondary">
              <div className="left-side-secondary">
                <h1>Línguas</h1>
                <hr></hr>
                <LinearProgressBar
                  progress={4}
                  text={"Ingês"}
                ></LinearProgressBar>
                <LinearProgressBar
                  progress={4}
                  text={"Português"}
                ></LinearProgressBar>
                <LinearProgressBar
                  progress={2}
                  text={"Espanhol"}
                ></LinearProgressBar>
              </div>
              <div className="right-side-skills">
                <h1>Estudos</h1>
                <hr></hr>

                <div className="certifications">
                  <div className="certification-container">
                    <img
                      src={certificationIcon}
                      className="certification-icon"
                      alt="icon"
                    />
                    <div className="certification-texts">
                      <h1 className="certification-title">Track StartUp</h1>
                      <p className="certification-informations">PUCRS 2022</p>
                    </div>
                  </div>

                  <div className="certification-container">
                    <img
                      src={certificationIcon}
                      className="certification-icon"
                      alt="icon"
                    />
                    <div className="certification-texts">
                      <h1 className="certification-title">
                        Inteligência Artificial e Machine Learning
                      </h1>
                      <p className="certification-informations">Udemy 2022</p>
                    </div>
                  </div>

                  <div className="certification-container">
                    <img
                      src={certificationIcon}
                      className="certification-icon"
                      alt="icon"
                    />
                    <div className="certification-texts">
                      <h1 className="certification-title">
                        Fundamentos de Codificação
                      </h1>
                      <p className="certification-informations">
                        GrassHoper 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={
            visibleSections.includes("projects") ? "fade-in active" : "fade-in"
          }
        >
          <div className="projects-title">
            <hr className="line1" />
            <h1>Projetos</h1>
            <hr className="line2" />
          </div>

          <div className="projects-photos-grid">
            <img
              src={connectPharmacy}
              className="project-photo"
              alt="connectPharmacy"
            />
            <img
              src={vitimasDoCrime}
              className="project-photo"
              alt="vitimasDoCrime"
            />
            <img src={potterdle} className="project-photo" alt="potterdle" />
            <img src={watchfolio} className="project-photo" alt="watchfolio" />
          </div>
        </section>

        <section
          id="redesign"
          className={
            visibleSections.includes("redesign") ? "fade-in active" : "fade-in"
          }
        >
          <div className="projects-title">
            <hr className="line1" />
            <h1>Redesigns</h1>
            <hr className="line2" />
          </div>

          <div className="projects-photos-grid">
            <img src={twitter} className="project-photo" alt="twitter" />
            <img src={spotify} className="project-photo" alt="spotify" />
            <img src={instagram} className="project-photo" alt="instagram" />
            <img src={primeVideo} className="project-photo" alt="primeVideo" />
          </div>
        </section>

        <section
          id="endPage"
          className={
            visibleSections.includes("endPage") ? "fade-in active" : "fade-in"
          }
        >
          <div className="endcontainer">
            <h1> Interessado no meu trabalho?</h1>
            <p>Baixe o meu currículo para saber mais</p>
            <DownloadButton text={"Download CV"} />
          </div>
        </section>

        <div className="end"></div>
      </div>
    </body>
  );
};

export default Home;
