"use client";

import SpotlightButton from "./SpotlightButton";

const services = [
  {
    title: "Online Booking",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/onlineBookImg.avif",
    iconImg: "/images/taxi-booking-1.svg",
  },
  {
    title: "City Transport",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/cityTransportImg.avif",
  iconImg: "/images/taxi-booking-2.svg",  },
  {
    title: "Airport Transport",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/airportTrImg.avif",
  iconImg: "/images/taxi-booking-3.svg",  },
  {
    title: "Business Transport",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/businessImg.webp",
  iconImg: "/images/taxi-booking-4.svg",  },
  {
    title: "Regular Transport",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/rgImg.avif",
  iconImg: "/images/taxi-booking-5.svg",  },
  {
    title: "Tour Transport",
    desc: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
    img: "/images/tourImg.webp",
  iconImg: "/images/taxi-booking-6.svg",  },
];

const ServiceIntro = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 tracking-widest font-semibold mb-2">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our Best Services For You
          </h2>
                    <div class="heading-divider"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

                {/* Icon */}
                <div className="absolute bottom-2 right-6 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <img src={item.iconImg} alt="images" width={30}/>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-10">
                <h3 className="text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <SpotlightButton
                  text="READ MORE →"
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-black"
                  textColor="text-black"
                  hoverTextColor="hover:text-white"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceIntro;
