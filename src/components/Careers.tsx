"use client";

import ArrowSvg from "./Arrow";

const Careers = () => {
  return (
    <section
      id="careers"
      className="w-full h-screen flex items-center justify-center bg-black overflow-hidden 
      bg-[url('/assets/images/bg-5.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-[60vh] px-10 md:px-40 flex flex-col md:flex-row gap-6">
        {/* Left Side - Card */}
        <div
          className="w-1/2 flex flex-col items-start justify-center 
    bg-white/20 backdrop-blur-lg px-6 py-10 text-white 
    sm:px-10 md:px-16 lg:px-20 ml-30 rounded-3xl shadow-lg overflow-hidden"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-left mb-15">
            Have Questions? <br /> Let’s Talk!
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-left max-w-xl mb-15 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Lorem ipsum dolor sit amet, consectetur.
          </p>

          <button className="bg-white/70 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-white transition">
            Get Started
          </button>
        </div>

        {/* Right Side - Two Blurred Button Boxes */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Button 1 Box */}
          <div
            className="flex-1 flex items-center justify-between 
      bg-white/20 backdrop-blur-lg rounded-3xl overflow-hidden 
      p-10 md:p-16 shadow-lg"
          >
            {/* Left Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Partnerships
            </h2>

            {/* Right Button */}
            <button className="flex items-center justify-center w-14 h-14 border-2 border-white rounded-full hover:bg-white/20 transition">
              <ArrowSvg degree={0} />
            </button>
          </div>

          {/* Button 2 Box */}
          <div
            className="flex-1 flex items-center justify-between 
      bg-white/20 backdrop-blur-lg rounded-3xl overflow-hidden 
      p-10 md:p-16 shadow-lg"
          >
            {/* Left Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Careers
            </h2>

            {/* Right Button */}
            <button className="flex items-center justify-center w-14 h-14 border-2 border-white rounded-full hover:bg-white/20 transition">
              <ArrowSvg degree={0} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
