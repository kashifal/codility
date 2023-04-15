import {dummyModelCardData} from '@/constants/DummyModelHub';
import { AiOutlineSearch } from "react-icons/ai"; 
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link.js";
import Image from "next/image.js";
import {useState, useEffect} from 'react';
// import { useState, useEffect } from "react";

export const ModelBox = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchModel, setSearchModel] = useState(dummyModelCardData);
    // const [empty, setEmpty] = useState(false);


 
 
      const inputHandler = (event:any) => {
        var lowerCase = event.target.value.toLowerCase();
        setInputValue(lowerCase);
      };
  
      


      useEffect(() => {
        
        const filteredData = dummyModelCardData.filter((item) => {
            if (inputValue === "") {
              
              return item;
            } else {
                
                    
                    return item.title.toLowerCase().includes(inputValue);
            
           
            }
          });

          setSearchModel(filteredData);
      }, [inputValue]);
    
  return (
    <>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-end lg:justify-between w-full">
            <div className="w-full mx-auto text-center lg:text-left lg:mx-0 flex flex-row justify-between">
              <h2 className="text-3xl font-bold text-gray-900 mt-[35px]">
                Model Hub 
              </h2>

              <div className="relative mt-8">
                <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <form action="#" method="POST" className="relative">
                  <div className="flex">
                    <div className="flex-1">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Search Model"
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900"
                        required
                        value={inputValue}
                        onChange={inputHandler}
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-10 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent sm:px-[1rem] focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-r-xl font-pj focus:outline-none"
                    >
                      <AiOutlineSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
          <div className="grid grid-cols-1 mt-12 text-center sm:px-16 md:px-0 md:gap-x-8 gap-y-12 md:text-left md:grid-cols-3">
     
            {searchModel.map((model, i) => {
              return (
                <div key={i}>
                  <Image
                    className="w-full rounded-md h-[376px] object-cover"
                    src={model.img}
                    alt=""
                    height={376}
                    width={100}
                  />
                  <div className="flex items-center  mt-7 justify-between">
                    <p className="text-lg font-bold text-gray-900">
                      {model.title}
                    </p>
                    <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                      ⚡0.5s latency
                    </span>
                  </div>
                  <p className="mt-3 text-sm setmaxrange font-medium text-gray-500">
                    {model.discription}
                  </p>
                  <div className="mt-6 flex gap-[10px]">
                    <Link
                      href={`/${model.route}`}
                    //   `/products/${product.id}`
                      title=""
                      className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                      role="button"
                    >
                      Try Model <AiOutlineArrowRight />
                    </Link>

                    <Link
                      href={`/${model.route}`}
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
      </section>
    </>
  );
};
