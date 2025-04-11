import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="mt-40">
      <h1 className="hero-title lg:text-2xl sm:text-base text-center">
        <TypeAnimation
          sequence={[
            "<Frontend Developer/>",
            1000,
            "<React.js Enthusiast/>",
            1000,
            "<Building UIs with Tailwind CSS/>",
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
