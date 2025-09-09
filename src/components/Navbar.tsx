"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-xl px-20 hover:text-gray-300">
        LOGO
      </Link>

      <div className="flex gap-6">
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
        <button className="hover:text-gray-300">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
