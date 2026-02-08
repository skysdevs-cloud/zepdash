"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";

const slides = [
  {
    tag: "Technology-Driven Solution",
    title: "Driving Business",
    highlight: "Through Innovation",
    desc: "We deliver modern IT solutions that help businesses grow, scale, and stay ahead in the digital era.",
    points: [
      "Custom Software Development",
      "Scalable IT Infrastructure",
      "Business Growth Solutions",
    ],
    image: "/image/SliderImg01.png",
  },
  {
    tag: "Cyber Security Solution",
    title: "Protecting Your",
    highlight: "Digital Assets",
    desc: "Advanced cybersecurity services designed to secure your data, systems, and business operations.",
    points: [
      "Network & Data Protection",
      "Threat Detection & Prevention",
      "Compliance & Risk Management",
    ],
    image: "/image/SliderImg02.png",
  },
  {
    tag: "Cloud & IT Services",
    title: "Powerful & Secure",
    highlight: "Cloud Solutions",
    desc: "Flexible cloud solutions that improve performance, reduce cost, and ensure business continuity.",
    points: [
      "Cloud Migration Services",
      "High Availability Systems",
      "24/7 Monitoring & Support",
    ],
    image: "/image/SliderImg03.png",
  },
];

export default function SlidrBox() {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  /* AUTO SLIDE */
  useEffect(() => {
    if (hover) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hover]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[105vh] font-[Poppins]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ================= SLIDES ================= */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt="slide"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a44] via-[#0a2a66] to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36">
            <div
              className={`grid gap-10 items-center ${
                current === 2 ? "md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <p className="text-blue-300 uppercase tracking-widest text-xs sm:text-sm mb-4 text-center md:text-left">
                  {slide.tag}
                </p>

                <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
                  {slide.title} <br />
                  <span className="text-blue-400">{slide.highlight}</span>
                </h1>

                <div className="w-20 sm:w-24 h-[2px] bg-blue-400 my-6 mx-auto md:mx-0" />

                <p className="text-gray-200 text-sm sm:text-base max-w-xl mb-6 text-center md:text-left">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center md:items-start">
                  <ul className="space-y-3">
                    {slide.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center md:justify-start gap-3 text-gray-100 text-sm sm:text-base"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>

              <button
  className="
    group relative overflow-hidden
    px-8 sm:px-10 py-3.5 sm:py-4
    rounded-full
    bg-gradient-to-r from-blue-600 to-cyan-500
    text-white font-medium
    shadow-lg shadow-blue-500/40
    transition-all duration-300
    hover:scale-105
    active:scale-95
    cursor-pointer
  "
>
  {/* Shine Effect */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      -translate-x-full
      group-hover:translate-x-full
      group-active:translate-x-full
      transition-transform duration-700
    "
  />

  {/* Text */}
  <span className="relative z-10">Talk with expert</span>
</button>

                </div>
              </div>

              {/* RIGHT FORM – ONLY SLIDE 3 */}
              {/* RIGHT FORM – ONLY SLIDE 3 (HIDDEN ON MOBILE) */}
              {current === 2 && (
                <div
                  className="
      hidden md:block w-full max-w-md
      relative
      bg-white/10 backdrop-blur-2xl
      border border-white/20
      rounded-2xl p-6
      shadow-2xl shadow-blue-900/40
      overflow-hidden
    "
                >
                  {/* Glow Border */}
                  <div
                    className="
        absolute inset-0 rounded-2xl
        bg-gradient-to-br from-blue-500/30 to-cyan-400/30
        opacity-20 blur-xl
      "
                  />

                  <h3 className="relative text-xl font-semibold mb-5 text-white">
                    Inquiry Form
                  </h3>

                  <form className="relative space-y-4">
                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
          w-full bg-white/5
          border border-white/20
          text-white placeholder-gray-300
          rounded-lg px-4 py-2.5 text-sm
          focus:outline-none
          focus:border-blue-400
          focus:ring-2 focus:ring-blue-500/30
          transition
        "
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
          w-full bg-white/5
          border border-white/20
          text-white placeholder-gray-300
          rounded-lg px-4 py-2.5 text-sm
          focus:outline-none
          focus:border-blue-400
          focus:ring-2 focus:ring-blue-500/30
          transition
        "
                    />

                    <textarea
                      rows="3"
                      placeholder="Your Message"
                      className="
          w-full bg-white/5
          border border-white/20
          text-white placeholder-gray-300
          rounded-lg px-4 py-2.5 text-sm
          resize-none
          focus:outline-none
          focus:border-blue-400
          focus:ring-2 focus:ring-blue-500/30
          transition
        "
                    />

                    {/* Button */}
<button
  type="submit"
  className="
    group relative overflow-hidden
    w-full py-3
    rounded-full
    bg-gradient-to-r from-blue-600 to-cyan-500
    text-white text-sm font-medium
    shadow-lg shadow-blue-500/40
    transition-all duration-300
    hover:scale-[1.03]
    active:scale-95
    cursor-pointer
  "
>
  {/* Shine Effect */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      -translate-x-full
      group-hover:translate-x-full
      group-active:translate-x-full
      transition-transform duration-700
    "
  />

  {/* Text */}
  <span className="relative z-10">Send Inquiry</span>
</button>


                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* ================= ARROWS ================= */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-40 opacity-100 md:opacity-0 md:hover:opacity-100"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-40 opacity-100 md:opacity-0 md:hover:opacity-100"
      >
        <ChevronRight />
      </button>

      {/* ================= FLOATING CARDS ================= */}
      {/* ================= FLOATING CARDS ================= */}
      <div className="hidden md:block absolute -bottom-28 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<ShieldCheck />}
            title="Trusted services"
            desc="Providing trusted IT services with a proven track record."
          />

          <Card
            icon={<Users />}
            title="Dedicated members"
            desc="Driven by a team of dedicated professionals."
          />

          <Card
            icon={<Award />}
            title="18+ Year experience"
            desc="Delivering reliable IT services backed by years."
          />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ icon, title, desc }) {
  return (
    <div
      className="
        group relative
        bg-white rounded-2xl p-6
        shadow-lg
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-2xl hover:shadow-blue-500/30
        overflow-hidden cursor-pointer
      "
    >
      {/* Top Right Border Accent */}
      <span
        className="
          absolute top-0 right-0
          w-0 h-[3px]
          bg-gradient-to-r from-blue-500 to-cyan-400
          transition-all duration-500
          group-hover:w-full
        "
      />
      <span
        className="
          absolute top-0 right-0
          w-[3px] h-0
          bg-gradient-to-b from-blue-500 to-cyan-400
          transition-all duration-500
          group-hover:h-full
        "
      />

      {/* Soft Shine */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-blue-500/10 to-cyan-400/10
          opacity-0 group-hover:opacity-100
          transition duration-500
        "
      />

      {/* Icon */}
      <div
        className="
          relative z-10
          w-14 h-14
          bg-gradient-to-br from-blue-600 to-cyan-500
          rounded-xl
          flex items-center justify-center
          text-white
          mb-4
          transition-transform duration-500
          group-hover:scale-110 group-hover:rotate-3
          shadow-lg shadow-blue-500/40
        "
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
