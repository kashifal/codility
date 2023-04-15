
import segmindLogo from "../../public/segmind.png";
import segmind from "../../public/logo-white.png";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <header
        style={{ backgroundColor: "#000" }}
        className="py-4 bg-white bg-[#000] fixed w-full z-[100]"
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" title="">
                <div className="flex flex-row items-center">
                  <Image className="w-[50px]" src={segmindLogo} alt="" />
                  <Image className="w-[100px] h-[27px]" src={segmind} alt="" />
                </div>
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
              <nav className="hidden lg:items-center lg:ml-16 lg:mr-auto lg:space-x-16 lg:flex">
                <Link
                  href="/model-hub"
                  title=""
                  className="text-base font-medium  transition-all duration-200 rounded  font-pj hover:text-opacity-50 text-[#fff]"
                >
                  Model Hub
                </Link>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium transition-all duration-200 rounded  font-pj hover:text-opacity-50  text-[#fff]"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium transition-all duration-200 rounded  font-pj hover:text-opacity-50  text-[#fff]"
                >
                  Documentation
                </a>
                <Link
                  href="/sign-up"
                  title=""
                  className="text-base font-medium  transition-all duration-200 rounded  font-pj hover:text-opacity-50 text-[#fff]"
                >
                  Sign Up
                </Link>
              </nav>
              {/* <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign up
              </a> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
