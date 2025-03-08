import NavBar from "./sections/NavBar";
import React, { useEffect } from 'react'
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import BackGround from "./sections/BackGround";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import Cover from "./component/Cover";
import Skills from "./sections/Skills";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {

  // Aos 초기화
  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <>
      <Cover />
      <NavBar />
      <Main />
      <AboutMe />
      <BackGround />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
