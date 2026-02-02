"use client";
import { Scale } from "lucide-react";
import Image from "next/image";
import SpotlightButton from "./SpotlightButton";

const AboutIntro = () => {
  return (
    <section className="w-full bg-white pt-60 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-center">
          {/* Badge */}
          <div className="absolute -top-6 left-4 z-20 bg-black text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <span className="bg-yellow-400 p-2 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold">
              <Image
              src="/Images/taxi-booking.svg"
              alt="Agrotech Logo"
              width={30}
              height={30}
              priority
            className="relative z-10 w-full max-w-md"
            style={{
              transform:'Scale(1.3)'
            }}
            /> 
            </span>
            <span className="text-sm font-medium">
            30+  Years Of <br /> Quality Service
            </span>
          </div>

          {/* Yellow Circle */}
          <div className="absolute w-90 h-90 bg-yellow-400 rounded-full -z-10"></div>

          {/* Car Image */}
          {/* <img
            src="/imags/imageTexi01.png"
            alt="Taxi"
            className="relative z-10 w-full max-w-md"
          /> */}
           <Image
              src="/Images/imageTexi01.png"
              alt="Agrotech Logo"
              width={300}
              height={100}
              priority
            className="relative z-10 w-full max-w-md"
            style={{
              transform:'Scale(1.3)'
            }}
            />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-yellow-400 font-semibold tracking-widest mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            We Provide Trusted{" "}
            <span className="text-yellow-400">Cab Service</span> In The World
          </h2>

          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour.
          </p>

          {/* Points */}
        <ul className="space-y-4 mb-8">
  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      At vero eos et accusamus et iusto odio.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      Established fact that a reader will be distracted.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      Sed ut perspiciatis unde omnis iste natus sit.
    </span>
  </li>
</ul>

          {/* Button */}
          {/* <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition">
            DISCOVER MORE →
          </button> */}
           <SpotlightButton
                  text="DISCOVER MORE →"
                  // href="/book"
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-black"
                  textColor="text-black"
                  hoverTextColor="hover:text-white"
                />
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
