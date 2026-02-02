"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone,Facebook,Linkedin,Twitter,Pin } from "lucide-react";


export default function MainHeader() {
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP SUB HEADER ===== */}
      <div className="w-full bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* Left Info */}
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-2">
              <Mail size={16} />
              support@zepdash.com
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              189/C Jalaun Road New Patel Nagar Orai Jalaun Uttar Pradesh 285001
            </span>

            <span className="flex items-center gap-2">
              <Phone size={16} />
              +91 6307 764 702
            </span>
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-4">

  <a
    href="#"
    target="_blank"
    className="hover:text-lime-400 transition cursor-pointer"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/zepdash"
    target="_blank"
    className="hover:text-lime-400 transition cursor-pointer"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="#"
    target="_blank"
    className="hover:text-lime-400 transition cursor-pointer"
  >
    <Twitter size={18} />
  </a>

  <a
    href="#"
    target="_blank"
    className="hover:text-lime-400 transition cursor-pointer"
  >
    <Pin size={18} />
  </a>

</div>


        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className={`
          w-full z-50
          transition-all duration-500 ease-in-out
          transform-gpu
          ${isSticky
            ? "fixed top-0 bg-black/70 backdrop-blur-xl shadow-lg"
            : "absolute top-[35px] bg-black/30 backdrop-blur-md"}
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto px-6
            flex items-center justify-between
            transition-all duration-500
            ${isSticky ? "h-16" : "h-20"}
          `}
        >

          {/* Logo */}
          <div className="flex items-center gap-2">
           <img src="/image/zepdashLogo.webp" alt="logoImg" width={150}/>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">

            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition">
              Explore <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition">
              Solutions <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition">
              Case Studies <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition">
              Tech News <ChevronDown size={16} />
            </div>

          </nav>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition cursor-pointer">
            Get a Quote
          </button>

        </div>
      </header>
    </>
  );
}
