import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

//IMPORT COMPONENTS
import { ModelCards } from "@/components/indexComponents/ModelCards";
import {HeroSection} from "@/components/indexComponents/HeroSection";



 const HomePage = () => {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16 lg:pt-[7rem]">
      <HeroSection />
      {/* <div className="flex w-full items-center justify-center p-[32px]">
        <button
          type="button"
          className="inline-flex items-center  items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
        >
          Explore More
        </button>
      </div> */}

      <ModelCards />
    </section>
  );
};

export default HomePage;
