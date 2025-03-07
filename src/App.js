import NavBar from "./sections/NavBar";
import React from 'react'
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import BackGround from "./sections/BackGround";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import Cover from "./component/Cover";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Cover />
      <NavBar />
      <Main />
      <AboutMe />
      <BackGround/>
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
