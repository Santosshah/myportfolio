import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testmonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        <Skills />
        <Qualification />
        {/* <Services /> */}
        <Project />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
