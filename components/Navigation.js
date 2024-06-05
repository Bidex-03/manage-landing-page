import { useState } from "react";
import Link from "next/link";

import logo from "@/public/assets/logo.svg";
import pattern from "@/public/assets/bg-tablet-pattern.svg";

import { BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Product",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Community",
      link: "/",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  return (
    <header>
      <div className="z-[-100] right-0 -top-[20%] absolute">
        <Image src={pattern} alt="Pattern" width={600} height={200} />
      </div>
      <nav className="flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Image src={logo} alt="Manage logo" />

        {/* NAVLISTS */}
        <ul
          className={`font-[Inter] text-lg ${
            isOpen
              ? "flex flex-col bg-veryLightGray text-primaryBlue items-center"
              : "hidden md:flex"
          } md:items-center md:gap-[3rem] gap-4 absolute z-0 md:static left-0 top-[6rem] w-full md:w-auto p-4`}
        >
          {Links.map((link, i) => (
            <li key={i}>
              <Link href={link.link} onClick={handleNavLinkClick}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTON -- CTA */}
        <button className="hidden md:flex px-6 py-2 rounded-full bg-primaryRed text-[#fff]">
          Get Started
        </button>

        {/* TOGGLEICONS */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? (
            <LiaTimesSolid color="#000" size={25} />
          ) : (
            <BiMenuAltRight color="#000" size={25} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
