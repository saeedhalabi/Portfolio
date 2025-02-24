import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="mt-40">
      <h1 className="hero-title lg:text-2xl sm:text-base text-center">
        <TypeAnimation
          sequence={[
            "<frontend.web(developer)>",
            1000,
            "<React.js enthusiast/>",
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
