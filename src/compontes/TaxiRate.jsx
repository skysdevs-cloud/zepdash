"use client";

import SpotlightButton from "./SpotlightButton";

const plans = [
  { title: "Basic Package", price: "$2.30" },
  { title: "Standard Package", price: "$2.30" },
  { title: "Premium Package", price: "$2.30" },
];

export default function TaxiRate() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Taxi Rate
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Our Taxi Rate For You
          </h2>
          <div className="flex justify-center mt-4">
            <div className="heading-divider"></div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
 className="
    bg-[#ece5e545]
    rounded-2xl
    shadow-md
    p-6
    text-center
    transform
    transition-all
    duration-500
    ease-out
    hover:-translate-y-4
    hover:shadow-2xl
  "            >
              {/* Taxi Image */}
              <img
                src="/images/rateDriveImg01.png"
                alt="Taxi"
                className="mx-auto h-28 object-contain"
              />

              <h4 className="mt-4 font-bold text-lg uppercase">
                {plan.title}
              </h4>
              <p className="text-sm text-yellow-500">
                One Time Payment
              </p>

              {/* BLACK PRICE BOX */}
              <div className="relative bg-black text-white rounded-xl mt-6 p-6 overflow-hidden">

                {/* Background Shape */}
                <img
                  src="/images/texiRateshape-4.png"
                  alt="shape"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 "></div>

                {/* Taxi Icon */}
                <div className="relative z-10">
                  <div className="absolute -top-13 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl shadow-lg">
                    🚕
                  </div>

                  {/* Content */}
                  <ul className="text-sm mt-8 space-y-3 relative z-10">
                    <li className="flex justify-between">
                      <span className="rate-check">Base Charge</span>
                      <span>{plan.price}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="rate-check">Distance Allowance</span>
                      <span>5000m</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="rate-check">Up To 50kms</span>
                      <span>$1.38/km</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="rate-check">Booking Fee</span>
                      <span>$0.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="rate-check">Extra Passengers</span>
                      <span>$0.45</span>
                    </li>
                  </ul>

                  <div className="pt-6 relative z-10">
                    <SpotlightButton
                      text="CHOOSE PLAN →"
                      bgColor="bg-[#EFA701]"
                      hoverBgColor="hover:bg-white"
                      textColor="text-black"
                      hoverTextColor="hover:text-black"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
