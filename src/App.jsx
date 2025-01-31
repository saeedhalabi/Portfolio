import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
const App = () => {
  return (
    <main className="grid col-span-full">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
    </main>
  );
};

export default App;
