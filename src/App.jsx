import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
const App = () => {
  return (
    <main className="grid col-span-full">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default App;
