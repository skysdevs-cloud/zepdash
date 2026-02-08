"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Pin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#071a3f] to-[#020b2a] text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div>
            <img
            src="/image/zepdashLogo.webp"
            alt="logo"
            className="w-[120px] md:w-[150px]"
          />

          <p className="text-gray-400 leading-relaxed mb-6">
          Zepdash is a next-generation AI and digital solutions company delivering intelligent websites, scalable web apps, and powerful mobile applications. We help businesses innovate, automate, and grow with cutting-edge technology.
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { Icon: Facebook, color: "bg-blue-600" },
              { Icon: Instagram, color: "bg-pink-500" },
              { Icon: Twitter, color: "bg-sky-500" },
              { Icon: Pin, color: "bg-red-500" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.color} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition`}
              >
                <item.Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* OUR SOLUTIONS */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Our solutions</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              "Cloud solutions",
              "Data security",
              "Network security",
              "Data migration",
              "Cyber security",
              "Secure data backup",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-blue-400 hover:translate-x-1 inline-block transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Community</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              "Company profile",
              "Help center",
              "Projects",
              "Plans and pricing",
              "Latest blogs",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-blue-400 hover:translate-x-1 inline-block transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ADDRESS BOX */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">

          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="text-gray-400 mb-6">
            189/C Jalaun Road New Patel Nagar Orai Jalaun Uttar Pradesh 285001.
          </p>

          <h3 className="text-lg font-semibold mb-3">Opening hours</h3>

          <div className="space-y-2 text-gray-400">
            <div className="flex justify-between">
              <span>Week days</span>
              <span>09.00 - 05:00</span>
            </div>

            <div className="flex justify-between">
              <span>Saturday</span>
              <span>09.00 - 05:00</span>
            </div>
          </div>

        </div>

      </div>

      {/* SCROLL TO TOP */}
      <div className="relative">
        <div className="absolute left-1/2 -top-6 -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition"
          >
            <ArrowUp />
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">

          <p>
            Copyright © 2025 <Link href="https://akashgoswami.netlify.app/" className="text-blue-400 hover:text-black">Skysdev</Link>. All rights reserved.
          </p>

          <div className="flex gap-5 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Term & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Legal
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
