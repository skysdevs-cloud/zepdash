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

const services = [
  {
    title: "Secure Data Backup",
    desc: "Offers strategic guidance and innovative solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Solutions",
    desc: "Specializes in guiding startups through planning.",
    icon: Cloud,
  },
  {
    title: "Network Security",
    desc: "Protect systems with advanced security solutions.",
    icon: Network,
  },
  {
    title: "IT Consulting Services",
    desc: "Technology-driven consulting services.",
    icon: Briefcase,
  },
  {
    title: "Cyber Protection",
    desc: "Enterprise level cyber protection solutions.",
    icon: ShieldCheck,
  },
];

export default function ServiceSlider() {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Detect screen size
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(4); // desktop
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const next = () => {
    setStart((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setStart((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  // Circular slice
  const visibleServices = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleServices.push(
      services[(start + i) % services.length]
    );
  }

  return (
    <section className="bg-[#f3f7ff] py-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 mb-10">
        <div>
          <p className="text-blue-600 font-semibold uppercase text-sm">
            Services We Provide
          </p>
          <h2 className="text-3xl font-bold">
            We're offering best <br /> IT solutions & services
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="group w-11 h-11 border rounded-full flex items-center justify-center
                       transition-all duration-300 hover:bg-blue-600 hover:scale-110"
          >
            <ChevronLeft className="text-gray-700 group-hover:text-white" />
          </button>

          <button
            onClick={next}
            className="group w-11 h-11 border rounded-full flex items-center justify-center
                       transition-all duration-300 hover:bg-blue-600 hover:scale-110"
          >
            <ChevronRight className="text-gray-700 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        className={`max-w-6xl mx-auto grid gap-6 px-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4`}
      >
        {visibleServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl
                         transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4
                              group-hover:bg-white group-hover:border group-hover:border-blue-600">
                <Icon className="text-white group-hover:text-blue-600" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
