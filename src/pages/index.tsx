import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

//IMPORT COMPONENTS
import { ModelCards } from "@/components/indexComponents/ModelCards";
import {HeroSection} from "@/components/indexComponents/HeroSection";



 const HomePage = () => {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16 lg:pt-[7rem]">
      <HeroSection />
      <ModelCards />
    </section>
  );
};

export default HomePage;
