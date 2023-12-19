

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";


const siteProps = {
  name: "Yúlia Rodrigues",
  title: "Desenvolvedora Front-End",
  email: "https://mail.google.com/mail/u/0/#inbox",
  gitHub: "https://github.com/yuliaardrigues",
  instagram: "https://www.instagram.com/yuliarodrigues/",
  linkedIn: "www.linkedin.com/in/yúlia-rodrigues-1b9384220",
  medium: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
