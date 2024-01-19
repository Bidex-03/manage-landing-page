import Image from "next/image";

import logoWhite from "@/public/assets/logo-white.svg";
import facebook from "@/public/assets/icon-facebook.svg";
import youtube from "@/public/assets/icon-youtube.svg";
import twitter from "@/public/assets/icon-twitter.svg";
import pinterest from "@/public/assets/icon-pinterest.svg";
import instagram from "@/public/assets/icon-instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-primaryBlue flex flex-col-reverse md:grid md:grid-cols-3 justify-between px-12 py-6 gap-8 items-center md:items-start">
      {/* LOGO et SOCIALS */}
      <div className="fill-current text-veryLightGray flex flex-col-reverse md:flex-col gap-12">
        <Image
          src={logoWhite}
          alt="Manage Logo"
          className="fill-current  text-veryLightGray"
        />

        <div className="flex gap-4">
          <Image src={facebook} />
          <Image src={youtube} />
          <Image src={twitter} />
          <Image src={pinterest} />
          <Image src={instagram} />
        </div>
      </div>

      {/* LINKS */}
      <div className="grid grid-cols-2 text-veryLightGray font-medium">
        <Link href="/">Home</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Community</Link>
        <Link href="/">Products</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">About Us</Link>
      </div>

      {/* INPUT FIELD */}
      <div className="flex gap-4 items-start">
        <input
          placeholder="Updates in your inbox"
          className="rounded-full px-4 py-2"
        />
        <Link
          href="/"
          className="text-xl font-semibold px-6 py-2 rounded-full bg-primaryRed text-veryLightGray"
        >
          Go
        </Link>
      </div>
    </section>
  );
};

export default Footer;
