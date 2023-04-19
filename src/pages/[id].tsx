"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/router";
import { CodeSection } from "@/components/Code";
import Image from "next/image";
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
import { dummyModelCardData } from '@/constants/DummyModelHub';





const ModelDetailPage = () => {




  const router = useRouter();
  const { id } = router.query;




  const currentModel = dummyModelCardData.filter(
    (item) => (item.route === id)
  );







  const [formInput, setFormInput] = useState({
    prompt: currentModel[0]?.prompt,
    steps: "20",
    scheduler: "DDIM",
  });
  const [selectedImage, setSelectedImage] = useState<File | null  >(null);
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(2);
  const [fileUrl, setFileUrl] = useState("kcjvlkjvlkfdjlk");
  const [text, setText] = useState<any>(currentModel[0]?.imageUrl);
  const [tabIndex, setTabIndex] = useState<Number>(0);


  const tabs = [
    {
      id:1,
      text:'Demo'
    },
    {
      id:2,
      text:'API'
    }
  ]




  const [dropDown, setDropDown] = useState(false);

  const getResponse = async (formInput: any, selectedImage: any) => {
    setLoading(true);
    const startTime = performance.now();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const response = await axios.post(
        `${currentModel[0]?.api}`,
        {
          prompt: formInput.prompt,
          negative_prompt: currentModel[0]?.negative_prompt,
          samples: "1",
          scheduler: formInput.scheduler,
          num_inference_steps: formInput.steps,
          guidance_scale: currentModel[0]?.guidance_scale,
          seed: currentModel[0]?.seed,
          strength: currentModel[0]?.strength,
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

        setLoading(false);

        const endTime = performance.now();
    const duration = endTime - startTime;

    setResponseTime(duration / 1000);

        // setResponse(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
    fetch(`${currentModel[0]?.imageUrl}`)
  .then(response => response.blob())
  .then(blob => {
    const file = new File([blob], 'sheer.jpg', { type: 'image/jpeg', lastModified: Date.now() });
    setSelectedImage(file);



  });
  setText(currentModel[0]?.imageUrl);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const handleClearButtonClick = () => {
    setFileUrl("");
};

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16   mt-[3rem] ">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div className="max-w-[35rem]">
                <h2  className="text-3xl font-bold text-gray-900">
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
                        <nav className="flex -mb-px space-x-0">
                          {
                            tabs?.map((tab, index:any) => (
                              <a
                              href="#"
                              key={index}
                              onClick={() => setTabIndex(index)}

                              className={`${tabIndex === index ? 'bg-gray-300 px-4 py-4 w-20 flex items-center justify-center text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap' : 'py-4 text-sm w-20 flex items-center justify-center font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap'} `}
                            >
                              {tab.text}
                            </a>
                            ))
                          }



                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${tabIndex === 0 ? 'block' : 'hidden'}`}>
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
                              value={ formInput.prompt  }
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
                                <span className="text-black">{formInput.scheduler}</span>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-black"
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
                            <div className="border-gray-300 bg-white shadow border rounded-lg w-full block text-sm text-black px-4 py-2 space-y-2">
                              <div className="relative mt-2"></div>
                              <ul className="flex flex-col">
                                {sd12.map((scheduler, i) => {
                                  return (
                                    <li
                                      key={i}
                                      className="w-full rounded-md p-2 text-black hover:bg-gray-100 cursor-pointer"
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
                <div className={`${currentModel[0]?.hide ? 'hidden' : ' mt-[1rem] bg-white'}`}>
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



                    <label
                        htmlFor="dropzone-file"
                        className="dark:hover:bg-bray-800 flex p-3 my-4 w-full cursor-pointer flex-col items-start px-6 justify-center rounded-lg border-2 border-dashed border-gray-300   dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <input
                            type="file"
                            id="dropzone-file"
                            className="absolute left-0 top-0 h-full w-full hidden"
                            onChange={(event) => {

                              const file = event?.target?.files?.[0]!;
                              setSelectedImage(file);
                              setText(URL.createObjectURL(file));

                            }}
                        />
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                                role="presentation"
                            >
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                               <h1 className="py-2">Upload Image</h1>
                            <div className="flex flex-col items-start gap-1">
                                <div className="truncate pt-1  w-[500px] overflow-hidden text-gray-500 text-xs">{text}</div>
                                <button
                                    title="Clear"
                                    type="button"

                                    className={`${text === null ? 'hidden' : 'pointer-events-auto ml-1 flex-shrink p-2 rounded inline-flex  text-white bg-red-500'}`}
                                    onClick={() =>{
                                       setSelectedImage(null)
                                       setText(null)
                                      }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                        role="presentation"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </label>


                          {selectedImage && (
                            <div className="border">
                              <Image
                                alt="not found"
                                width={250}
                                height={250}
                                unoptimized={true}
                                src={URL.createObjectURL(selectedImage)}
                              />
                              <br />

                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${currentModel[0]?.mask ? 'block mt-[1rem] bg-white' : ' hidden'}`}>
                  <div className=" ">
                    <div className="">
                      <div className="sm:flex flex-col  ">
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900"
                        >
                          Upload mask:
                        </label>
                        <div className="relative mt-2 sm:mt-0 sm:flex-1">



                    <label
                        htmlFor="dropzone-file"
                        className="dark:hover:bg-bray-800 flex p-3 my-4 w-full cursor-pointer flex-col items-start px-6 justify-center rounded-lg border-2 border-dashed border-gray-300   dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <input
                            type="file"
                            id="dropzone-file"
                            className="absolute left-0 top-0 h-full w-full hidden"
                            // onChange={(event) => {

                            //   const file = event?.target?.files?.[0]!;
                            //   setSelectedImage(file);
                            //   setText(URL.createObjectURL(file));

                            // }}
                        />
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                                role="presentation"
                            >
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                               <h1 className="py-2">Upload Image</h1>
                            <div className="flex flex-col items-start gap-1">
                                <div className="truncate pt-1  w-[500px] overflow-hidden text-gray-500 text-xs">{text}</div>
                                <button
                                    title="Clear"
                                    type="button"

                                    className={`${text === null ? 'hidden' : 'pointer-events-auto ml-1 flex-shrink p-2 rounded inline-flex  text-white bg-red-500'}`}
                                    onClick={() =>{
                                       setSelectedImage(null)
                                       setText(null)
                                      }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                        role="presentation"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </label>


                          {selectedImage && (
                            <div className="border">
                              <Image
                                alt="not found"
                                width={250}
                                height={250}
                                unoptimized={true}
                                src={currentModel[0]?.maskUrl ?? ""}
                              />
                              <br />

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
                <div className={`${tabIndex === 1 ? 'block' : 'hidden'}`}>
                  <CodeSection />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-normal text-gray-900">Output</h1>


              {
                loading ?
                  <div role="status" className="mt-6 w-44 flex items-center gap-2">
                    <svg aria-hidden="true" className="mr-2 h-5 w-5 animate-spin fill-black text-gray-200 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="">Generating...</span>
                  </div>
                  : <h1></h1>
              }
              {response ? (
                <div className="lg:col-span-6 mt-[2.5rem] px-[2.5rem] py-[2.5rem]  w-[668px] border">

                  <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                    <Image
                      className="object-cover"
                      src={response}
                      alt=""
                      width={512}
                      height={512}
                      unoptimized={true}
                    />

                    <h1 className="text-sm text-gray-400 font-semibold mt-4">Generated in {responseTime?.toFixed(1)} seconds</h1>
                  </div>
                </div>
              ) :
              <div className="lg:col-span-6 mt-[2.5rem] px-[2.5rem] py-[2.5rem]  w-[668px] border">

                  <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                    <Image
                      className="object-cover"
                      src={currentModel[0]?.img}
                      alt=""
                      width={512}
                      unoptimized={true}
                      height={512}
                    />

                    <h1 className="text-sm text-gray-400 font-semibold mt-4">Generated in {responseTime?.toFixed(1)} seconds</h1>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default ModelDetailPage;
