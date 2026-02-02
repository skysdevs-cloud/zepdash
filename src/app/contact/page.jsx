import Contact01 from "@/compontes/Contact01";
import GetInTouch from "@/compontes/GetInTouch";
import MapSection from "@/compontes/MapSection";
import Link from "next/link";

const ContectIntroHome = () => {
  return (
    <div className="contain-content">
    <section className="relative w-full h-80 md:h-105 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Abouttaxi01.jpg')", // replace with your image path
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
          Contect Us
        </h1>

        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link
            href="/"
            className="text-white/80 hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <span className="text-yellow-400">»</span>
          <span className="text-yellow-400 font-medium">Contect Us</span>
        </div>
      </div>
    </section>
    <Contact01/>
    <GetInTouch/>
    <MapSection/>
    </div>
  );
};

export default ContectIntroHome;
