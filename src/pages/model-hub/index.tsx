import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


//IMPORT COMPONENTS
import { ModelCards } from "@/components/indexComponents/ModelCards";
import {HeroSection} from "@/components/indexComponents/HeroSection";
import { ModelBox } from "@/components/modelhubComponents/modelBox";


 const HomePage = () => {
  return (
    <section className="">
      <ModelBox />
    </section>
  );
};

export default HomePage;
