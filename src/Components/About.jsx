
import React from "react";

import image from "../images/sl_031520_28970_32.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "Sou uma estudante de Sistemas de Informação no Centro Universitário Paraíso, com foco em Front-end.";


const skillsList = [
  "Html e Css",
  "Design responsivo e mobile first.",
  "Experiência com frameworks como ReactJS, Bootstrap, Django",
  "Focus group testing",
  "Mobile user interfaces",
  "Experiência com Git e GitHub.",
];


const detailOrQuote =
  "Sou apaixonada por design e desenvolvimento de interfaces, dedicado a explorar continuamente novas tecnologias e técnicas no âmbito do front-end. Busco aprimorar constantemente minhas habilidades, mantendo-me atualizado com as últimas tendências e inovações para oferecer experiências digitais envolventes e de alta qualidade. Minha abordagem proativa reflete meu compromisso em estar na vanguarda do design e desenvolvimento, impulsionando a excelência na criação de interfaces impactantes.";

const About = () => {
  return (
    <section className="padding" id="Sobre">
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "1rem",
          margin: "1rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre Mim</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
