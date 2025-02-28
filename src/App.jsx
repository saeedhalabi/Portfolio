import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CustomCursor from "./CustomCursor";

const App = () => {
  return (
    <main className="grid col-span-full">
      <CustomCursor />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default App;
