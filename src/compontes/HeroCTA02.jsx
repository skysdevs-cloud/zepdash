"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroCTA02() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative w-full min-h-[420px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/image/HeroCTA02Img.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex justify-center lg:justify-end">
        {/* GLASS CARD */}
        <div
          onMouseMove={handleMove}
            className="
    relative glass-card max-w-lg w-full p-10 rounded-2xl
    text-white shadow-2xl cursor-pointer
    transition-all duration-500
    hover:-translate-y-2 hover:shadow-blue-500/30

    active:-translate-y-1
    active:shadow-blue-500/40
    active:scale-[0.98]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
    focus-visible:ring-offset-2

    group
  "
        >
          {/* CURSOR GLOW */}
          <div
            className="
    pointer-events-none absolute inset-0 opacity-0
    transition duration-300
    group-hover:opacity-100
    group-active:opacity-100
  "
  style={{
    background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px,
    rgba(59,130,246,0.25), transparent 60%)`,
  }}
          />

          <h2   className="
    relative mt-6 px-6 py-3 rounded-lg bg-blue-600
    transition-all duration-300
    shadow-lg hover:shadow-blue-500/40 hover:bg-blue-500

    active:scale-95
    active:bg-blue-700

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-400
    focus-visible:ring-offset-2
  ">
            We provide truly prominent IT Solutions*
          </h2>

          <button
            className="relative mt-6 px-6 py-3 rounded-lg bg-blue-600
            hover:bg-blue-500 transition-all duration-300
            shadow-lg hover:shadow-blue-500/40"
          >
            Drop us a message
          </button>

          <p className="relative mt-6 text-sm text-white/80 leading-relaxed">
            Reach us at (10) 500 0200 or complete our contact form we’ll get
            back to you within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
