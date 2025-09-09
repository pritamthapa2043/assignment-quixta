"use client";
import Image from "next/image";

const LogoCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-[120px] sm:w-[140px] md:w-[160px] h-[120px] sm:h-[140px] md:h-[160px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] bg-gray-900/30 flex items-center justify-center mx-auto">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="sm:w-[90px] md:w-[100px]"
      />
    </div>
  );
};

const Technology = () => {
  return (
    <section
      id="technology"
      className="relative w-full h-[300vh] flex flex-col bg-black overflow-hidden"
    >
      {/* Subsection 1 */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Vertical gradient lines */}
        <div className="hidden md:flex absolute top-0 left-100 flex-row gap-[2px] h-full">
          <div className="w-[3px] h-1/2 bg-gradient-to-b from-[#ff6b35] via-[#f7931e] via-[#c724b1] via-[#9333ea] to-[#6366f1]" />
          <div className="w-[8px] h-full flex flex-col">
            <div className="h-1/2 bg-gradient-to-b from-[#ff6b35] via-[#f7931e] via-[#c724b1] via-[#9333ea] to-[#6366f1]" />
            <div className="h-1/2 bg-gray-700" />
          </div>
          <div className="w-[3px] h-1/2 bg-gradient-to-b from-[#ff6b35] via-[#f7931e] via-[#c724b1] via-[#9333ea] to-[#6366f1]" />
        </div>

        {/* Main container */}
        <div className="flex flex-col  w-full md:w-4/5 lg:w-3/4 h-full space-y-10 md:space-y-16 pl-6 md:pl-40 lg:pl-100 py-10">
          {/* Text content */}
          <div className="text-left space-y-2 mt-30">
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              Lorem ipsum dolor sit amet,
            </p>
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              consectetur adipiscing elit. Sed do
            </p>
            <p className="text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              eiusmod sectetur adipiscing elit.
            </p>
            <p className="text-white/60 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              Sed do eiusmod tempor
            </p>
            <p className="text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              incididunt ut labore et Lorem
            </p>
            <p className="text-white/20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              ipsum dolor sit amet.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] w-max mt-15  ">
            <LogoCard src="/assets/svg/Svg1.svg" alt="Logo 1" />
            <LogoCard src="/assets/svg/Svg1.svg" alt="Logo 1" />
            <LogoCard src="/assets/svg/Svg1.svg" alt="Logo 1" />
            <LogoCard src="/assets/svg/Svg1.svg" alt="Logo 1" />
          </div>
        </div>
      </div>

      {/* Subsection 2 */}
      <div className="w-full h-screen flex items-center justify-center bg-[url('/assets/images/bg-2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="w-11/12 md:w-3/4 lg:w-3/4 h-[70vh] flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-lg ">
          {/* Big Heading with line break */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Our Journey Towards <br /> Innovation and Excellence
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base md:text-lg max-w-4xl mx-auto mt-20">
            Brand is an advanced luminescent materials company, <br />
            leveraging synergies of cutting-edge chemistries to deliver <br />
            solutions, not just products. About Brand
          </p>

          {/* Button */}
          <button className="bg-white/70 text-gray-900 font-semibold mt-20 px-6 py-3 rounded-2xl shadow-md hover:bg-white transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Subsection 3 */}
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Subsection 3</h2>
      </div>
    </section>
  );
};

export default Technology;
