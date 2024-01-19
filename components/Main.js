import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import illustration from "@/public/assets/illustration-intro.svg";
import Image from "next/image";

import pattern from "@/public/assets/bg-tablet-pattern.svg";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Main = () => {
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
              <div className="flex gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed rounded-full w-screen md:bg-[#fff] md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  01
                </p>

                <h3 className="text-lg">Track Company-wide progress</h3>
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
              <div className="flex gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed rounded-full w-screen md:bg-[#fff] md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  02
                </p>

                <h3>Advanced built-in reports</h3>
              </div>

              <div className="mt-4">
                Set internal delivery estimates and track progress toward
                company goals. Our customizable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </div>
            </div>

            {/* 03 */}
            <div className="my-4">
              <div className="flex gap-8 text-primaryBlue font-semibold items-center bg-veryPaleRed rounded-full w-screen md:bg-[#fff] md:rounded-none md:w-full">
                <p className="py-2 px-6 items-center bg-primaryRed text-veryLightGray rounded-full">
                  03
                </p>

                <h3>Everything you need in one place</h3>
              </div>

              <div className="mt-4">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </div>
            </div>
          </div>
        </section>

        {/* PATTERN ICON */}
        <div className="hidden md:block md:top-[120%] md:-left-40 absolute opacity-95 -z-[100]">
          <Image src={pattern} alt="Pattern" width={500} />
        </div>

        {/* 3RD SECTION */}
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
      </main>
    </>
  );
};

export default Main;
