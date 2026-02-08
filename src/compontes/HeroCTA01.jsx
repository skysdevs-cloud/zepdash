import Image from "next/image";
import { Settings, Clock, TrendingUp } from "lucide-react";

export default function HeroCTA01() {
  return (
    <section className="relative py-10 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/row-bgimage-1.png"
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/70 to-black/60" />

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto h-full
                   flex flex-col justify-center
                   px-6 text-white
                   text-center md:text-left
                   items-center md:items-start"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Navigating success your trusted <br />
          partner in <span className="text-blue-500">IT Services*</span>
        </h1>

        {/* Features */}
        <div className="flex flex-wrap gap-8 mt-8 justify-center md:justify-start">
          {[
            { text: "From the ground up", icon: Settings },
            { text: "Around-the-clock assistance", icon: Clock },
            { text: "Improved performance", icon: TrendingUp },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-white/10
                             flex items-center justify-center
                             transition-all duration-300
                             group-hover:bg-blue-600 group-hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <span className="text-sm group-hover:text-blue-400 transition-colors">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
<div className="flex gap-5 mt-10 flex-wrap justify-center md:justify-start">

  {/* PRIMARY */}
  <button
    className="
      group relative
      px-10 py-3.5
      rounded-full
      text-white font-medium
      bg-gradient-to-r from-blue-600 to-cyan-500
      shadow-lg shadow-blue-500/40
      overflow-hidden
      transition-all duration-500
      hover:scale-110
      active:scale-[0.96]
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-cyan-400
      focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
      cursor-pointer
    "
  >
    <span className="relative z-10">View all services</span>

    {/* Shine */}
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
  </button>

  {/* SECONDARY (GLASS) */}
  <button
    className="
      group relative
      px-8 py-3.5
      rounded-full
      text-white font-medium
      border border-white/30
      bg-white/10 backdrop-blur-lg
      shadow-lg
      overflow-hidden
      transition-all duration-500
      hover:scale-110
      active:scale-[0.96]
      hover:border-blue-400
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-blue-400
      focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
      cursor-pointer
    "
  >
    <span className="relative z-10">Request an estimate</span>

    {/* Glow */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-blue-500/30 to-cyan-400/30
        opacity-0
        group-hover:opacity-100
        group-active:opacity-100
        transition
      "
    />
  </button>

</div>

      </div>
    </section>
  );
}
