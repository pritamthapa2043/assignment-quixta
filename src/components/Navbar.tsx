"use client";

import ArrowSvg from "./Arrow";

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed  px-6 py-4 flex items-center shadow-md top-0 left-0 right-0 z-50">
      {/* Logo */}
      <h1 className="text-3xl ml-30 hover:text-gray-300">LOGO</h1>

      <div className="flex gap-6 ml-110">
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
      <button className="flex items-center justify-center border border-white text-white ml-80 px-5 py-3 rounded-2xl hover:text-gray-300 transition space-x-2">
        <span>Get Started</span>
        <ArrowSvg degree={315} />
      </button>
    </nav>
  );
};

export default Navbar;
