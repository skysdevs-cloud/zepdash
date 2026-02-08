import Image from "next/image";

const steps = [
  {
    step: "Step one",
    title: "Initial consultation",
    desc: "In this initial step, the focus is on understanding the specific requirements.",
    img: "/image/step-img_01.png",
  },
  {
    step: "Step two",
    title: "Design & Development",
    desc: "In this initial step, the focus is on understanding the specific requirements.",
    img: "/image/step-img_02.png",
  },
  {
    step: "Step three",
    title: "Development IT strategy",
    desc: "In this initial step, the focus is on understanding the specific requirements.",
    img: "/image/step-img_03.png",
  },
  {
    step: "Step four",
    title: "Testing support",
    desc: "In this initial step, the focus is on understanding the specific requirements.",
    img: "/image/step-img_04.png",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
            Our Work Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our working process in{" "}
            <span className="underline decoration-blue-500">4 steps</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory
             lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible py-10"
        >
          {steps.map((item, i) => (
            <div
              key={i}
  tabIndex={0}
  className="
    group relative bg-white rounded-2xl overflow-hidden
    shadow-md cursor-pointer
    transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl

    active:scale-[0.97]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-blue-500
    focus-visible:ring-offset-2 focus-visible:ring-offset-white

    min-w-[85%] sm:min-w-[60%] lg:min-w-0
    snap-center
  "
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden z-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
 className="
    object-cover
    transition-transform duration-500
    group-hover:scale-110
    group-active:scale-110
  "                />
              </div>

              {/* 🔥 COLOR FILL OVERLAY */}
              <div
               className="
    absolute bottom-0 left-0 w-full h-0
    bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400
    transition-all duration-700 ease-out
    group-hover:h-full
    group-active:h-full
  "
              />

              {/* CONTENT */}
              <div  className="
  relative z-10 p-6 text-center
  transition-colors duration-500
  group-hover:text-white
  group-active:text-white
">
                <span
                  className="inline-block mb-3 px-4 py-1 rounded-full
                     bg-blue-100 text-blue-600 text-xs font-semibold
                     group-hover:bg-white/20 group-hover:text-white"
                >
                  {item.step}
                </span>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm mb-4 text-gray-500 group-hover:text-white/90">
                  {item.desc}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
