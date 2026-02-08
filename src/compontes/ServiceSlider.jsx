"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cloud,
  Network,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const baseServices = [
  {
    title: "Secure Data Backup",
    desc: "Reliable and encrypted backup solutions to protect your business data.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud services designed for modern startups and enterprises.",
    icon: Cloud,
  },
  {
    title: "Network Security",
    desc: "Advanced security layers to safeguard your network infrastructure.",
    icon: Network,
  },
  {
    title: "IT Consulting",
    desc: "Strategic IT consulting to drive business transformation.",
    icon: Briefcase,
  },
  {
    title: "Cyber Protection",
    desc: "Enterprise-grade cyber defense against modern threats.",
    icon: ShieldCheck,
  },
];

/* 🔥 Repeat data to create true infinite feel */
const services = Array.from({ length: 20 }, () => baseServices).flat();

/* ---------------- COMPONENT ---------------- */

export default function ServiceSlider() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(baseServices.length); // start from middle

  /* Responsive visible count */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  return (
    <section className="bg-[#f3f7ff] pt-20 overflow-hidden">
      {/* ---------------- Header ---------------- */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 mb-10">
        <div>
          <p className="text-blue-600 font-semibold uppercase text-sm">
            Services We Provide
          </p>
          <h2 className="text-3xl font-bold">
            We're offering best <br /> IT solutions & services
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
        <button
  onClick={prev}
  className="
    group w-11 h-11 rounded-full bg-white
    flex items-center justify-center
    cursor-pointer
    transition-all duration-300
    hover:bg-blue-600 hover:scale-110
    hover:shadow-lg hover:shadow-blue-500/40
    active:scale-95
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
  "
>
  <ChevronLeft className="text-gray-700 group-hover:text-white transition" />
</button>


          <button
            onClick={next}
            className="
    group w-11 h-11 rounded-full bg-white
    flex items-center justify-center
    cursor-pointer
    transition-all duration-300
    hover:bg-blue-600 hover:scale-110
    hover:shadow-lg hover:shadow-blue-500/40
    active:scale-95
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
  "
          >
            <ChevronRight className="text-gray-700 group-hover:text-white transition" />
          </button>
        </div>
      </div>

      {/* ---------------- Slider ---------------- */}
      <div className="max-w-6xl mx-auto overflow-hidden px-4  py-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{ minWidth: `${100 / visible}%` }}
                className="px-3"
              >
                {/* Card */}
                <div
                   className="
    group relative h-full
    bg-white p-6 rounded-2xl
    shadow-md hover:shadow-2xl
    transition-all duration-300
    hover:-translate-y-3
    active:scale-[0.97]
    cursor-pointer
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-blue-500/20 to-cyan-400/20
                      opacity-0 group-hover:opacity-100
                      blur-xl transition
                    "
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="
                        w-12 h-12 mb-4
                        flex items-center justify-center
                        rounded-lg bg-blue-600
                        group-hover:bg-white
                        group-hover:border group-hover:border-blue-600
                        transition
                      "
                    >
                      <Icon className="text-white group-hover:text-blue-600 transition" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
