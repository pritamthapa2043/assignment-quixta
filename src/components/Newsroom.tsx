"use client";

const Newsroom = () => {
  return (
    <section
      id="newsroom"
      className="relative w-full h-[200vh] bg-black overflow-hidden"
    >
      {/* Vertical gradient lines */}
      <div>
        <div className="hidden md:flex absolute top-0 right-60 flex-row gap-[2px] h-full">
          <div className="w-[3px] h-[10%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="w-[8px] h-[10%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="w-[3px] h-[10%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
        </div>
        <div className="hidden md:flex absolute top-40 right-60 flex-col gap-[4px] w-[75%]">
          <div className="h-[3px] w-full bg-gradient-to-r from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="h-[8px] w-full bg-gradient-to-r from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="h-[3px] w-full bg-gradient-to-r from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
        </div>
        <div className="hidden md:flex absolute top-40 left-55 flex-row gap-[2px] h-full">
          <div className="w-[3px] h-[95%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="w-[8px] h-[95%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />

          <div className="w-[3px] h-[95%] bg-gradient-to-b from-[#ff6b35] via-[#9333ea] to-[#6366f1]" />
        </div>
      </div>

      {/* Bottom-right container with even more width */}
      <div className="absolute top-100 right-60 w-[800px] h-[1200px] flex flex-col items-end gap-10">
        {/* Header Section */}
        <div className="w-full text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-20">
            What’s New at Brand
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-10 gap-y-12 w-full h-full">
          {/* Card 1 */}
          <div className="bg-black border border-gray-700 rounded-2xl w-full h-full p-8 flex flex-col justify-between bg-[url('/assets/images/bg-6.webp')] bg-cover bg-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-15 leading-snug">
                Brand Unveils Breakthrough in Product Authentication Technology
              </h3>
              <p className="text-gray-300 text-sm mb-15">March 08, 2025</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <button className="px-5 py-2 w-fit rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl w-full h-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-15 leading-snug">
                LumiLab – Exploring the science and innovation behind
                luminescent materials.
              </h3>
              <p className="text-gray-300 text-sm mb-15">March 08, 2025</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <button className="px-5 py-2 w-fit rounded-lg bg-black text-white border border-gray-600 hover:bg-gray-900 transition">
              Read More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl w-full h-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-15 leading-snug">
                The Glow Factor – Trends, discoveries, and applications in
                photonic materials.
              </h3>
              <p className="text-gray-300 text-sm mb-15">March 08, 2025</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <button className="px-5 py-2 w-fit rounded-lg bg-black text-white border border-gray-600 hover:bg-gray-900 transition">
              Read More
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0c0c] border border-gray-700 rounded-2xl w-full h-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-15 leading-snug">
                Brand Unveils Breakthrough in Product Authentication Technology
              </h3>
              <p className="text-gray-300 text-sm mb-15">March 08, 2025</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <button className="px-5 py-2 w-fit rounded-lg bg-black text-white border border-gray-600 hover:bg-gray-900 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
