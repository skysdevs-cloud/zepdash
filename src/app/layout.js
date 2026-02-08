import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";

import Header from "@/compontes/Header";   
import Footer from "@/compontes/Footer";
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
  title: "Zepdash | Website, App & Cloud Services Agency",
  description:
    "Zepdash is a full-service digital agency offering website development, mobile app solutions, cloud services, and data-driven solutions. Boost your business with innovative tech and expert support.",

  keywords: [
    "Zepdash",
    "Website development agency",
    "App development services",
    "Cloud services provider",
    "Data solutions company",
    "Web & mobile app development",
    "Cloud computing services",
    "Digital agency for business",
    "Tech solutions for companies",
    "Software development agency"
  ],

  authors: [{ name: "Zepdash" }],

  openGraph: {
    title: "Zepdash | Expert Web, App & Cloud Solutions",
    description:
      "Partner with Zepdash for professional website, app, cloud, and data services. Delivering innovative tech solutions for your business growth.",
    url: "https://zepdash.netlify.app/",
    siteName: "Zepdash",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Zepdash Agency - Website & App Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zepdash | Website, App & Cloud Development",
    description:
      "Zepdash offers website, mobile app, cloud, and data services. Innovative solutions to scale your business.",
    images: ["/favicon.ico"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: "index, follow",
};


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export const inter = Inter({
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}>
        <Header />
        {children}
        <TestimonialSection/>
        <Footer />
      </body>
    </html>
  );
}
