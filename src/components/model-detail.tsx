"use client"; 
import axios from "axios";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
const sd12 = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
  { scheduler: "UniPC" },
];

const sd15 = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
];

const ControlNet = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
  { scheduler: "UniPC" },
];
import {dummyModelCardData} from '@/constants/DummyModelHub';
export const ModelDetailPage = ({ id }: any) => {
  const currentModel = dummyModelCardData.filter(
    (item) => item.route === id.params.id
  );
  const [formInput, setFormInput] = useState({
    prompt: "",
    steps: "",
    scheduler: "Select Scheduler",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [response, setResponse] = useState<any>();

  const [dropDown, setDropDown] = useState(false);

  const getResponse = async (formInput: any, selectedImage: any) => {
    try {
      const response = await axios.post(
        "https://api.segmind.com/v1/sd1.5-controlnet-depth",
        {
          prompt: formInput.prompt,
          negative_prompt: "bad anatomy, bad hands, missing fingers",
          samples: "1",
          scheduler: formInput.scheduler,
          num_inference_steps: formInput.steps,
          guidance_scale: "8",
          seed: "1131347997987",
          strength: "0.75",
          file: selectedImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      if (response.status === 200) {
        const imageUrl = URL.createObjectURL(response.data);
        setResponse(imageUrl);
       
        // setResponse(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16   mt-[3rem] ">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div className="max-w-[35rem]">
                <h2 className="text-3xl font-bold text-gray-900">
                  {currentModel?.[0]?.title!}
                </h2>
                <p className="mt-4 text-base font-medium text-gray-500">
                  {currentModel?.[0]?.discription!}
                </p>
                {/* tabs  */}
                <div className="py-6 bg-white">
                  <div className=" mx-auto max-w-7xl">
                    <div className="w-full pb-1 overflow-x-auto">
                      <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-10">
                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            Demo
                          </a>

                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            API
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prompt  */}
                <div className="pb-[1rem] bg-white">
                  <div className=" mx-auto  max-w-7xl">
                    <div className="max-w-xl mx-auto">
                      <div>
                        <label className="block text-sm font-bold text-gray-900">
                          Prompt
                        </label>
                        <div className="mt-2">
                          <div className="mt-2">
                            <textarea
                              value={formInput.prompt}
                              onChange={(e) =>
                                setFormInput({
                                  ...formInput,
                                  prompt: e.target.value,
                                })
                              }
                              name=""
                              id=""
                              placeholder="Enter Prompt"
                              rows={1}
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  {/* Steps */}
                  <div className="pb-[1rem] bg-white">
                    <div className=" mx-auto  max-w-7xl">
                      <div className="max-w-xl mx-auto">
                        <div>
                          <label className="block text-sm font-bold text-gray-900">
                            Steps
                          </label>
                          <div className="mt-2">
                            <div className="mt-2">
                              <div className="flex gap-[10px] mt-[4px]">
                                <button
                                  className={
                                    formInput.steps == "20"
                                      ? "button-active"
                                      : "button"
                                  }
                                  onClick={() =>
                                    setFormInput({ ...formInput, steps: "20" })
                                  }
                                >
                                  20
                                </button>
                                <button
                                  className={
                                    formInput.steps == "30"
                                      ? "button-active"
                                      : "button"
                                  }
                                  onClick={() =>
                                    setFormInput({ ...formInput, steps: "30" })
                                  }
                                >
                                  30
                                </button>
                                <button
                                  className={
                                    formInput.steps == "50"
                                      ? "button-active"
                                      : "button"
                                  }
                                  onClick={() =>
                                    setFormInput({ ...formInput, steps: "50" })
                                  }
                                >
                                  50
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scheduler */}
                  <div className="pb-[1rem] bg-white w-[100%]">
                    <div className="">
                      <div
                        className="relative"
                        onClick={() => setDropDown((prev) => !prev)}
                      >
                        <label className="block text-sm font-bold text-gray-900">
                          Scheduler
                        </label>
                        <div className="mt-2 relative">
                          <div className="cursor-pointer block w-full py-3 px-4 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 text-[16px] leading-[1.55rem]">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center justify-start space-x-2">
                                <span>{formInput.scheduler}</span>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                // stroke-width="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  // stroke-linejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {dropDown && (
                          <div className=" -bottom-2 w-full z-10 absolute top-[86px]">
                            <div className="border-gray-300 bg-white shadow border rounded-lg w-full block text-sm px-4 py-2 space-y-2">
                              <div className="relative mt-2"></div>
                              <ul className="flex flex-col">
                                {sd12.map((scheduler, i) => {
                                  return (
                                    <li
                                      key={i}
                                      style={{color: 'black'}}
                                      className="w-full rounded-md p-2 hover:bg-gray-100 text-black cursor-pointer"
                                      onClick={() => {
                                        setFormInput({
                                          ...formInput,
                                          scheduler: scheduler.scheduler,
                                        });
                                      }}
                                    >
                                      {scheduler.scheduler}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Upload a file: */}
                <div className=" mt-[1rem] bg-white">
                  <div className=" ">
                    <div className="">
                      <div className="sm:flex flex-col  ">
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900"
                        >
                          Upload a file:
                        </label>
                        <div className="relative mt-2 sm:mt-0 sm:flex-1">
                          <input
                            type="file"
                            onChange={(event) => {
                              setSelectedImage(event?.target?.files?.[0]!);
                            }}
                            className=" mt-[8px] block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />
                          {selectedImage && (
                            <div className="border">
                              <img
                                alt="not found"
                                width={"250px"}
                                src={URL.createObjectURL(selectedImage)}
                              />
                              <br />
                              <button
                                className="bg-[red] px-3 py-[8px] text-[#fff] rounded-[4px]"
                                onClick={() => setSelectedImage(null)}
                              >
                                <BsTrash />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="button-active mt-[2rem]"
                  onClick={() => getResponse(formInput, selectedImage)}
                >
                  Submit
                </button>
              </div>
            </div>
            {response && (
              <div className="lg:col-span-6 mt-[2.5rem] px-[2.5rem] py-[2.5rem] h-[750px] w-[668px] border">
                <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                  <img
                    className="object-cover w-[668px] h-[668px] h-full"
                    src={response}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
