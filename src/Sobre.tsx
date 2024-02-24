import React from "react";
import "./cssPages/contact.css";
import { FaInstagram, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

import timeConnect from "./assets/sobre/timeConnect.jpg";
import timeVitimas from "./assets/sobre/timeVitimas.jpg";

import printArgon1 from "./assets/sobre/jogos/MrArgon/print1.png";
import printArgon2 from "./assets/sobre/jogos/MrArgon/print2.png";
import printArgon3 from "./assets/sobre/jogos/MrArgon/print3.png";
import capa from "./assets/sobre/jogos/MrArgon/capa.png";

import prints from "./assets/sobre/jogos/Shadow/prints.jpg";
import concept from "./assets/sobre/jogos/Shadow/concept.png";

import poster from "./assets/sobre/jogos/midnightWitch/midnight.png";

const Sobre = () => {
  return (
    <body>
      <div className="content">
        <section className="title">
          <h1>Sobre Mim</h1>
        </section>
        <section className="content-text">
          <div className="text">
            <h2 className="titles">Minha Jornada</h2>
            <p>
              Minha jornada começou no ensino médio, onde estudei no Colégio
              Tiradentes da Brigada Militar. Foi lá que tive minhas primeiras
              aulas de programação, despertando meu interesse pela área.
              Atualmente, curso Engenharia de Software na PUCRS (Pontifícia
              Universidade Católica do Rio Grande do Sul), encontrando-me no
              quinto semestre.
            </p>
          </div>
          <div className="text">
            <h2 className="titles">Projetos Universitários</h2>
            <p>
              Durante minha jornada na universidade, fui privilegiado por
              participar ativamente de dois projetos que não apenas enriqueceram
              minha experiência acadêmica, mas também desempenharam um papel
              fundamental no meu desenvolvimento pessoal e profissional.
            </p>
            <div className="projetos-content">
              <div className="projetos">
                <div className="text-left">
                  <h2>Connect Pharmacy</h2>
                  <p>
                    O primeiro foi o projeto Connect Pharmacy, cujo objetivo era
                    solucionar o problema da falta de medicamentos não
                    padronizados nos estoques de hospitais. Desenvolvemos um
                    sistema WEB para conectar instituições de saúde em Porto
                    Alegre, melhorando a eficiência na distribuição de
                    medicamentos.
                  </p>
                  <a
                    className="linksR"
                    href="https://www.mprs.mp.br/noticias/58422/"
                  >
                    Saiba mais
                  </a>
                </div>
                <div className="imagens-right">
                  <img
                    src={timeConnect}
                    className="photosSobre-horizontal"
                    alt="Time Connect Pharmacy"
                  />
                </div>
              </div>
              <div className="projetosSwap">
                <div className="text-right">
                  <h2 className="subTitlesR">Vítimas de Crime</h2>
                  <p>
                    O segundo foi o projeto Vítimas de Crime para o Ministério
                    Público. Nosso objetivo era garantir informações, exercício
                    de direitos e proteção às vítimas de crimes. Criamos um
                    aplicativo que permitia às vítimas compartilhar provas e
                    documentos com a Polícia Civil e o Ministério Público.
                  </p>
                  <br />
                  <a
                    className="linksL"
                    href="https://www.mprs.mp.br/noticias/58422/"
                  >
                    Saiba mais
                  </a>
                </div>
                <div className="imagens-left">
                  <img
                    src={timeVitimas}
                    className="photosSobre-horizontal"
                    alt="Time Vitimas de Crime"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <h2 className="titles">Meus Jogos</h2>
            <p>
              Sou apaixonado por criar jogos desde 2020, quando comecei a
              explorar a programação mais a fundo. Além de pequenos projetos
              pessoais, trabalhei em jogos mais complexos.
            </p>

            <div className="projetos-content">
              <div className="projetos">
                <div className="text-left">
                  <h2>Mr. Argon</h2>
                  <p>
                    Um desses jogos é o "Mr. Argon", uma experiência envolvente
                    onde o jogador mergulha na pele de um adolescente cuja vida
                    é virada de cabeça para baixo após ser hackeado. Sob
                    constante pressão de um hacker implacável, o protagonista se
                    vê obrigado a enfrentar um desafio constante: minerar
                    bitcoins para pagar um resgate antes que o hacker imponha
                    uma demanda impossível de ser cumprida.
                  </p>

                  <p>
                    Neste jogo de suspense e estratégia, cada decisão do jogador
                    molda o destino do personagem, enquanto ele luta para
                    encontrar uma saída desse ciberpesadelo.
                  </p>

                  <p>
                    À medida que o jogo avança, o protagonista se vê confrontado
                    com a necessidade premente de aprimorar constantemente seu
                    equipamento para aumentar sua capacidade de mineração de
                    bitcoins.
                  </p>
                </div>
                <div className="right-grid">
                  <div className="imagens-right-grid">
                    <img
                      src={capa}
                      className="photosSobre-horizontal-grid"
                      alt="Mr. Argon"
                    />
                    <img
                      src={printArgon1}
                      className="photosSobre-horizontal-grid"
                      alt="Mr. Argon"
                    />
                    <img
                      src={printArgon2}
                      className="photosSobre-horizontal-grid"
                      alt="Mr. Argon"
                    />
                    <img
                      src={printArgon3}
                      className="photosSobre-horizontal-grid"
                      alt="Mr. Argon"
                    />
                  </div>
                </div>
              </div>

              <div className="projetos-content">
                <div className="projetosSwap">
                  <div className="text-right">
                    <h2 className="subTitlesR">Shadow Clicker</h2>
                    <p>
                      Atualmente, estou desenvolvendo dois jogos. Um deles é o
                      "Shadow Clicker", inspirado no jogo "Cookie Clicker",
                      porém com uma temática de terror. Os jogadores precisam
                      clicar na tela para coletar moedas e cartas de terror.
                    </p>
                    <i>* esse projeto está em desenvolvimento.</i>
                  </div>
                  <div className="right-grid">
                    <div className="imagens-right-grid">
                      <img
                        src={prints}
                        className="photosSobre-horizontal-grid"
                        alt="Prints do jogo Shadow Clicker"
                      />
                      <img
                        src={concept}
                        className="photosSobre-horizontal-grid"
                        alt="Concept do Shadow Clicker"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="projetos-content">
                <div className="projetos">
                  <div className="text-left">
                    <h2>The Night of Nights</h2>
                    <p>
                      O segundo jogo se chama "The Night of Nights" e estou
                      desenvolvendo junto com a empresa Little Devil, onde sou
                      sócio e programador. Este é um jogo 3D com câmera fixa,
                      adaptado da popular franquia de quadrinhos "Manifesto: The
                      Midnight Witch". Os jogadores assumirão o papel de Leona
                      Mádika, uma poderosa feiticeira que deve navegar em um
                      mundo sombrio e perigoso cheio de criaturas sobrenaturais,
                      enfrentando monstros assim como suas sombras interiores
                      para domar sua foice devoradora de almas. O jogo oferecerá
                      uma experiência única com elementos de horror, bruxaria,
                      saltos no tempo e diferentes dimensões.
                    </p>
                    <i>* esse projeto está em desenvolvimento.</i>
                  </div>
                  <div className="imagens-right">
                    <img
                      src={poster}
                      className="photosSobre-vertical"
                      alt="The Night of Nights"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text">
            <h2 className="titles">Experiência em Programação</h2>
            <p>
              Ao longo da minha jornada, desenvolvi habilidades sólidas em
              front-end, destacando-me na criação de interfaces visuais
              atraentes. Possuo conhecimento em diversas linguagens, incluindo
              JavaScript, TypeScript, React Native, React JS, Java e C#. Além
              disso, tenho interesse crescente no campo de UI/UX design e tenho
              praticado técnicas para aprimorar a experiência do usuário.
            </p>
          </div>
          <div className="text">
            <h2 className="titles">Desafios e Aprendizado Contínuo</h2>
            <p>
              Sou uma pessoa que adora desafios e está sempre em busca de novos
              conhecimentos. Estou constantemente explorando novas áreas e
              procurando maneiras de expandir meu repertório. Minha jornada no
              mundo da programação e do design tem sido uma jornada emocionante
              e gratificante, e estou ansioso para o que o futuro reserva.
            </p>
          </div>
        </section>

        <section className="socialMedia">
          <div className="icon-container">
            <a
              href="https://www.instagram.com/psiotavio?igsh=djY2Y3ZucHhna2Ji&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icons" />
            </a>

            <a
              href="https://github.com/psiotavio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" />
            </a>

            <a
              href="https://tools.ages.pucrs.br/otavio.souza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGitlab className="icons" />
            </a>

            <a
              href="https://www.linkedin.com/in/otavio-cunhap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons" />
            </a>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Sobre;
