import React from "react";
import "./cssPages/contact.css";

const Sobre = () => {
  return (
    <body>
      <div className="content">
        <section className="title">
          <h1>Sobre Mim</h1>
        </section>
        <section className="content-text">
          <div className="text">
            <h2>Minha Jornada</h2>
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
            <h2>Projetos Universitários</h2>
            <p>
              Durante minha trajetória na universidade, participei de dois
              projetos que foram cruciais para o meu desenvolvimento pessoal.
            </p>
            <p>
              O primeiro foi o projeto Connect Pharmacy, cujo objetivo era
              solucionar o problema da falta de medicamentos não padronizados
              nos estoques de hospitais. Desenvolvemos um sistema WEB para
              conectar instituições de saúde em Porto Alegre, melhorando a
              eficiência na distribuição de medicamentos.
            </p>
            <p>
              O segundo foi o projeto Vítimas de Crime para o Ministério
              Público. Nosso objetivo era garantir informações, exercício de
              direitos e proteção às vítimas de crimes. Criamos um aplicativo
              que permitia às vítimas compartilhar provas e documentos com a
              Polícia Civil e o Ministério Público.{" "}
              <a href="https://www.mprs.mp.br/noticias/58422/">(Saiba mais)</a>
            </p>
          </div>
          <div className="text">
            <h2>Meus Jogos</h2>
            <p>
              Sou apaixonado por criar jogos desde 2020, quando comecei a
              explorar a programação mais a fundo. Além de pequenos projetos
              pessoais, trabalhei em jogos mais complexos.
            </p>
            <p>
              Um desses jogos é o "Mr. Argon", onde o jogador assume o papel de
              um adolescente hackeado, pressionado por um hacker que exige
              dinheiro periodicamente. O objetivo é minerar bitcoins para pagar
              antes que o hacker faça uma exigência impossível.
            </p>
            <p>
              Atualmente, estou desenvolvendo dois jogos. Um deles é o "Shadow
              Clicker", inspirado no jogo "Cookie Clicker", porém com uma
              temática de terror. Os jogadores precisam clicar na tela para
              coletar moedas e cartas de terror.{" "}
              <i>* esse projeto está em desenvolvimento.</i>
            </p>
            <p>
              O segundo jogo se chama "The Night of Nights" e estou
              desenvolvendo junto com a empresa Little Devil, onde sou sócio e
              programador. Este é um jogo 3D com câmera fixa, adaptado da
              popular franquia de quadrinhos "Manifesto: The Midnight Witch". Os
              jogadores assumirão o papel de Leona Mádika, uma poderosa
              feiticeira que deve navegar em um mundo sombrio e perigoso cheio
              de criaturas sobrenaturais, enfrentando monstros assim como suas
              sombras interiores para domar sua foice devoradora de almas. O
              jogo oferecerá uma experiência única com elementos de horror,
              bruxaria, saltos no tempo e diferentes dimensões.{" "}
              <i>* esse projeto está em desenvolvimento.</i>
            </p>
          </div>
          <div className="text">
            <h2>Experiência em Programação</h2>
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
            <h2>Desafios e Aprendizado Contínuo</h2>
            <p>
              Sou uma pessoa que adora desafios e está sempre em busca de novos
              conhecimentos. Estou constantemente explorando novas áreas e
              procurando maneiras de expandir meu repertório. Minha jornada no
              mundo da programação e do design tem sido uma jornada emocionante
              e gratificante, e estou ansioso para o que o futuro reserva.
            </p>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Sobre;
