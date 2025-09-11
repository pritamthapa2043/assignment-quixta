"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons for Menu & Close
import ArrowSvg from "./Arrow";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl hover:text-gray-300 cursor-pointer">LOGO</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        <a href="#whoWeAre" className="hover:text-gray-300">
          Who We Are
        </a>
        <a href="#technology" className="hover:text-gray-300">
          Technology
        </a>
        <a href="#solutions" className="hover:text-gray-300">
          Solutions
        </a>
        <a href="#newsroom" className="hover:text-gray-300">
          Newsroom
        </a>
        <a href="#careers" className="hover:text-gray-300">
          Careers
        </a>
      </div>

      {/* Desktop Button */}
      <button className="hidden md:flex items-center justify-center border border-white text-white px-5 py-3 rounded-2xl hover:text-gray-300 transition space-x-2">
        <span>Get Started</span>
        <ArrowSvg degree={315} />
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 space-y-6 md:hidden shadow-lg">
          <a
            href="#whoWeAre"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Who We Are
          </a>
          <a
            href="#technology"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Technology
          </a>
          <a
            href="#solutions"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#newsroom"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Newsroom
          </a>
          <a
            href="#careers"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </a>

          {/* Mobile Button */}
          <button className="flex items-center justify-center border border-white text-white px-5 py-3 rounded-2xl hover:text-gray-300 transition space-x-2">
            <span>Get Started</span>
            <ArrowSvg degree={315} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
