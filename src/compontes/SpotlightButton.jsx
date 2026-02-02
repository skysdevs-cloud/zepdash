"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function SpotlightButton({
  text = "Click Me",
  href = "/",
  icon: Icon = null,

  bgColor = "bg-white",
  hoverBgColor = "hover:bg-yellow-400",
  textColor = "text-black",
  hoverTextColor = "hover:text-black",
}) {
  const buttonRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const spotlight = spotlightRef.current;

    const move = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;

      gsap.to(spotlight, {
        x,
        scale: 30,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.to(spotlight, {
        scale: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    button.addEventListener("mousemove", move);
    button.addEventListener("mouseleave", leave);

    return () => {
      button.removeEventListener("mousemove", move);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <Link
      href={href}
      ref={buttonRef}
      className={`
    relative overflow-hidden
    inline-flex items-center gap-2
    px-8 py-4
    rounded-full
    font-semibold uppercase
    tracking-wide
    transition-colors duration-300
    ${bgColor} ${hoverBgColor}
    ${textColor} ${hoverTextColor}
  `}
    >
      {/* Spotlight (same as hover bg) */}
      <span
        ref={spotlightRef}
       className={`
    absolute top-1/2 left-0
    h-4 w-4
    rounded-full
    -translate-y-1/2
    scale-0
    opacity-70
    pointer-events-none
    ${hoverBgColor.replace("hover:", "")}
  `}
      />

      {Icon && (
        <span className="relative z-10">
          <Icon size={18} />
        </span>
      )}

      <span className="relative z-10 font-bold">{text}</span>
    </Link>
  );
}
