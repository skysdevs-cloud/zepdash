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
          partner in{" "}
          <span className="text-blue-500">IT Services*</span>
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
        <div className="flex gap-4 mt-10 flex-wrap justify-center md:justify-start">
          <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all">
            View all services
          </button>

          <button className="px-6 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all">
            Request an estimate
          </button>
        </div>
      </div>
    </section>
  );
}
