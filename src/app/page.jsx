import AboutIntro from "@/compontes/AboutIntro";
import SlidrBox from "@/compontes/SlidrBox";
import LogoSlider from "@/compontes/LogoSlider";
import ServiceSlider from "@/compontes/ServiceSlider";
import HeroCTA01 from "@/compontes/HeroCTA01";
import WorkProcess from "@/compontes/WorkProcess";
import IntroProject from "@/compontes/IntroProject";
import TeamSection from "@/compontes/TeamSection";
import HeroCTA02 from "@/compontes/HeroCTA02";

export default function Home() {
  return (
    <main >
     <SlidrBox/>
     <LogoSlider/>
     <ServiceSlider/>
     <AboutIntro/>    
     <HeroCTA01/>
     <WorkProcess/>
     <IntroProject/>
     <TeamSection/>
     <HeroCTA02/>
     </main>
  );
}
