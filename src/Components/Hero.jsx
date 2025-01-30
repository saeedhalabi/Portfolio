import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="mt-40">
      <h1 className="hero-title text-2xl text-center">
        <TypeAnimation
          sequence={[
            "<front-end.web(developer)>",
            1000,
            "<React enthusiast/>",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h1>
    </section>
  );
};

export default Hero;
