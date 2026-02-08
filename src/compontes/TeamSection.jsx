"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Share2, Linkedin, Twitter, Instagram } from "lucide-react";

const team = [
  { name: "Michael Davis", role: "Product designer", image: "/image/clintImg02.jpg" },
  { name: "John Smith", role: "UI/UX designer", image: "/image/clintImg03.jpg" },
  { name: "Linda Priston", role: "Influencer", image: "/image/clintImg04.jpg" },
  { name: "Sarah John", role: "Frontend Developer", image: "/image/clintImg05.jpg" },
  { name: "Sarah ", role: "Backend Developer", image: "/image/clintImg06.jpg" },
];

export default function TeamSection() {

  // ✅ RESPONSIVE VISIBLE COUNT
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);        // Mobile
      } else if (window.innerWidth < 1024) {
        setVisible(2);        // Tablet
      } else {
        setVisible(3);        // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ CLONE SLIDES
  const slides = [
    ...team.slice(-visible),
    ...team,
    ...team.slice(0, visible),
  ];

  const [index, setIndex] = useState(visible);
  const [animate, setAnimate] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // RESET WHEN VISIBLE CHANGES
  useEffect(() => {
    setIndex(visible);
  }, [visible]);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  // LOOP FIX
  useEffect(() => {
    if (index === slides.length - visible) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(visible);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - visible * 2);
      }, 700);
    }
  }, [index, slides.length, visible]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  // GLOW EFFECT
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - r.left,
      y: e.clientY - r.top,
    });
  };

  return (
    <section className="bg-[#f3f6fb] pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14">
          <p className="text-blue-600 font-semibold text-sm mb-2">✦ BEST TEAM</p>
          <h2 className="text-4xl font-bold">
            Our experienced experts for your support
          </h2>
        </div>

        {/* SLIDER */}
          <div className="overflow-hidden py-10">
            <div
              className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${(100 / visible) * index}%)`,
              }}
            >

              {slides.map((item, i) => (
                <div
                  key={i}
 className="
    px-4
    transition-all duration-300
    active:scale-[0.97]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
    focus-visible:ring-offset-2
  "                  style={{ minWidth: `${100 / visible}%` }}
                >

                  {/* CARD */}
                  <div
                    onMouseMove={handleMove}
                   className="
    group relative rounded-2xl overflow-hidden bg-white
    shadow-lg transition-all duration-500
    hover:-translate-y-3 hover:shadow-2xl

    active:-translate-y-2
    active:shadow-2xl

    cursor-pointer
  "
                  >

                    {/* GLOW */}
                    <div
                      className="
    absolute inset-0 opacity-0
    transition
    group-hover:opacity-100
    group-active:opacity-100
  "
  style={{
    background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px,
    rgba(59,130,246,0.25), transparent 60%)`,
  }}
                    />

                    {/* IMAGE */}
                    <div className="relative h-[380px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="
    object-cover transition duration-700
    group-hover:scale-110
    group-active:scale-110
  "
                      />

                      <div  className="
    absolute inset-0 bg-black/0
    group-hover:bg-black/30
    group-active:bg-black/30
    transition
  " />

                      {/* SOCIAL */}
                      <div
                        className="
    absolute right-4 top-1/2 -translate-y-1/2
    flex flex-col gap-3
    opacity-0 translate-x-6
    transition-all duration-500
    group-hover:opacity-100 group-hover:translate-x-0
    group-active:opacity-100 group-active:translate-x-0
  "
                      >
                        {[Share2, Linkedin, Twitter, Instagram].map((Icon, i) => (
                          <button
                            key={i}
                            className="
    w-11 h-11 rounded-full bg-white
    flex items-center justify-center shadow-md
    transition
    hover:bg-blue-600 hover:text-white
    active:scale-90
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
  "
                          >
                            <Icon size={18} />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* INFO */}
                    <div
                     className="
    bg-white rounded-xl p-5 absolute
    left-4 right-4 -bottom-11
    transition-all duration-500 shadow-xl
    group-hover:-bottom-6
    group-active:-bottom-6
  "
                    >
                      <p className="text-sm text-gray-500 group-hover:text-blue-500 transition">
                        {item.role}
                      </p>

                      <h3
                        className="font-semibold text-lg
                        bg-gradient-to-r from-slate-900 to-slate-900
                        bg-clip-text text-transparent
                        group-hover:from-blue-500 group-hover:to-cyan-400
                        transition-all duration-500"
                      >
                        {item.name}
                      </h3>

                      <div
                        className="h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400
                        group-hover:w-16 transition-all duration-500"
                      />
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

      </div>
    </section>
  );
}
