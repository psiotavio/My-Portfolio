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
    <body>
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
                <Link to="/instagram">
                  <img
                    className="posters"
                    src={instagramPoster}
                    alt="Instagram Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/twitter">
                  <img
                    className="posters"
                    src={twitterPoster}
                    alt="Twitter Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/spotify">
                  <img
                    className="posters"
                    src={spotifyPoster}
                    alt="Spotify Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/prime-video">
                  <img
                    className="posters"
                    src={primePoster}
                    alt="Prime Poster"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="scrollportSection">
          <h1 className="projectsTitle">Redesigns</h1>
          <div className="scrollport">
            <div className="photoProjectsScroll">
              <div>
                <Link to="/instagram">
                  <img
                    className="posters"
                    src={instagramPoster}
                    alt="Instagram Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/twitter">
                  <img
                    className="posters"
                    src={twitterPoster}
                    alt="Twitter Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/spotify">
                  <img
                    className="posters"
                    src={spotifyPoster}
                    alt="Spotify Poster"
                  />
                </Link>
              </div>

              <div>
                <Link to="/prime-video">
                  <img
                    className="posters"
                    src={primePoster}
                    alt="Prime Poster"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="scrollportSection">
          <h1 className="projectsTitle">Projects</h1>
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
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Portfolio;
