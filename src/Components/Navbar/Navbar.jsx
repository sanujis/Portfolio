import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-8 md:px-20 relative bg-[#171d32]">
      {/* Brand */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Hamburger Icon - visible only on small screens */}
      <button
        className="md:hidden block z-30"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <RiCloseLine size={30} className="transition-all duration-300" />
        ) : (
          <RiMenu2Line size={30} className="transition-all duration-300" />
        )}
      </button>

      {/* Navigation Links */}
      <ul
  className={`
    ${menuOpen ? "flex" : "hidden"}
    flex-col absolute top-16 left-0 w-full bg-transparent rounded-b-xl text-right gap-6 py-6 pr-5
    z-40
    md:static md:flex md:flex-row md:gap-20 md:bg-transparent md:w-auto md:py-0 md:rounded-none md:items-center md:text-left
    transition-all duration-300
  `}
>
        <li>
          <a
            href="#About"
            onClick={() => setMenuOpen(false)}
            className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697] cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            onClick={() => setMenuOpen(false)}
            className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697] cursor-pointer"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#ProjectsHeading"
            onClick={() => setMenuOpen(false)}
            className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697] cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Footer"
            onClick={() => setMenuOpen(false)}
            className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697] cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
