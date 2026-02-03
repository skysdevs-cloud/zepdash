"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Choosing this startup was the best decision for our growth. Their expertise and personalized approach exceeded our expectations.",
    name: "Hardik Shah",
    role: "Product Manager",
    avatar: "/image/testImg01.jpg",
  },
  {
    text: "An amazing team delivering exceptional results. Their solutions are modern, scalable, and reliable.",
    name: "Isabella Roberts",
    role: "Tech Lead",
    avatar: "/image/testImg02.jpg",
  },
  {
    text: "I had the opportunity to experience a demo of these marketing tools, and I’m genuinely impressed. Seamless experience!",
    name: "Daniel Richard",
    role: "CEO, TechNova",
    avatar: "/image/testImg03.jpg",
  },
  {
    text: "Working with this team was a game-changer. Innovative solutions and excellent support throughout.",
    name: "Jessica Senior",
    role: "UI/UX Designer",
    avatar: "/image/testImg04.jpg",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SLIDE (MOBILE)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/image/testM.jpg"
        alt="Testimonials Background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-300 text-sm mb-2 uppercase tracking-wider">
            Who we are
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Innovating with technology <br /> building with trust
          </h2>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block md:hidden">
          <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-500">
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              “{testimonials[activeIndex].text}”
            </p>

            <div className="flex items-center gap-3">
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs text-gray-500">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeIndex ? "bg-blue-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
