/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
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
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
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
