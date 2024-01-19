import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo.svg";
import pattern from "@/public/assets/bg-tablet-pattern.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      {/* <div className="z-[-100] right-0 -top-[20%] absolute">
        <Image src={pattern} alt="Pattern" width={600} height={200} />
      </div> */}
      <div
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] px-10 bg-darkGrayishBlue" // this is responsible for the blue background after scrollY
            : "fixed w-full h-20 z-[100] px-10"
        }
      >
        <div
          className={`flex justify justify-between items-center w-full h-full px-2 2xl:px-16 font-semibold ${
            shadow ? "text-[#fff]" : "text-primaryBlue"
          }`}
        >
          {/* LOGO */}
          <Image src={logo} alt="Manage logo" />

          {/* SIDE LINKS */}
          {/* <div> */}
          {/* LISTS */}
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/">Pricing</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/">Product</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/">About Us</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/">Careers</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href="/">Community</Link>
              </li>
            </ul>
          </div>

          {/* BUTTON -- CTA */}
          <button className="hidden md:flex px-6 py-2 rounded-full bg-primaryRed text-[#fff]">
            Get Started
          </button>

          {/* Menu Icon */}
          <div
            className={
              shadow ? "md:hidden text-[#fff]" : "md:hidden text-primaryBlue"
            }
          >
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>

          {/* </div> */}
        </div>

        {/* /////////////////////// */}
        {/* MOBILE NAV HERE */}
        {/* /////////////////////// */}

        <div>
          <div
            className={
              nav ? "md:hidden fixed top-0 w-screen h-screen bg-black/70" : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed bg-darkGrayishBlue text-veryLightGray w-[75%] sm:w-[60%] md:w-[45%] h-screen top-0 left-0 py-6 px-4 ease-in duration-500"
                  : "fixed top-0 left-[-100%] py-6 px-4 h-screen ease-in duration-500"
              }
            >
              <div className="flex w-full items-center justify-between">
                <Image src={logo} alt="Manage logo" />

                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-[10px] cursor-pointer"
                  onClick={handleNav}
                >
                  <AiOutlineClose />
                </div>
              </div>

              {/* LINKS */}
              <div>
                <ul className="flex flex-col items-center uppercase">
                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4">
                      Pricing
                    </li>
                  </Link>

                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4">
                      Product
                    </li>
                  </Link>

                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4">
                      About Us
                    </li>
                  </Link>

                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4">
                      Careers
                    </li>
                  </Link>

                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4">
                      Community
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
