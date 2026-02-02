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

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section
      className="relative min-h-[109vh]"
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
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a44] via-[#0a2a66] to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
            <div
              className={`grid gap-10 items-start ${
                current === 2 ? "md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {/* LEFT CONTENT */}
             <div>
  {/* TAG */}
  <p className="text-blue-300 uppercase tracking-widest text-sm mb-4">
    {slide.tag}
  </p>

  {/* HEADING */}
  <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
    {slide.title} <br />
    <span className="text-blue-400">{slide.highlight}</span>
  </h1>

  {/* LINE */}
  <div className="w-24 h-[2px] bg-blue-400 my-6" />

  {/* DESCRIPTION */}
  <p className="text-gray-200 max-w-xl mb-6">
    {slide.desc}
  </p>
<div className="flex gap-8 items-center">

  {/* FEATURE POINTS */}
  <ul className="space-y-3 mb-8">
    {slide.points.map((point, i) => (
      <li key={i} className="flex items-center gap-3 text-gray-100">
        <span className="w-2 h-2 bg-blue-400 rounded-full" />
        {point}
      </li>
    ))}
  </ul>

  {/* CTA */}
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition cursor-pointer">
    Talk with expert
  </button>
</div>
</div>


              {/* RIGHT FORM – ONLY SLIDE 3 */}
                {current === 2 && (
                <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-xl hover:shadow-2xl transition">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Inquiry Form
                  </h3>

                  <form className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition"
                    />

                    <textarea
                      rows="3"
                      placeholder="Your Message"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] text-white py-2 rounded-md text-sm transition-all"
                    >
                      Send Inquiry
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
        className={`absolute left-6 top-1/2 -translate-y-1/2 
        bg-black/40 text-white p-3 rounded-full transition z-40 cursor-pointer
        ${hover ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-6 top-1/2 -translate-y-1/2 
        bg-black/40 text-white p-3 rounded-full transition z-40 cursor-pointer
        ${hover ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronRight />
      </button>

      {/* ================= FLOATING CARDS ================= */}
      <div className="absolute -bottom-28 left-0 w-full z-50">
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
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition">
      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
}
