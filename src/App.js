// import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./sections/NavBar";
import React from 'react'
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import BackGround from "./sections/BackGround";
import Project from "./sections/Project";
import Stack from "./sections/Stack";
import Footer from "./sections/Footer";
import Cover from "./component/Cover";

function App() {
  return (
    <>
      <Cover />
      <NavBar />
      <Main />
      <AboutMe />
      <BackGround/>
      <Stack />
      <Project />
      <Footer />
    </>
  );
}

export default App;
