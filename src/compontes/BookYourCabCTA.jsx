"use client";

import SpotlightButton from "./SpotlightButton";

export default function BookYourCabCTA() {
  return (
    <section className="relative bg-yellow-500 overflow-hidden">
      
      {/* Top Taxi Border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[linear-gradient(90deg,#000_50%,#fbbf24_50%)] bg-size-[32px_100%]" />

      {/* Bottom Taxi Border */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[linear-gradient(90deg,#000_50%,#fbbf24_50%)] bg-size-[32px_100%]" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Book Your Cab It's <br />
              Simple And <br />
              Affordable
            </h2>

            <p className="text-white/90 mt-6 max-w-xl">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout
              point of using is that it has normal distribution of letters.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-end">

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-white/40"></div>

            {/* Phone */}
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-xl">
                🎧
              </div>
              <span className="text-xl font-semibold tracking-wide">
                +2 123 654 7898
              </span>
            </div>

            {/* Button */}


 <SpotlightButton
                  text="  BOOK YOUR CAB →"
                  // href="/book"
                  bgColor="bg-black"
                  hoverBgColor="hover:bg-white"
                  textColor="text-white"
                  hoverTextColor="hover:text-black"
                />
          </div>
        </div>
      </div>
    </section>
  );
}
