"use client";

import { useState } from "react";

export default function WhyChooseUs() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Video Wrapper Section */}
      <section className="relative z-20 overflow-visible">
        <div className="max-w-6xl mx-auto px-6 -mb-40">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/videoTum01.jpg"
              alt="Video"
              className="w-full h-[420px] object-cover "
            />

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span
                onClick={() => setOpen(true)}
                className="w-20 h-20 bg-yellow-400/90 rounded-full flex items-center justify-center text-black text-3xl hover:scale-110 transition cursor-pointer"
              >
                ▶
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="relative bg-[#0b0b0b] text-white pt-56 pb-24 overflow-hidden" >
        
      </section> */}
      <div class="choose-area pt-50 text-white  pb-24 overflow-hidden">
            <div className="container mx-auto px-6">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

  {/* Left Content */}
  <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
    <p className="text-yellow-400 uppercase tracking-widest font-semibold">
      Why Choose Us
    </p>

    <h2 className="text-4xl font-bold mt-4 leading-tight">
      We Are Dedicated To <br />
      <span className="text-yellow-400">Provide Quality Service</span>
    </h2>

    <p className="text-gray-400 mt-6 max-w-lg">
      There are many variations of passages available but the majority
      have suffered alteration in some form by injected humour.
    </p>

    <img
      src="/images/tumvideo02.png"
      alt="Taxi"
      className="mt-10 max-w-sm mx-auto lg:mx-0"
    />
  </div>

  {/* Right Cards */}
  <div className="space-y-6 flex flex-col items-center lg:items-stretch">
    {[
      { title: "Best Quality Taxi", num: "01" },
      { title: "Expert Drivers", num: "02" },
      { title: "Many Locations", num: "03" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white text-black rounded-xl p-6 flex gap-4 shadow-lg w-full max-w-xl"
      >
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          🚕
        </div>

        <div>
          <h4 className="font-semibold text-lg">{item.title}</h4>
          <p className="text-sm text-gray-600 mt-1">
            There are many variations of passages available but the
            majority have suffered alteration.
          </p>
        </div>

        <span className="ml-auto text-yellow-400 font-bold text-xl">
          {item.num}
        </span>
      </div>
    ))}
  </div>

</div>

        </div>
        </div>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-[450px] rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
