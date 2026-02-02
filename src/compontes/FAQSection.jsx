"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "How Long Does A Booking Take?",
    answer:
      "Booking usually takes less than 2 minutes. Just select your pickup, drop location, time, and confirm your ride.",
  },
  {
    question: "How Can I Become A Member?",
    answer:
      "You can become a member by signing up on our website using your email and phone number.",
  },
  {
    question: "What Payment Gateway You Support?",
    answer:
      "We support Credit/Debit Cards, UPI, Net Banking, and popular wallets.",
  },
  {
    question: "How Can I Cancel My Request?",
    answer:
      "You can cancel your booking anytime from your dashboard before the ride starts.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-yellow-500 font-semibold tracking-widest uppercase">
            FAQ&apos;s
          </span>

          <h2 className="text-4xl font-bold mt-3 leading-snug">
            General <span className="text-yellow-500">Frequently</span> Asked
            Questions
          </h2>

          <p className="text-gray-500 mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden">
            <Image
              src="/images/faq01.jpg"
              alt="FAQ Taxi"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
    <div className="space-y-4">
  {faqs.map((faq, index) => {
    const isOpen = activeIndex === index;

    return (
      <div
        key={index}
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className={`border rounded-xl bg-white overflow-hidden cursor-pointer
          transition-all duration-300
          ${
            isOpen
              ? "border-yellow-500 shadow-xl"
              : "border-gray-200 hover:shadow-lg"
          }`}
      >
        <button className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer">
          <div className="flex items-center gap-4">
            <span
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold
                transition-colors duration-300
                ${
                  isOpen
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
            >
              ?
            </span>

            <span
              className={`font-semibold text-lg transition-colors duration-300
                ${
                  isOpen ? "text-yellow-500" : "text-gray-800"
                }`}
            >
              {faq.question}
            </span>
          </div>

          <span
            className={`text-2xl transition-all duration-300
              ${
                isOpen
                  ? "rotate-180 text-yellow-500"
                  : "text-gray-400"
              }`}
          >
            +
          </span>
        </button>

        {/* SMOOTH CONTENT */}
        <div
          className={`grid transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden px-6 pb-6 text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}
