import React from "react";
import { Link } from "react-router-dom";

import instagramPoster from "./assets/posters/instagramPoster.png";
import twitterPoster from "./assets/posters/twitterPoster.png";
import spotifyPoster from "./assets/posters/spotifyPoster.png";
import primePoster from "./assets/posters/primePoster.png";

import potterdlePoster from "./assets/posters/potterdlePoster.png";
import connectPharmacyPoster from "./assets/posters/connectPharmacyPoster.png";
import vitimasDeCrimePoster from "./assets/posters/vitimasPoster.png";
import watchfolioPoster from "./assets/posters/watchfolioPoster.png";

import "./cssPages/portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div className="content">
        <section className="title">
          <h1>Portfolio</h1>
        </section>

        <section className="scrollportSection">
          <h1 className="projectsTitle">Todos os Projetos</h1>
          <div className="scrollport">
            <div className="photoProjectsScroll">
              <div>
                <Link to="/vitimas">
                  <img
                    className="posters"
                    src={vitimasDeCrimePoster}
                    alt="Vitimas de Crime Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/connectPharmacy">
                  <img
                    className="posters"
                    src={connectPharmacyPoster}
                    alt="Connect Pharmacy Poster"
                  />
                </Link>
              </div>
              <div>
                <Link to="/watchfolio">
                  <img
                    className="posters"
                    src={watchfolioPoster}
                    alt="Watchfolio Poster"
                  />
                </Link>
              </div>
              <div>
                <Link to="/potterdle">
                <img
                  className="posters"
                  src={potterdlePoster}
                  alt="Potterdle Poster"
                />
                </Link>
              </div>
              <div>
                <img
                  className="posters"
                  src={instagramPoster}
                  alt="Instagram Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={twitterPoster}
                  alt="Twitter Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={spotifyPoster}
                  alt="Spotify Poster"
                />
              </div>
              <div>
                <img className="posters" src={primePoster} alt="Prime Poster" />
              </div>
            </div>
          </div>
        </section>

        <section className="scrollportSection">
          <h1 className="projectsTitle">Redesigns</h1>
          <div className="scrollport">
            <div className="photoProjectsScroll">
              <div>
                <img
                  className="posters"
                  src={instagramPoster}
                  alt="Instagram Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={twitterPoster}
                  alt="Twitter Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={spotifyPoster}
                  alt="Spotify Poster"
                />
              </div>
              <div>
                <img className="posters" src={primePoster} alt="Prime Poster" />
              </div>
            </div>
          </div>
        </section>

        <section className="scrollportSection">
          <h1 className="projectsTitle">Projects</h1>
          <div className="scrollport">
            <div className="photoProjectsScroll">
              <div>
                <img
                  className="posters"
                  src={vitimasDeCrimePoster}
                  alt="Vitimas de Crime Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={connectPharmacyPoster}
                  alt="Connect Pharmacy Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={watchfolioPoster}
                  alt="Watchfolio Poster"
                />
              </div>
              <div>
                <img
                  className="posters"
                  src={potterdlePoster}
                  alt="Potterdle Poster"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
