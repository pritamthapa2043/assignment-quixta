"use client";

const WhoWeAre = () => {
  return (
    <section
      id="whoWeAre"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden text-white px-4 sm:px-6 md:px-12
      bg-[url('/assets/images/whoweare-bg.webp')] bg-cover bg-center"
    >
      {/* Big Heading with line break */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center mt-16 md:mt-24 mb-8 md:mb-12 leading-tight">
        Future of Advanced <br className="hidden sm:block" /> Materials
      </h1>

      {/* Subtitle / Description */}
      <p className="text-sm sm:text-base md:text-lg text-center max-w-lg md:max-w-2xl mb-8 md:mb-12 px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Button */}
      <button className="bg-white text-gray-900 font-semibold px-5 sm:px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition text-sm sm:text-base">
        Get Started
      </button>
    </section>
  );
};

export default WhoWeAre;
