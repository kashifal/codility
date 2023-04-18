 

 
import Image from "next/image";
import { BsFillLightningChargeFill, BsClouds } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { GrDeploy } from "react-icons/gr";
// import { dummyExploreCardData } from "./DummyModelData.js";
import { VscDebug } from "react-icons/vsc";
import image1 from "/testimon-images/civitai_logo.png";
import image2 from "/testimon-images/ezgif.com-gif-maker.png";
import image3 from "/testimon-images/blend_logo.svg";
import image4 from "/testimon-images/hexo-logo.d3a6592c.svg";
import image5 from "/testimon-images/kaiber.jpg";
import image6 from "/testimon-images/blockade.jpg"; 
import image7 from "/testimon-images/logo.png";
import Link from "next/link";
import segmindLogo from "../../../public/segmind.png";
import segmind from "../../../public/logo-white.png";





export const ModelCards = () => {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <h2 className=" mx-auto text-5xl font-bold text-center w-full text-gray-900 lg:mx-0 mb-12">
            Why Segmind?
          </h2>
          <div className="mt-[5rem] grid grid-cols-1  text-center gap-y-10 md:grid-cols-3 md:text-left">
            <div className="md:pr-6 lg:pr-12">
              <div className=" test-btn flex items-center justify-center">
                <BsFillLightningChargeFill />
              </div>
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Speed
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We optimise the models into a high performance production ready
                models, which are upto 5X faster.
              </p>
            </div>

            <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

            <div className="md:px-6 lg:px-12 md:border-l md:border-gray-200">
              <div className=" test-btn text-[#fff] flex items-center justify-center">
                <BiRocket />
              </div>
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Deploy
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We abstract away the deployment drudgery. Deploy on high
                performance NVIDIA Triton Server, with a few clicks.
              </p>
            </div>

            <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

            <div className="md:pl-6 lg:pl-12 md:border-l md:border-gray-200">
              <div className=" test-btn flex items-center justify-center">
                <BsClouds />
              </div>
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Scale
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We rightsize your infrastructure. Scale up or down your GPUs
                automatically, based on the demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-start w-full">
              <h2 className="text-center w-full mx-auto text-5xl font-bold text-gray-900 lg:mx-0 ">
                User Testimonials✨
              </h2>
            </div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 mt-[3rem]">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                      1 team.
                      <br />
                      6+ years.
                      <br />
                      300+ projects.
                      <br />
                    </h2>
                    <p className="mt-6 text-base text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>

                  <div className="lg:col-span-3 xl:col-span-4">
                    <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image1}
                          alt=""
                        />
                      </div>

                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image2}
                          alt=""
                        />
                      </div>

                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image3}
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image4}
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image5}
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image6}
                          alt=""
                        />
                      </div>
                      <div>
                        <Image
                          className="object-contain w-[150px] h-[100px] mx-auto grayscale"
                          src={image7}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section> */}

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            {/* <svg
              className="mx-auto w-14 h-14 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg> */}
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Get Started Right Away

            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Experience the fastest stable diffusion APIs available today.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
            {/* <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-4 py-3 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <svg
                className="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
              </svg>
              Download for Mac
            </a> */}

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-4 py-3 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              {/* <svg
                className="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
              </svg> */}
              Try Model

              <svg className="ml-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
            </a>

            <a
              href="https://github.com/VoltaML/voltaML-fast-stable-diffusion"
              title=""
              className="inline-flex items-center justify-center px-4 py-3 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              {/* <svg
                className="w-6 h-6 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.9768 18.685C20.9368 18.5593 20.8715 18.443 20.785 18.3434C20.6984 18.2437 20.5925 18.1627 20.4736 18.1054C19.931 17.7948 19.582 17.4476 19.5161 17.153C19.4922 17.0377 19.4752 16.9212 19.4653 16.8039C19.4703 16.6358 19.4383 16.4686 19.3717 16.3142C19.305 16.1597 19.2054 16.0218 19.0797 15.91C18.9906 15.8471 18.891 15.8006 18.7855 15.7728C18.9791 15.1324 19.0413 14.4596 18.9685 13.7946C18.8033 12.4003 18.2418 11.0825 17.3504 9.99761C16.527 9.08952 15.2538 7.78526 15.2538 6.79529V4.04632C15.2538 3.23839 14.9329 2.46354 14.3616 1.89225C13.7903 1.32095 13.0154 1 12.2075 1C11.3996 1 10.6247 1.32095 10.0534 1.89225C9.48212 2.46354 9.16117 3.23839 9.16117 4.04632V8.05014C9.02896 8.74367 8.68219 8.80955 8.13734 9.56896C7.60061 10.2837 7.17223 11.0737 6.86602 11.9135C6.60206 12.7063 6.02427 13.5481 5.79278 14.1922C5.63449 14.595 5.60179 15.0363 5.699 15.458C5.58725 15.5899 5.48455 15.7291 5.39158 15.8748C5.3184 15.9963 5.23219 16.1095 5.13448 16.2124C4.95932 16.2659 4.77687 16.2917 4.59374 16.2888C4.21471 16.2556 3.83645 16.3605 3.52874 16.5843C3.26066 16.8712 3.31007 17.4494 3.36222 18.0611C3.39114 18.3021 3.40093 18.545 3.3915 18.7875C3.36128 19.0323 3.28358 19.2688 3.16276 19.4838C3.08771 19.6141 3.03513 19.756 3.00722 19.9038C2.97874 20.1256 3.03513 20.35 3.16509 20.5321C3.29505 20.7141 3.489 20.8404 3.70807 20.8855C4.21404 21.0653 6.08099 21.5324 6.71734 21.6746C6.87712 21.7184 7.03403 21.772 7.18717 21.8352C7.6342 22.0328 8.11257 22.15 8.60031 22.1815C8.84271 22.1918 9.08326 22.1351 9.29562 22.0178C9.50799 21.9005 9.684 21.727 9.80438 21.5164C9.88962 21.3757 9.9581 21.2255 10.0084 21.0689C11.5307 20.7937 13.0934 20.8348 14.5992 21.1897C14.7344 21.531 14.9747 21.8204 15.2854 22.0159C15.5325 22.1844 15.8248 22.2743 16.1239 22.2739C16.7358 22.2334 17.3095 21.9625 17.7297 21.5159C18.1877 21.0454 18.7163 20.6494 19.2965 20.342C19.6524 20.1965 20.6291 19.7299 20.8702 19.3228C20.9301 19.2292 20.9704 19.1244 20.9887 19.0148C21.0071 18.9052 21.003 18.793 20.9768 18.685V18.685ZM9.80438 6.78339C9.96358 6.50891 10.8108 5.80806 11.3676 5.80806C11.7004 5.84136 12.0193 5.95863 12.2944 6.14888C12.4341 6.23748 12.5836 6.30949 12.74 6.36343C12.8004 6.38036 12.8653 6.39545 12.9317 6.40918C13.1856 6.46819 13.4482 6.52949 13.5433 6.70837C13.5622 6.74446 13.5733 6.78408 13.5761 6.82471C13.5789 6.86535 13.5731 6.90611 13.5593 6.94442C13.4732 7.1435 13.3138 7.30187 13.1142 7.3868C12.9437 7.47986 12.7806 7.58601 12.6265 7.70429C12.2519 8.03834 11.7797 8.24286 11.2797 8.28757C11.0619 8.27077 10.8515 8.20139 10.6664 8.08538C10.4813 7.96937 10.3271 7.81018 10.217 7.62149C10.1284 7.50064 10.0267 7.39002 9.91371 7.29165C9.67628 7.10408 9.67811 7.00481 9.80438 6.78339ZM12.7505 3.8949C13.2995 3.8949 13.7464 4.53536 13.7464 5.32039C13.7484 5.60326 13.6858 5.88285 13.5634 6.1379C13.3952 6.05993 13.2183 6.00204 13.0364 5.96543H13.0296C13.1597 5.82008 13.2328 5.63256 13.2354 5.4375C13.2492 5.05963 13.0442 4.74489 12.778 4.73528C12.5117 4.72567 12.2834 5.02395 12.2697 5.40228C12.2676 5.47567 12.2741 5.54905 12.2889 5.62095C12.1225 5.53135 11.9467 5.46047 11.7647 5.4096C11.7647 5.3794 11.7564 5.3515 11.7564 5.32085C11.7541 4.53308 12.2002 3.8949 12.7505 3.8949ZM10.0912 4.12364C10.5487 4.08521 10.9654 4.59072 11.0213 5.25268C11.0254 5.30438 11.0245 5.3547 11.0213 5.40502C10.8962 5.43999 10.7745 5.48591 10.6576 5.54226C10.6613 5.49073 10.6602 5.43897 10.6544 5.38764C10.6004 5.05002 10.3666 4.80665 10.1328 4.84416C9.89907 4.88167 9.75268 5.18543 9.80666 5.52305C9.82867 5.68159 9.90006 5.82917 10.0107 5.94484C9.90045 6.03085 9.79752 6.11731 9.70968 6.20149C9.55194 5.95703 9.46036 5.67581 9.44389 5.38535C9.39265 4.72201 9.63328 4.16023 10.0912 4.12181V4.12364ZM9.41324 21.2789C8.99053 21.9651 8.22929 21.7451 7.35094 21.4098C7.1774 21.3384 6.99937 21.2785 6.81798 21.2304C6.20726 21.0932 4.34396 20.6279 3.86133 20.4568C3.46973 20.3196 3.44182 20.1197 3.46149 19.9632C3.48569 19.867 3.5231 19.7747 3.57266 19.6887C3.71855 19.4237 3.81176 19.1329 3.84714 18.8324C3.85975 18.5621 3.85011 18.2913 3.81832 18.0226C3.78493 17.6297 3.73415 17.0354 3.86407 16.8968C3.97158 16.782 4.34671 16.7595 4.62028 16.7463C4.90188 16.7663 5.18311 16.7026 5.42863 16.5633C5.56209 16.4342 5.67778 16.2879 5.77265 16.1282C5.91722 15.9123 6.11485 15.6159 6.27588 15.5898C6.29239 15.5874 6.30905 15.5862 6.32574 15.5861C6.5618 15.5861 6.86922 15.8405 7.15972 16.2824C7.24023 16.4041 7.36741 16.6173 7.52249 16.8771C7.96665 17.6645 8.46593 18.4196 9.01661 19.1366C9.70328 19.9211 9.82862 20.6014 9.41324 21.2766V21.2789ZM9.91646 19.6906C9.77557 19.3797 9.58831 19.092 9.36109 18.8374C9.31808 18.7884 9.26959 18.7299 9.22384 18.6704C9.31495 18.6775 9.4065 18.6648 9.49225 18.6332C9.578 18.6016 9.65591 18.5519 9.72066 18.4874C9.96815 18.1242 9.65478 17.513 9.24168 17.1841C8.82858 16.8552 7.83266 16.2513 7.26036 15.3999C7.07737 13.5673 8.4498 11.3051 9.15934 10.0337C9.59435 9.37565 9.80975 8.59669 9.77464 7.80859C9.80255 7.84245 9.83 7.87538 9.85927 7.91198C10.011 8.15519 10.2191 8.35826 10.466 8.50399C10.7129 8.64971 10.9912 8.73381 11.2774 8.74916C11.8746 8.70846 12.4419 8.47302 12.8923 8.07896C13.0268 7.97559 13.1687 7.88231 13.3169 7.7999C13.4623 7.72725 13.5955 7.63232 13.7117 7.51855C14.4371 8.86857 15.0834 10.2597 15.6472 11.6848C15.986 12.9328 16.1077 14.2296 16.0073 15.5189C15.5804 15.4731 15.2126 15.4457 15.0109 15.625C14.7716 15.8377 14.8069 16.3085 14.8407 16.7637C14.8476 16.8634 14.8549 16.9563 14.8572 17.0354C14.864 17.2641 14.8279 17.9073 14.7817 18.4568C14.4299 18.937 13.9698 19.3275 13.4389 19.5967C12.908 19.8659 12.3211 20.0062 11.7258 20.0062C11.1087 20.0111 10.4958 19.9033 9.91737 19.6883L9.91646 19.6906ZM20.4722 19.0917C20.0812 19.4561 19.6209 19.7381 19.1186 19.9207C18.4834 20.2503 17.9049 20.6791 17.4049 21.1911C17.2328 21.3594 16.3344 22.1701 15.5347 21.6376C14.7483 21.1133 14.8901 20.2972 15.0855 19.5735C15.1134 19.4696 15.1362 19.3818 15.1486 19.315C15.2481 18.5545 15.3045 17.789 15.3174 17.0221C15.3147 16.937 15.3073 16.8364 15.2996 16.7303C15.262 16.4776 15.2669 16.2205 15.3142 15.9695C15.562 15.933 15.8142 15.938 16.0603 15.9841C16.2177 16.0015 16.3733 16.0184 16.5091 16.0248L16.7511 16.0326C17.1995 16.0473 18.5636 16.0903 18.8006 16.2742C18.9575 16.3954 18.9809 16.556 19.0115 16.8529C19.0231 16.9879 19.0426 17.1222 19.0701 17.255C19.1931 17.8012 19.7782 18.2358 20.2476 18.5048C20.3769 18.5654 20.4789 18.6721 20.5335 18.804C20.543 18.8532 20.5426 18.9038 20.5322 18.9528C20.5218 19.0019 20.5017 19.0483 20.4731 19.0895L20.4722 19.0917Z" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 -ml-1"  viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047l.154-.03z"/></g></svg>
              Try voltaML
            </a>
          </div>

          {/* <p className="mt-6 text-base text-center text-gray-600">
            It takes only 2 minutes to setup on any device
          </p> */}
        </div>
      </section>

      <footer className="py-12 bg-black sm:py-16 lg:py-20">
        <div className=" mx-auto max-w-[1400px] flex-wrap px-8 h-full flex items-center justify-between rounded ring-gray-800 ring-1">
          <div className="flex   justify-start py-6 ">
          <Link href="/" title="">
                <div className="flex flex-row items-center">
                  <Image className="w-[50px]" src={segmindLogo} alt="" />
                  <Image className="w-[100px] h-[27px]" src={segmind} alt="" />
                </div>
              </Link>
            <ul className="flex items-center gap-3 ml-8">
              <li className="text-xs text-gray-400">Sigmind Inc @ 2022-2023</li>
              <li  className="text-xs text-gray-400">Privacy Policy</li>
              <li  className="text-xs text-gray-400">Main Cloud Services Agreement (MCSA)</li>
            </ul>
          </div>

          

         

          <ul className="flex items-center justify-center  space-x-3">
            <li className="">
              <a
                href="#"
                target="_blank"
                title=""
                className="inline-flex items-center  ring-1 ring-white  justify-center w-10 h-10 text-white transition-all duration-200   hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </li>

            <li className="">
              <a
                href="#"
                target="_blank"
                title=""
                className="inline-flex items-center  ring-1 ring-white  justify-center w-10 h-10 text-white transition-all duration-200   hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </a>
            </li>

            <li className="">
              <a
                href="#"
                target="_blank"
                title=""
                className="inline-flex items-center  ring-1 ring-white  justify-center w-10 h-10 text-white transition-all duration-200   hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a>
            </li>

            <li className="">
              <a
                href="#"
                target="_blank"
                title=""
                className="inline-flex items-center  ring-1 ring-white  justify-center w-10 h-10 text-white transition-all duration-200   hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

         
        </div>
      </footer>
    </>
  );
};
