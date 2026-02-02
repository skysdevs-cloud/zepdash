"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 500, label: "Available Taxi", icon: "🚕" },
  { num: 900, label: "Happy Clients", icon: "😊" },
  { num: 700, label: "Our Drivers", icon: "🧑‍✈️" },
  { num: 1800, label: "Road Trip Done", icon: "🛣️" },
];

export default function OurAwesomeFeature() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.num;
            const duration = 2000; // animation time
            const stepTime = Math.max(Math.floor(duration / end), 10);

            const timer = setInterval(() => {
              start += Math.ceil(end / 100);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-36 text-white bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/testmonialbg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* FLOATING STATS */}
      <div className="relative max-w-6xl mx-auto px-6 -mt-52 z-20">
        <div className="bg-[#1c1c1c] rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl mb-3">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-yellow-400">
                {counts[i]}+
              </h3>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto px-6 mt-28 z-10">
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Feature
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Our Awesome Feature
          </h2>
          <div className="flex justify-center mt-4">
          <div className="heading-divider mx-auto mt-4"></div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Safety Guarantee", icon: "🛡️" },
            { title: "Fast Pickup", icon: "⚡" },
            { title: "Affordable Rate", icon: "💰" },
            { title: "24/7 Support", icon: "🎧" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-xl mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">
                There are many variations of passages majority have suffered
                alteration in some form injected humour randomised words.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TAXI STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-[linear-gradient(90deg,#000_50%,#fbbf24_50%)] bg-[length:32px_100%]" />
    </section>
  );
}
