import AboutIntro from "@/compontes/AboutIntro";
import OurTaxiIntro from "@/compontes/OurTaxiIntro";
import ServiceIntro from "@/compontes/ServiceIntro";
import SlidrBox from "@/compontes/SlidrBox";
import OurBlogIntro from "@/compontes/OurBlogIntro";
import BookYourCabCTA from "@/compontes/BookYourCabCTA";
import Testimonial from "@/compontes/Testimonial";
import WhyChooseUs from "@/compontes/WhyChooseUs";
import OurExpertDrivers from "@/compontes/OurExpertDrivers";
import TaxiRate from "@/compontes/TaxiRate";
import OurAwesomeFeature from "@/compontes/OurAwesomeFeature";
import LogoSlider from "@/compontes/LogoSlider";
import ServiceSlider from "@/compontes/ServiceSlider";
import HeroCTA01 from "@/compontes/HeroCTA01";
import WorkProcess from "@/compontes/WorkProcess";

export default function Home() {
  return (
    <main >
     <SlidrBox/>
     {/* <LogoSlider/> */}
     <ServiceSlider/>
     <AboutIntro/>    
     <HeroCTA01/>
     <WorkProcess/>
     </main>
  );
}
