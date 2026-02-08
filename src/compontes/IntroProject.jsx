"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Cloud computing",
    tag: "Branding, Development",
    image: "/image/cloudImg.webp",
  },
  {
    title: "Innovative technology",
    tag: "Business, Design, Development",
    image: "/image/digitalInnovation.jpg",
  },
  {
    title: "Digital innovators",
    tag: "Agency",
    image: "/image/inovationImg.jpg",
  },
  { title: "Startup solutions", tag: "Agency", image: "/image/cloudImg.webp" },
  {
    title: "Smart systems",
    tag: "Technology",
    image: "/image/digitalInnovation.jpg",
  },
];

export default function IntroProject() {
  // ✅ RESPONSIVE VISIBLE COUNT
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // RESET INDEX WHEN SCREEN CHANGES
  useEffect(() => {
    setIndex(0);
  }, [visible]);

  const next = () => {
    if (index < projects.length - visible) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="bg-[#f4f7fb] pt-24 overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-12">
        <div>
          <p className="text-blue-600 text-sm font-semibold mb-2">
            OUR PROJECTS
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Featured{" "}
            <span className="underline decoration-blue-500">projects</span>{" "}
            we’re <br />
            proud to share
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-disabled={index === 0}
            className={`
      navBtn
      ${index === 0 ? "navDisabled" : "cursor-pointer"}

      transition-all duration-300
      active:scale-95
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-blue-500
      focus-visible:ring-offset-2
    `}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            disabled={index >= projects.length - visible}
            aria-disabled={index >= projects.length - visible}
            className={`
      navBtn
      ${index >= projects.length - visible ? "navDisabled" : "cursor-pointer"}

      transition-all duration-300
      active:scale-95
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-blue-500
      focus-visible:ring-offset-2
    `}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-5">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visible) * index}%)`,
          }}
        >
          {projects.map((item, i) => (
            <div
              key={i}
 className="
    cursor-pointer px-4
    transition-all duration-300
    active:scale-[0.97]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
    focus-visible:ring-offset-2
  "              style={{ minWidth: `${100 / visible}%` }}
            >
              <div   className="
    projectCard magnetic
    transition-all duration-300
    group
  ">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
    object-cover cardImage
    transition-transform duration-500
    group-hover:scale-110
    group-active:scale-110
  "
                  />
                  <div  className="
    cardOverlay
    transition-opacity duration-500
    group-hover:opacity-100
    group-active:opacity-100
  "></div>
                </div>

                {/* Content */}
                <div className="
    p-5 relative z-10
    text-center sm:text-left
    transition-colors duration-300
    group-hover:text-blue-400
    group-active:text-blue-400
  ">
                  <span className="tag">{item.tag}</span>
                  <h3 className="title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div
        className="relative bg-linear-to-r from-[#020b2d] via-[#031a5a] to-[#032f9b]
        -mt-32 pt-48 pb-20 overflow-hidden z-10"
      >
        {/* Top Curve */}
        <div className="absolute -top-24 left-0 w-full h-24 bg-[#f4f7fb] rounded-b-[100%]" />

        {/* Soft Glow */}
        <div className="absolute inset-0">
          <Image
            src="/image/clintImgBack01.png"
            alt="background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="group text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-6 transition-all duration-500 group-hover:tracking-wide">
              Your one-stop IT partner for <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                business growth!
              </span>
            </h2>

            <div className="flex gap-6 justify-center lg:justify-start text-gray-300 text-sm">
              {["✔ Support 24/7", "✔ Fast process", "✔ Product vision"].map(
                (item, i) => (
                  <p
                    key={i}
                    className="transition duration-300 hover:text-white hover:scale-105"
                  >
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>

          {/* RIGHT GLASS */}
         <div
  tabIndex={0}
  className="
    group relative
    bg-white/10 backdrop-blur-xl
    rounded-2xl p-5 flex items-center gap-4 text-white
    shadow-xl transition-all duration-500
    hover:-translate-y-2 hover:shadow-blue-500/40

    active:scale-[0.97]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-cyan-400
    focus-visible:ring-offset-2 focus-visible:ring-offset-transparent

    cursor-pointer
  "
>
  {/* Glow background */}
  <div
    className="
      absolute inset-0 rounded-2xl
      bg-linear-to-r from-blue-500/40 to-cyan-400/40
      opacity-0 blur-xl transition
      group-hover:opacity-100
      group-active:opacity-100
    "
  ></div>

  {/* Image */}
  <div
    className="
      relative w-16 h-16 rounded-xl overflow-hidden
      ring-2 ring-white/20 transition
      group-hover:ring-blue-400
      group-active:ring-blue-400
    "
  >
    <Image
      src="/image/clintImg01.jpg"
      alt="client"
      fill
      className="
        object-cover transition duration-500
        group-hover:scale-110
        group-active:scale-110
      "
    />
  </div>

  {/* Content */}
  <div className="relative">
    <div className="text-yellow-400 tracking-wider">★★★★★</div>

    <p
      className="
        font-semibold transition
        group-hover:text-blue-300
        group-active:text-blue-300
      "
    >
      100% Client Satisfaction
    </p>

    {/* Button */}
    <button
      className="
        relative mt-2 px-5 py-1.5 rounded-full text-sm
        bg-blue-600 overflow-hidden
        transition-all duration-500
        hover:bg-blue-700 hover:scale-105
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/70
      "
    >
      <span className="relative z-10">+91 6307 764 702</span>

      <span
        className="
          absolute inset-0
          bg-linear-to-r from-transparent via-white/40 to-transparent
          -translate-x-full
          hover:translate-x-full
          active:translate-x-full
          transition-transform duration-700
        "
      ></span>
    </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
