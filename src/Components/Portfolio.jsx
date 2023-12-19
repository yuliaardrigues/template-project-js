import React from "react";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Desenvolvimento de um aplicativo digital wallet,iniciante. ",
    description:
      "Contribuiçao no processo de desenvolvimento e prototipaçao de interface do usuario do aplicativo com React Native.",
    url: "https://github.com/RianLandim/digital-wallet.git",
  },
  {
    title: "Desenvolvimento de um site para uma empresa de comércio eletrônico, iniciante.",
    description:
      "Contribuição por criar a interface do usuário do site, como layout, navegaçao e interação com o usuário",
    url: "https://github.com/JLMY-Commerce/core_web_services.git",
  },
  {
    title: "Demostraçoes com Html e Css",
    description:
      "Criando interface e inspiraçoes com Html e Css",
    url: "https://github.com/yuliaardrigues/Demos-Html-e-CSS.git",
  },
  {
    title: "Cia aeréa",
    description:
      "Projeto Oritação a objetos e um front-end simples com Html e Css integraçao do back-end e o banco de dados com o framework Django",
    url: "https://github.com/yuliaardrigues/POO-BD.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
  <h2 style={{ textAlign: "center" }}>Portfolio</h2>
  <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}>
    <div style={{ maxWidth: "20%", alignSelf: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff" }}>
        <h3>{imageAltText}</h3>
      </div>
    </div>
    <div className="container">
      {projectList.map((project) => (
        <div className="box" key={project.title}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
          </a>
          <p className="small">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Portfolio;
