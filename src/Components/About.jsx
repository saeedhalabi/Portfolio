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
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* About Section */}
      <section className="text-left relative">
        <header>
          <h2 className="text-2xl font-bold relative">about me</h2>
          <span className="w-16 h-1 bg-black absolute left-0 top-8"></span>
        </header>
        <div className="flex flex-col items-center text-center mt-6">
          <img
            src={SaeedImage}
            alt="Saeed Halabi's Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <h1 className="text-xl font-semibold mt-4">Saeed Halabi</h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-600 mt-2 max-w-lg"
          >
            Front-End Developer with a strong ability to learn and collaborate
            in dynamic environments. Experienced in creating responsive web
            applications using modern JavaScript frameworks and libraries.
            Focused on using ReactJS and state management to build engaging user
            experiences.
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
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          {
            title: "HTML & CSS",
            desc: "Responsive websites with fast loading.",
            icon: <FaHtml5 className="text-orange-500 text-3xl" />,
          },
          {
            title: "JavaScript",
            desc: "Bring life to the web",
            icon: <FaJs className="text-yellow-500 text-3xl" />,
          },
          {
            title: "React.js",
            desc: "Build dynamic, interactive UIs with React.js",
            icon: <FaReact className="text-blue-500 text-3xl" />,
          },
        ].map((skill, index) => (
          <article
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="p-4 border border-gray-300 rounded-lg text-center shadow"
          >
            <div className="flex items-center justify-center">{skill.icon}</div>
            <h3 className="font-semibold mt-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{skill.desc}</p>
          </article>
        ))}
      </section>

      {/* Experience & Study Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {[
          {
            title: "Experience with",
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
            title: "Currently learning and working on",
            items: [
              "Coding React.js",
              "CSS3 Development",
              "JavaScript Coding",
              "TypeScript Projects",
              "Node.js Basics",
              "RESTful API Development",
              "User Experience Design",
            ],
          },
        ].map((section, index) => (
          <article
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
          </article>
        ))}
      </section>
    </main>
  );
};

export default About;
