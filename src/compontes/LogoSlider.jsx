"use client";

import Image from "next/image";

const logos = [
  "/image/logoSlide01.png",
  "/image/logoSlide01.png",
  "/image/logoSlide01.png",
  "/image/logoSlide01.png",
  "/image/logoSlide01.png",
  "/image/logoSlide01.png",
];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-white py-10 pt-40">
      <div className="relative flex">

        {/* Track */}
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">

          {/* First Set */}
          {logos.map((logo, i) => (
            <div key={i} className="mx-12 flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={320}
                height={100}
                className="opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* Duplicate Set (for seamless loop) */}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="mx-12 flex items-center">
              <Image
                src={logo}
                alt="logo"
               width={320}
height={100}

                className="opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
