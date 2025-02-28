import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "home", id: "home" },
    { name: "about me", id: "about" },
    { name: "projects", id: "projects" },
    { name: "experience", id: "experience" },
    { name: "contact me", id: "contact" },
  ];

  return (
    <nav className="flex items-center justify-between p-4">
      <h4 className="font-extrabold text-black text-2xl sm:text-base lg:text-2xl">
        saeed.
      </h4>

      {/* Hamburger Icon */}
      <svg
        className="lg:hidden w-6 h-6 transition-all"
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {!menuOpen ? (
          <path d="M4 6h16M4 12h16M4 18h16" />
        ) : (
          <path d="M6 18L18 6M6 6l12 12" />
        )}
      </svg>

      {/* Menu List */}
      <ul
        className={`flex gap-5 font-light ${
          menuOpen
            ? "flex-col absolute top-16 left-0 w-full bg-white p-4 z-10"
            : "hidden lg:flex"
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="group relative">
            <a href={`#${item.id}`} className="bg-transparent border-none">
              {item.name}
            </a>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
