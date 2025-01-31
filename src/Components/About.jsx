import React, { useEffect } from "react";
import SaeedImage from "../../src/images/saeed-profile.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animation only once
    });
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-left relative">
        <h2 className="text-2xl font-bold relative">about me</h2>
        <span className="w-16 h-1 bg-black absolute left-0 top-8"></span>
      </div>

      <div className="flex flex-col items-center text-center mt-6">
        <img
          src={SaeedImage}
          alt="Saeed Halabi's Profile Picture"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <h1 className="text-xl font-semibold mt-4">Saeed Halabi</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-gray-600 mt-2 max-w-lg"
        >
          Front-End Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions. Skilled in creating
          dynamic and responsive web applications using modern JavaScript
          frameworks and libraries. Seeking to leverage my expertise in ReactJS
          and state management to contribute to innovative projects and deliver
          exceptional user experiences.
        </p>
        <div className="flex space-x-4 mt-3 text-xl">
          <a
            href="https://x.com/saeedhalabi_"
            className="text-black font-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/saeedhalabi"
            className="text-black font-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:saeedrhalabi@gmail.com"
            className="text-black font-light"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          {
            title: "HTML & CSS",
            desc: "Responsive websites with fast loading.",
            icon: <FaHtml5 className="text-orange-500 text-3xl " />,
          },
          {
            title: "JavaScript",
            desc: "Bring life to the web",
            icon: <FaJs className="text-yellow-500 text-3xl " />,
          },
          {
            title: "React.js",
            desc: "Build your system with node.js.",
            icon: <FaReact className="text-blue-500 text-3xl " />,
          },
        ].map((skill, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="p-4 border border-gray-300 rounded-lg text-center shadow"
          >
            <div className="flex items-center justify-center">{skill.icon}</div>
            <h3 className="font-semibold mt-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>

      {/* Experience & Study Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {[
          {
            title: "I've had experiences with",
            items: [
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJS",
              "JQuery",
              "Bootstrap",
              "NodeJS",
              "PostgreSQL",
              "Git, GitHub",
              "CSS Preprocessors",
              "TypeScript",
            ],
          },
          {
            title: "I work and study about",
            items: [
              "Coding React.js",
              "Coding CSS3",
              "Coding JavaScript",
              "Coding TypeScript",
              "Studying Node.js basics",
              "Studying API RESTful",
              "Studying User Experience",
            ],
          },
        ].map((section, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow"
          >
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
