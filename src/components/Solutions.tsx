"use client";

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="relative w-full h-[300vh] flex flex-col bg-black overflow-hidden"
    >
      {/* Subsection 1: Two viewport height */}
      <div className=" relative w-full h-[200vh] flex items-center justify-center bg-black">
        {/* Vertical gradient lines */}
        <div className="hidden md:flex absolute top-0 right-60 flex-row gap-[2px] h-full">
          <div className="w-[3px] h-1/3 bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="w-[8px] h-full flex flex-col">
            <div className="h-1/3 bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
            <div className="flex-1 bg-gray-700" />
          </div>

          <div className="w-[3px] h-1/3 bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
        </div>

        <div className=" h-full w-full p-50">
          {/* Content */}
          <div className=" z-10">
            {/* Header section */}
            <div className="flex items-start mb-16 w-full">
              {/* Heading takes remaining space */}
              <h1 className="text-4xl md:text-5xl font-bold text-white   leading-tight">
                The Science Behind Our <br />
                Innovative Solutions
              </h1>

              {/* Button aligned to the end */}
              <div className="flex justify-center item-center ml-150">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 mt-40 pr-20">
              <div className="relative p-8 md:p-12 lg:p-16 rounded-2xl border border-gray-300/20 backdrop-blur-sm aspect-square max-h-[550px] overflow-hidden flex items-center bg-[url('/assets/images/card-bg1.webp')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 text-left w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                    Synthesis
                  </h3>
                  <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua.
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    consectetur adipiscing elit. Sed do eiusmod
                    <br /> tempor incididunt ut labore et dolore magna
                    <br /> aliqua.
                  </p>
                </div>
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 rounded-2xl border border-gray-300/40 backdrop-blur-sm aspect-square max-h-[550px] overflow-hidden flex items-center bg-[url('/assets/images/card-bg2.webp')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 text-left w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                    Formulations
                  </h3>
                  <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua.
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    consectetur adipiscing elit. Sed do eiusmod
                    <br /> tempor incididunt.
                  </p>
                </div>
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 rounded-2xl border border-gray-300/40 backdrop-blur-sm aspect-square max-h-[550px] overflow-hidden flex items-center bg-[url('/assets/images/card-bg3.webp')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 text-left w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                    Diverse Materials
                  </h3>
                  <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua.
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    consectetur adipiscing elit. Sed do eiusmod
                    <br /> tempor incididunt ut labore et dolore magna
                    <br /> aliqua.
                  </p>
                </div>
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 rounded-2xl border border-gray-300/40 backdrop-blur-sm aspect-square max-h-[550px] overflow-hidden flex items-center bg-[url('/assets/images/card-bg4.webp')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 text-left w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                    Manipulation of Light
                  </h3>
                  <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua.
                    <br /> Lorem ipsum dolor sit amet.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    consectetur adipiscing elit. Sed do eiusmod
                    <br /> tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection 2: One viewport height */}
      <div className="w-full h-screen flex">
        {/* Left Side Content */}
        <div
          className="w-1/2 flex flex-col items-start justify-center bg-black px-6 py-10 text-white 
        sm:px-10 md:px-16 lg:px-20 ml-30"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-left mb-30">
            Sustainability at the heart <br />
            of Innovation
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-left max-w-xl mb-20 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition">
            Get Into Details
          </button>
        </div>

        {/* Right Side Background Image */}
        <div className="w-1/2 h-full bg-[url('/assets/images/bg-4.webp')] bg-cover bg-right bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Solutions;
