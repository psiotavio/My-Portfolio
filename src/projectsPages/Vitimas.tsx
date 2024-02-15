import React from "react";
import "./cssPgs/vitimas.css";
import "./cssPgs/projects.css";

import Sobre from "../assets/projectsPagesPhotos/Vitimas/About.png";
import Cadastro from "../assets/projectsPagesPhotos/Vitimas/cadastro.png";
import CadastroConcluido from "../assets/projectsPagesPhotos/Vitimas/cadastroConcuido.png";
import Documentos from "../assets/projectsPagesPhotos/Vitimas/documentos.png";
import EnvioDeProcesso from "../assets/projectsPagesPhotos/Vitimas/envioProcesso.png";
import HomePage from "../assets/projectsPagesPhotos/Vitimas/home.png";
import HomeTutorial from "../assets/projectsPagesPhotos/Vitimas/homeTutorial.png";
import Logando from "../assets/projectsPagesPhotos/Vitimas/logando.png";
import Login from "../assets/projectsPagesPhotos/Vitimas/login.png";
import Processos from "../assets/projectsPagesPhotos/Vitimas/processos.png";

const Vitimas = () => {
  return (
    <div className="content">
      <div className="content-projects">
        <section className="title">
          <h1>Vítimas de Crime</h1>
        </section>

        <section className="introduction">
          <div className="subtitle-projects">
            <h2>Introdução</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            O Ministério Público do Rio Grande do Sul (MPRS), em parceria com a
            Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), tem o
            prazer de apresentar o aplicativo "Vítimas de Crime". Desenvolvido
            com o objetivo de difundir o direito das vítimas, este projeto visa
            garantir informação, exercício de direitos e proteção às pessoas
            afetadas por crimes.
          </p>
        </section>

        <section className="origin-justification">
          <div className="subtitle-projects">
            <h2>Origem e Justificativa</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            A ideia para o aplicativo nasceu da necessidade de tornar mais ágil
            e acessível o suporte às vítimas de crimes. Sob a liderança da
            promotora de Justiça Márcia Regina Nunes Villanova, o projeto foi
            concebido para fornecer às vítimas informações detalhadas sobre o
            processo criminal, desde o registro da ocorrência até o encerramento
            do caso. O objetivo é empoderar as vítimas, oferecendo-lhes os
            recursos necessários para compreender seus direitos e buscar
            assistência quando necessário.
          </p>
        </section>

        <section className="functionalities">
          <div className="subtitle-projects">
            <h2>Funcionalidades</h2>
            <hr className="hr-projects" />
          </div>
          <ul>
            <li>
              <strong>Informação Abrangente:</strong> Desde o registro de
              ocorrência até a conclusão do processo criminal, o aplicativo guia
              as vítimas por cada etapa do caminho, fornecendo informações
              claras e concisas sobre seus direitos e opções.
            </li>
            <li>
              <strong>Acesso a Serviços Essenciais:</strong> As vítimas podem
              facilmente encontrar informações de contato para órgãos de
              repressão do Estado, como a Brigada Militar, Polícia Civil e
              Ministério Público, além de serviços médicos, psiquiátricos e
              sociais.
            </li>
            <li>
              <strong>Facilidade de Documentação:</strong> O aplicativo permite
              que as vítimas alimentem o sistema com provas e documentos
              relevantes, que serão encaminhados automaticamente para as
              autoridades competentes, auxiliando na instrução do processo
              criminal.
            </li>
          </ul>
        </section>

        <section className="expected-results">
          <div className="subtitle-projects">
            <h2>Resultados Esperados</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            Espera-se que o aplicativo "Vítimas de Crime" contribua
            significativamente para a promoção dos direitos das vítimas,
            oferecendo-lhes suporte e orientação em momentos difíceis. Além
            disso, espera-se que o aplicativo ajude a agilizar e aprimorar o
            processo de investigação e julgamento de crimes, facilitando a
            colaboração entre vítimas e autoridades.
          </p>
        </section>

        <section className="conclusion">
          <div className="subtitle-projects">
            <h2>Conclusão</h2>
            <hr className="hr-projects" />
          </div>
          <p className="projects-texts">
            O aplicativo "Vítimas de Crime" representa um passo importante na
            busca pela justiça e pela proteção dos direitos das vítimas. Estamos
            confiantes de que esta iniciativa terá um impacto positivo
            significativo em nossa comunidade, oferecendo suporte e recursos
            essenciais para aqueles que mais precisam.
          </p>
          <p className="projects-texts">
            Para mais informações sobre o projeto e suas funcionalidades,
            convidamos você a acessar os seguintes links:
          </p>
          <ul className="links-section">
            <li>
              <a
                className="links"
                href="https://www.mprs.mp.br/noticias/58422/"
              >
                Ministério Público do Rio Grande do Sul (MPRS)
              </a>
            </li>
            <li>
              <a
                className="links"
                href="https://tools.ages.pucrs.br/vitimas-de-crime/wiki/-/wikis/home"
              >
                Wiki do Projeto
              </a>
            </li>
            <li>
              <a
                className="links"
                href="https://www.ages.pucrs.br/lista-de-projetos-2023-1/vitimas-de-crime/"
              >
                Página da AGES do projeto Vítimas de Crime
              </a>
            </li>

            <li>
              <a
                className="links"
                href="https://tools.ages.pucrs.br/vitimas-de-crime"
              >
                Projeto completo no GitLab
              </a>
            </li>
          </ul>
        </section>

        <section className="photos-projects">
            <h1>Screenshots</h1>
          <div className="project-photos-container">
            <img className="projects-photo-vertical" src={Sobre} alt="Sobre" />
            <img
              className="projects-photo-vertical"
              src={Cadastro}
              alt="Cadastro"
            />
            <img
              className="projects-photo-vertical"
              src={CadastroConcluido}
              alt="Cadastro Concluído"
            />
            <img
              className="projects-photo-vertical"
              src={Documentos}
              alt="Documentos"
            />
            <img
              className="projects-photo-vertical"
              src={EnvioDeProcesso}
              alt="Envio de Processo"
            />
            <img
              className="projects-photo-vertical"
              src={HomePage}
              alt="Home Page"
            />
            <img
              className="projects-photo-vertical"
              src={HomeTutorial}
              alt="Home Tutorial"
            />
            <img
              className="projects-photo-vertical"
              src={Logando}
              alt="Logando"
            />
            <img className="projects-photo-vertical" src={Login} alt="Login" />
            <img
              className="projects-photo-vertical"
              src={Processos}
              alt="Processos"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vitimas;
