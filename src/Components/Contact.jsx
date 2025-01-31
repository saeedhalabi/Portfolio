import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <main className="flex flex-col items-center mt-15 py-10">
      <div className="text-center">
        <h1 className="text-black font-extrabold text-xl">contact me</h1>
        <div className="w-10 h-1 bg-black mx-auto mt-1"></div>
      </div>
      <div className="flex space-x-6 mt-10 text-2xl">
        <a
          href="https://www.linkedin.com/in/saeed-halabi"
          className="text-[#0077B5]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/saeedhalabi_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://github.com/saeedhalabi"
          className="text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </main>
  );
};

export default Contact;
