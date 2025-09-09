"use client";

const WhoWeAre = () => {
  return (
    <section
      id="whoWeAre"
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden text-white px-6
      bg-[url('/assets/images/whoweare-bg.webp')] bg-contain bg-center bg-no-repeat"
    >
      {/* Big Heading with line break */}
      <h1 className="text-5xl md:text-8xl font-extrabold text-center mt-30 mb-30 leading-tight">
        Future of Advanced <br /> Materials
      </h1>

      {/* Subtitle / Description */}
      <p className="text-base md:text-lg text-center max-w-2xl mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Button */}
      <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
};

export default WhoWeAre;
