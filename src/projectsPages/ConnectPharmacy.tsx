import React from "react";
import "./cssPgs/projects.css";

import Aceitar from "../assets/projectsPagesPhotos/connectPharmacy/Aceitar.png";
import ListaAceitos from "../assets/projectsPagesPhotos/connectPharmacy/ListaAceitos.png";
import ListaAtivos from "../assets/projectsPagesPhotos/connectPharmacy/ListaAtivos.png";
import ListaEncerrado from "../assets/projectsPagesPhotos/connectPharmacy/ListaEncerrado.png";
import ListaHospitais from "../assets/projectsPagesPhotos/connectPharmacy/ListaHospitais.png";
import ListaRemedios from "../assets/projectsPagesPhotos/connectPharmacy/ListaRemedios.png";
import ListaTransporte from "../assets/projectsPagesPhotos/connectPharmacy/ListaTransporte.png";
import Login from "../assets/projectsPagesPhotos/connectPharmacy/Login.png";
import NovaInstituicao from "../assets/projectsPagesPhotos/connectPharmacy/NovaInstituicao.png";
import NovaRequisicao from "../assets/projectsPagesPhotos/connectPharmacy/NovaRequisicao.png";
import Remover from "../assets/projectsPagesPhotos/connectPharmacy/Remover.png";
import Requisicao from "../assets/projectsPagesPhotos/connectPharmacy/Requisicao.png";

const ConnectPharmacy = () => {
  return (
    <body>
      <div className="content">
        <div className="content-projects">
          <section className="title">
            <h1>Connect Pharmacy</h1>
          </section>

          <section className="introduction">
            <div className="subtitle-projects">
              <h2>Introdução</h2>
              <hr className="hr-projects" />
            </div>
            <div className="projects-texts">
              <p>
                Em meio à complexidade do cotidiano hospitalar, surge uma
                necessidade premente: a garantia de que nenhum paciente será
                deixado desamparado pela ausência de um medicamento vital. É
                neste contexto que a ConnectPharmacy se ergue como uma ponte de
                esperança e eficiência, prometendo transformar a realidade das
                instituições de saúde.
              </p>
              <p>
                Imagine o desespero de uma família ao descobrir que o remédio
                essencial para a recuperação de um ente querido não está
                disponível no momento crucial. Imagine a frustração de
                profissionais de saúde diante da burocracia que retarda o acesso
                a tratamentos salvadores. A falta de medicamentos não
                padronizados nos estoques dos hospitais não é apenas uma
                inconveniência logística, é uma questão de vida ou morte.
              </p>
              <p>
                A ConnectPharmacy surge como um farol de solução, um oásis de
                eficácia em um deserto de obstáculos. Nossa missão é simples,
                mas poderosa: garantir que cada paciente receba o tratamento
                adequado no momento certo, independentemente das limitações do
                sistema. Estamos aqui para unir forças, conectar instituições e
                salvar vidas.
              </p>
              <p>
                Acreditamos firmemente que a tecnologia pode desempenhar um
                papel fundamental na resolução desses desafios, proporcionando
                uma plataforma eficiente e segura para a gestão de medicamentos.
              </p>
            </div>
          </section>

          <section className="justification">
            <div className="subtitle-projects">
              <h2>Justificativa do Projeto</h2>
              <hr className="hr-projects" />
            </div>
            <div className="projects-texts">
              <p>
                A ConnectPharmacy não se contenta em apenas resolver problemas;
                nós nos propomos a mudar paradigmas. A falta de medicamentos não
                padronizados nos estoques dos hospitais é mais do que uma
                inconveniência logística: é uma falha no sistema que compromete
                a saúde e o bem-estar dos pacientes.
              </p>
              <p>
                Nossa justificativa é simplesmente inegável: cada vida perdida
                devido à indisponibilidade de um medicamento é uma tragédia que
                poderia ser evitada. Cada família aflita, cada profissional de
                saúde frustrado, clama por uma solução. E é exatamente isso que
                oferecemos: uma solução eficaz, acessível e inovadora.
              </p>
              <p>
                Através da ConnectPharmacy, buscamos não apenas suprir uma
                demanda urgente, mas também estabelecer um novo padrão de
                excelência na gestão de medicamentos em ambientes hospitalares e
                de saúde.
              </p>
            </div>
          </section>

          <section className="objectives">
            <div className="subtitle-projects">
              <h2>Objetivo do Projeto</h2>
              <hr className="hr-projects" />
            </div>
            <div className="projects-texts">
              <p>
                Nosso objetivo é claro e ambicioso: desenvolver um sistema WEB
                que não apenas conecte as instituições de saúde de Porto Alegre,
                mas que também transforme a maneira como lidamos com a
                distribuição de medicamentos não padronizados. Queremos não
                apenas melhorar a eficiência, mas também garantir que cada
                paciente receba o tratamento necessário no momento exato em que
                ele é necessário.
              </p>
              <p>
                Além disso, buscamos promover uma maior transparência e
                colaboração entre as diversas entidades de saúde, reduzindo
                assim os obstáculos burocráticos e agilizando o acesso a
                medicamentos essenciais.
              </p>
            </div>
          </section>

          <ul className="links-section">
            <li>
              <a
                className="links"
                href="https://tools.ages.pucrs.br/connectpharmacy/connectpharmacy-wiki/-/wikis/home"
              >
                Wiki do Projeto
              </a>
            </li>
            <li>
              <a
                className="links"
                href="https://www.ages.pucrs.br/lista-de-projetos-2023-1/connect-pharmacy/"
              >
                Página da AGES do projeto Connect Pharmacy
              </a>
            </li>

            <li>
              <a
                className="links"
                href="https://tools.ages.pucrs.br/connectpharmacy"
              >
                Projeto completo no GitLab
              </a>
            </li>
          </ul>

          <section className="photos-projects">
            <h1>Screenshots</h1>
            <div className="project-photos-container">
              <img
                className="projects-photo-horizontal"
                src={Aceitar}
                alt="Aceitar"
              />
              <img
                className="projects-photo-horizontal"
                src={ListaAtivos}
                alt="Lista Ativos"
              />
              <img
                className="projects-photo-horizontal"
                src={ListaEncerrado}
                alt="Lista Encerrado"
              />
              <img
                className="projects-photo-horizontal"
                src={ListaHospitais}
                alt="Lista Hospitais"
              />
              <img
                className="projects-photo-horizontal"
                src={ListaRemedios}
                alt="Lista Remédios"
              />
              <img
                className="projects-photo-horizontal"
                src={ListaTransporte}
                alt="Lista Transporte"
              />
              <img
                className="projects-photo-horizontal"
                src={Login}
                alt="Login"
              />
              <img
                className="projects-photo-horizontal"
                src={NovaInstituicao}
                alt="Nova Instituição"
              />
              <img
                className="projects-photo-horizontal"
                src={NovaRequisicao}
                alt="Nova Requisição"
              />
              <img
                className="projects-photo-horizontal"
                src={Remover}
                alt="Remover"
              />
              <img
                className="projects-photo-horizontal"
                src={Requisicao}
                alt="Requisição"
              />
               <img
                className="projects-photo-horizontal"
                src={ListaAceitos}
                alt="Lista de Aceitos"
              />
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};

export default ConnectPharmacy;
