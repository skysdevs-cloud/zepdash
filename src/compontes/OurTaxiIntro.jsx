"use client";
import { useState } from "react";
import SpotlightButton from "./SpotlightButton";

const taxiTabs = [
  "All Taxi",
  "Hybrid Taxi",
  "Town Taxi",
  "SUV Taxi",
  "Limousine Taxi",
];

const taxisData = [
  {
    type: "Hybrid Taxi",
    name: "BMW M5 2019 MODEL",
    price: "$1.25/km",
    image: "/Images/outCab01.png",
  },
  {
    type: "Town Taxi",
    name: "Audi A6 Premium",
    price: "$1.10/km",
    image: "/Images/outCab01.png",
  },
  {
    type: "SUV Taxi",
    name: "Toyota Fortuner",
    price: "$1.80/km",
    image: "/Images/outCab01.png",
  },
  {
    type: "Limousine Taxi",
    name: "Mercedes Limousine",
    price: "$2.50/km",
    image: "/Images/outCab01.png",
  },
  {
    type: "Hybrid Taxi",
    name: "Honda City Hybrid",
    price: "$1.00/km",
    image: "/Images/outCab01.png",
  },
  {
    type: "SUV Taxi",
    name: "Scorpio N",
    price: "$1.60/km",
    image: "/Images/outCab01.png",
  },
];

const specs = [
  { label: "Taxi Doors", value: "4" },
  { label: "Passengers", value: "4" },
  { label: "Luggage Carry", value: "2" },
  { label: "Air Condition", value: "Yes" },
  { label: "GPS Navigation", value: "Yes" },
  { label: "Driver Choosing", value: "Yes" },
];

const OurTaxiIntro = () => {
  const [activeTab, setActiveTab] = useState("All Taxi");

  const filteredTaxis =
    activeTab === "All Taxi"
      ? taxisData
      : taxisData.filter((taxi) => taxi.type === activeTab);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-yellow-400 tracking-widest font-semibold mb-2">
            OUR TAXI
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let's Check Available Taxi
          </h2>
          <div className="heading-divider mx-auto mt-4"></div>
        </div>

        {/* Select (Mobile Friendly) */}
        <div className="block md:hidden mb-6">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full border-2 border-yellow-400 rounded-full px-4 py-3 font-semibold"
          >
            {taxiTabs.map((tab, i) => (
              <option key={i} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {taxiTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-yellow-400 text-black"
                    : "bg-black text-white hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Taxi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTaxis.map((taxi, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <img
                src={taxi.image}
                alt={taxi.name}
                className="w-full max-w-xs mx-auto mb-4"
              />

              <h3 className="font-bold text-lg">{taxi.name}</h3>
              <p className="text-yellow-400 font-semibold text-sm mb-4">
                {taxi.price}
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                {specs.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-yellow-400">✔</span>
                      {item.label}:
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>

                         <SpotlightButton
                                text="BOOK TAXI NOW →"
                                // href="/book"
                                bgColor="bg-[#EFA701]"
                                hoverBgColor="hover:bg-black"
                                textColor="text-black"
                                hoverTextColor="hover:text-white"
                              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTaxiIntro;
