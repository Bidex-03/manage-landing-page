import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import illustration from "@/public/assets/illustration-intro.svg";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pattern from "@/public/assets/bg-tablet-pattern.svg";
import { testimonials } from "./testimonials";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
        {/* 1ST SECTION */}
        <section className="flex flex-col-reverse md:flex gap-20 md:flex-row items-center w-screen px-10">
          {/* MANAGE PURPOSE */}
          <div className="md:w-[50%] text-center md:text-start">
            <h2
              className={`${vietnam.className} bg-inherit text-4xl md:text-6xl font-semibold text-primaryBlue`}
            >
              Bring everyone together to build better products.
            </h2>
            <p className="text-darkGrayishBlue text-xl md:text-2xl md:w-[80%] my-6 md:my-[3rem]">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the target team goals in view.
            </p>
          </div>

          {/* MANAGE IMAGE */}
          <div>
            <Image src={illustration} alt="Manage Illustration image" />
          </div>
        </section>

        {/* 2ND SECTION */}
        <section className="px-10 flex flex-col md:flex-row md:gap-8 mt-8 md:mt-0">
          {/* HOW MANAGE IS DIFFERENCE */}
          <div className="text-center md:text-start">
            <h2
              className={`${vietnam.className} bg-inherit text-4xl md:text-5xl font-semibold text-primaryBlue`}
            >
              What&apos;s different about Manage?
            </h2>
            <p className="text-darkGrayishBlue md:text-2xl md:w-[80%] my-[1rem] md:my-[3rem]">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          {/* DIFFERENCE LIST */}
          <div className="md:w-[80%] text-darkGrayishBlue">
            {/* 01 */}
            <div className="my-4">
              <div className="flex gap-4 md:gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed rounded-full md:bg-transparent md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  01
                </p>

                <h3 className="text-[15px] md:text-lg">
                  Track Company-wide progress
                </h3>
              </div>

              <div className="mt-4">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </div>
            </div>

            {/* 02 */}
            <div className="my-4">
              <div className="flex gap-4 md:gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed rounded-full md:bg-transparent md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  02
                </p>

                <h3 className="md:text-lg">Advanced built-in reports</h3>
              </div>

              <div className="mt-4">
                Set internal delivery estimates and track progress toward
                company goals. Our customizable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </div>
            </div>

            {/* 03 */}
            <div className="my-4">
              <div className="flex gap-2 md:gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed md:bg-transparent rounded-full md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  03
                </p>

                <h3 className="text-[14px] md:text-lg">
                  Everything you need in one place
                </h3>
              </div>

              <div className="mt-4">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="my-10">
          <h2
            className={`${vietnam.className} bg-inherit text-4xl md:text-5xl font-semibold text-primaryBlue flex justify-center my-4`}
          >
            What they&apos;ve said
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => {
              return (
                <div key={testimonial.id} /*className="bg-emerald-500"*/>
                  <div className="bg-veryLightGray mx-5 flex flex-col items-center p-7 h-60">
                    <div className="flex items-center w-[20%]">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        // className="-top-10 absolute z-0"
                      />
                    </div>

                    <h2 className="text-primaryBlue font-bold">
                      {testimonial.name}
                    </h2>

                    <p>{testimonial.message}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>

        {/* PATTERN ICON */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-[95%] md:left-[15%] md:-top-8 opacity-15">
            <Image src={pattern} alt="Pattern" width={450} />
          </div>

          <div className="hidden md:block absolute -right-[12%] bottom-20 opacity-15">
            <Image src={pattern} alt="Pattern" width={450} />
          </div>

          {/* 3RD SECTION -- GET STARTED CTA */}
          <section className="bg-primaryRed flex flex-col md:flex-row justify-around py-16 items-center">
            <div className="w-[45%] md:w-[30%] text-2xl mb-4 md:text-3xl text-center md:text-start text-veryLightGray font-semibold">
              Simplify how your team works today.
            </div>

            <Link
              href="/"
              className="text-xl font-semibold px-6 py-2 rounded-full bg-veryLightGray text-primaryRed"
            >
              Get Started
            </Link>
          </section>
        </section>
      </main>
    </>
  );
};

export default Main;
