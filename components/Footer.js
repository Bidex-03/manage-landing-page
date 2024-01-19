import Image from "next/image";

import logoWhite from "@/public/assets/logo-white.svg";

const Footer = () => {
  return <section className="bg-primaryBlue">
    <div className="fill-current text-veryLightGray">
        <Image src={logoWhite} alt="Manage Logo" className="fill-current  text-veryLightGray" />

        <div>
            
        </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </section>;
};

export default Footer;
