import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { dummyExploreCardData } from "@/constants/DummyModelData";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:pb-32 pb-16">
    <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
      <div className="max-w-[32rem] mx-auto text-5xl font-bold text-gray-900 lg:mx-0 position-relative">
        Deploy & Scale the Fastest Generative AI Models
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="max-w-lg mx-auto mt-4 text-sm font-medium text-gray-500 lg:mx-0 lg:mt-0">
          Unleash your applications with our high performance APIs or bring your own models. We
          will supercharge and scale them on your cloud or ours.
        </p>
        <a
          href="/model-hub"
          title=""
          className="mt-[16px] inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
          role="button"
        >
          Try Models <AiOutlineArrowRight />
        </a>
      </div>
    </div>

    <div className="grid grid-cols-1 mt-12 text-center sm:px-16 md:px-0 md:gap-x-8 gap-y-12 md:text-left md:grid-cols-3">
      {dummyExploreCardData.slice(0, 3).map((cards, i) => {
        return (
          <div key={i}>
            <Image
              className="w-full rounded-md h-[376px] object-cover"
              src={cards.img}
              height={367}
              width={100}
              alt=""
              quality={100}
              unoptimized={true}
            />
            <div className="flex items-center  mt-7 justify-between">
              <p className="text-lg font-bold text-gray-900">
                {cards.title}
              </p>
              <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-[1rem] text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                ⚡0.5s latency
              </span>
            </div>
            <p className="mt-3 text-sm font-medium setmaxrange text-gray-500 ">
              {cards.discription}
            </p>
            <div className="mt-6 flex gap-[10px]">
              <Link
                href={`/${cards.route}`}
                title=""
                className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                role="button"
              >
                Try Model <AiOutlineArrowRight />
              </Link>

              <Link
                href={`/${cards.route}`}
                title=""
                className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                role="button"
              >
                API <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}
 