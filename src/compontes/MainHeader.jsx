"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Pin,
  Menu,
  X,
} from "lucide-react";

export default function MainHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP SUB HEADER ===== */}
      <div className="hidden md:block w-full bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Mail size={16} /> support@zepdash.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Orai, Uttar Pradesh
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} /> +91 6307 764 702
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Facebook size={18} className="hover:text-lime-400 cursor-pointer" />
            <Linkedin size={18} className="hover:text-lime-400 cursor-pointer" />
            <Twitter size={18} className="hover:text-lime-400 cursor-pointer" />
            <Pin size={18} className="hover:text-lime-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className={`
          w-full z-[999] transition-all duration-500
          ${isSticky
            ? "fixed top-0 bg-black/80 backdrop-blur-xl shadow-lg"
            : "absolute top-0 md:top-[35px] bg-black/40 backdrop-blur-md"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <img
            src="/image/zepdashLogo.webp"
            alt="logo"
            className="w-[120px] md:w-[150px]"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            <Link href="/" className="hover:text-blue-400">Home</Link>

            {["Explore", "Solutions", "Case Studies", "Tech News"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-400"
              >
                {item} <ChevronDown size={16} />
              </div>
            ))}
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            bg-black/95 backdrop-blur-xl
          `}
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-white">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Case Studies</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Tech News</Link>

            <button className="mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-full">
              Get a Quote
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
