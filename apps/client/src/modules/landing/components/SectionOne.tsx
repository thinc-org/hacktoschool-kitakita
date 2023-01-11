import { FC } from "react";

import Image from "next/image";

import { Button } from "@kitakita/design/src";

import { boyBook, console, thunder } from "$core/resources";

export const SectionOne: FC = () => {
  return (
    <div className="flex h-[calc(100vh-45px)] w-screen flex-col items-center bg-gray-light lg:h-screen lg:flex-row lg:items-start lg:justify-center">
      <div className="flex h-full flex-col justify-center">
        <h3 className="mt-4 text-center text-xs font-bold text-cyan-dark lg:mt-8 lg:text-start lg:text-base">
          E-COURSE PLATFORM
        </h3>
        <div className="text-center font-sans text-3xl lg:text-start lg:text-6xl">
          <h1>Learning and </h1>
          <h1>teaching online,</h1>
          <h1>made easy.</h1>
        </div>
        <h3 className="mt-2 text-center text-sm font-semibold text-gray-dark lg:text-start lg:text-lg">
          Practice and learn new things{" "}
          <span className="lg:block">with the platform.</span>
        </h3>
        <div className="mt-6 flex justify-center lg:justify-start">
          <Button backgroundColor="cyan-light" textColor="cyan-dark">
            About platform
          </Button>
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <div className="flex flex-col items-center border-r px-6 lg:px-0 lg:pr-12">
            <div className="flex">
              <Image
                alt="thunder"
                className="lg:hidden"
                height={13}
                src={thunder}
                width={13}
              />
              <Image
                alt="thunder"
                className="mt-1.5 hidden lg:block"
                height={20}
                src={thunder}
                width={20}
              />
              <h2 className="ml-1 font-sans text-xl lg:text-4xl">
                600<span className="text-cyan-dark">+</span>
              </h2>
            </div>
            <h3 className="text-xs font-semibold text-[#585858] lg:text-base">
              Popular words
            </h3>
          </div>
          <div className="flex flex-col items-center border-l px-6 lg:px-0 lg:pl-12">
            <div className="flex">
              <Image
                alt="console"
                className="lg:hidden"
                height={13}
                src={console}
                width={13}
              />
              <Image
                alt="console"
                className="mt-1.5 hidden lg:block"
                height={20}
                src={console}
                width={20}
              />
              <h2 className="ml-1 font-sans text-xl lg:text-4xl">
                2<span className="text-cyan-dark">+</span>
              </h2>
            </div>
            <h3 className="text-xs font-semibold text-[#585858] lg:text-base">
              Mini-games
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-8 flex h-full items-start justify-center lg:mt-0 lg:items-center">
        <Image alt="boyBook" className="md:hidden" src={boyBook} width={270} />
        <Image
          alt="boyBook"
          className="hidden md:block lg:hidden"
          src={boyBook}
          width={420}
        />
        <Image
          alt="boyBook"
          className="hidden lg:block"
          src={boyBook}
          width={400}
        />
      </div>
    </div>
  );
};
