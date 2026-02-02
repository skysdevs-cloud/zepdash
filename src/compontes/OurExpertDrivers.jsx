"use client";

const drivers = [
  {
    name: "Alma Mcelroy",
    role: "Expert Driver",
    image: "/images/driver01.jpg",
  },
  {
    name: "Marie Hooks",
    role: "Expert Driver",
    image: "/images/driver02.jpg",
  },
  {
    name: "Daniel Nesmith",
    role: "Expert Driver",
    image: "/images/driver03.jpg",
  },
  {
    name: "Gertrude Barrow",
    role: "Expert Driver",
    image: "/images/driver04.jpg",
  },
];

export default function OurExpertDrivers() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Drivers
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Our Expert Drivers
          </h2>
          <div className="flex justify-center mt-4">
          <div className="heading-divider mx-auto mt-4"></div>
          </div>
        </div>

        {/* Driver Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drivers.map((driver, index) => (
            <div
              key={index}
 className="
    group
    bg-white
    rounded-2xl
    shadow-md
    p-6
    text-center
    cursor-pointer
    transform
    transition-all
    duration-500
    ease-out
    hover:-translate-y-4
    hover:shadow-2xl
  "            >
              {/* Image */}
              <div className="relative w-32 h-32 mx-auto rounded-2xl border-2 border-yellow-500 overflow-hidden">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* Info */}
              <h4 className="mt-5 font-semibold text-lg">
                {driver.name}
              </h4>
              <p className="text-sm text-yellow-500">
                {driver.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-4">
                {["f", "t", "in", "ig"].map((icon, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-yellow-400 transition"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
