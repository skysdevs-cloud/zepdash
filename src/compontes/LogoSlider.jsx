"use client";

import Image from "next/image";

const logos = [
  "/image/logoSlide03.png",
  "/image/logoSlide02.png",
  "/image/logoSlide03.png",
  "/image/logoSlide04.png",
  "/image/logoSlide05.png",
  "/image/logoSlide02.png",
];

export default function LogoSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-0 sm:py-16 md:pt-36">

      {/* Gradient Fade Left */}
      <div className="
        pointer-events-none absolute left-0 top-0 h-full
        w-16 sm:w-24 md:w-32
        bg-gradient-to-r from-white to-transparent
        z-10
      " />

      {/* Gradient Fade Right */}
      <div className="
        pointer-events-none absolute right-0 top-0 h-full
        w-16 sm:w-24 md:w-32
        bg-gradient-to-l from-white to-transparent
        z-10
      " />

      {/* Track */}
      <div className="
        flex w-max
        animate-marquee
        gap-10 sm:gap-14 md:gap-20
        hover:[animation-play-state:paused]
      ">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="company logo"
              width={180}
              height={80}
              className="
                object-contain
                w-24 sm:w-32 md:w-44
                opacity-70
                transition-all duration-300
                hover:opacity-100
                hover:scale-110
                active:scale-105
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
