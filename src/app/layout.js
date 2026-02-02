import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/compontes/Header";   
import Footer from "@/compontes/Footer";
// import FAQSection from "@/compontes/FAQSection";
// import ScrollToTop from "@/compontes/ScrollToTop";
// import { ToastContainer } from "react-toastify";
// import OurBlogIntro from "@/compontes/OurBlogIntro";
// import Testimonial from "@/compontes/Testimonial";
// import BookYourCabCTA from "@/compontes/BookYourCabCTA";
import "react-toastify/dist/ReactToastify.css";
import TestimonialSection from "@/compontes/Testimonial";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pink City Cab Service | Taxi & Car Rental in Jaipur | Book Affordable Cabs",
  description:
    "Pink City Cab Service offers reliable taxi & car rental services in Jaipur. Book local cabs, outstation taxis, airport transfers & tempo travellers at best prices.",

  keywords: [
    "Pink City Cab Service",
    "Taxi service in Jaipur",
    "Jaipur cab booking",
    "Car rental in Jaipur",
    "Airport taxi Jaipur",
    "Outstation cab Jaipur",
    "Tempo traveller Jaipur",
    "Affordable taxi Jaipur"
  ],

  authors: [{ name: "Pink City Cab Service" }],

  openGraph: {
    title: "Pink City Cab Service | Reliable Taxi & Car Rental in Jaipur",
    description:
      "Book trusted cabs in Jaipur for local rides, airport transfer & outstation trips. Affordable pricing & professional drivers.",
    url: "https://pinkcitycab.netlify.app/",
    siteName: "Pink City Cab Service",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Pink City Cab Service",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pink City Cab Service | Taxi & Car Rental in Jaipur",
    description:
      "Affordable taxi booking in Jaipur. Local, airport & outstation cabs available.",
    images: ["/favicon.ico"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: "index, follow",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <TestimonialSection/>
        <Footer />
        {/* <FAQSection/>
             <Testimonial/>
     <BookYourCabCTA/>
     <OurBlogIntro/>
        <ScrollToTop /> */}
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
