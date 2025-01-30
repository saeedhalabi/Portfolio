import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
};

export default App;
