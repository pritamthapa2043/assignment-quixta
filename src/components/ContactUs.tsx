"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 lg:px-40 h-[70vh] flex flex-col justify-between py-10">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center border-b border-gray-700 pb-12 mt-20">
        {/* Left - Logo */}
        <h2 className="text-5xl font-bold tracking-wide ml-10 flex-1">LOGO</h2>

        {/* Right - Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 text-3xl flex-1">
          <p className="hover:text-gray-300 cursor-pointer">info@brand.com</p>
          <p className="hover:text-gray-300 cursor-pointer ml-45">
            +65 8808 2159
          </p>
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex w-full py-15 border-b border-gray-800 flex-1 gap-8">
        {/* Left - Description & Social */}
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-col gap-4">
            <p className="max-w-xs leading-relaxed">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elitctetur <br /> adipiscing elit.
            </p>
            <div className="flex gap-3 mt-15">
              <p className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md hover:bg-gray-600 transition cursor-pointer">
                <FaFacebookF />
              </p>
              <p className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md hover:bg-gray-600 transition cursor-pointer">
                <FaTwitter />
              </p>
              <p className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-md hover:bg-gray-600 transition cursor-pointer">
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>

        {/* Right - Solutions, Quick Links, Who We Are */}
        <div className="w-1/2 flex gap-8">
          {/* Solutions */}
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <p className="text-white/100">Reyal</p>
            <p className="text-white/70">Luminicell</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-semibold text-lg">Quick links</h3>
            <p className="text-white/100">Get Started</p>
            <p className="text-white/80">Technology</p>
            <p className="text-white/60">Newsroom</p>
            <p className="text-white/40">Careers</p>
          </div>

          {/* Who We Are */}
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-semibold text-lg">Who are We</h3>
            <p className="text-white/100">Brand at a Glance</p>
            <p className="text-white/80">Mission & Vision</p>
            <p className="text-white/60">Our Team</p>
            <p className="text-white/40">Partnerships</p>
            <p className="text-white/40">Sustainability & Social Impact</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center text-sm pt-6 gap-4 w-full">
        {/* Left */}
        <div className="flex-1">
          <p>© 2025 Brand. All rights reserved.</p>
        </div>

        {/* Right - three columns inside half width */}
        <div className="w-1/2 flex gap-8">
          {/* First column */}
          <div className="flex flex-col gap-3 flex-1 justify-center">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-3 flex-1 justify-center">
            <a href="#" className="hover:text-gray-300">
              Cookies
            </a>
          </div>

          {/* Third column */}
          <div className="flex flex-col gap-3 flex-1 justify-center">
            <p className="hover:text-gray-300">
              Designed and Powered by{" "}
              <span className="font-semibold">Quixta.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
