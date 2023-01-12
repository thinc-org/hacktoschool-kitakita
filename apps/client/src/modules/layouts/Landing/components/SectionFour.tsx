import { FC } from "react";

import Image from "next/image";

import { Button } from "@kitakita/design";

import { boyGirl } from "$core/resources";

export const SectionFour: FC = () => {
  return (
    <div className="flex h-4/5 w-screen flex-col items-center bg-white lg:h-3/5 lg:flex-row lg:items-center lg:justify-center lg:space-x-10 2xl:space-x-20">
      <Image
        alt="boyGirl"
        className="mt-16 md:hidden"
        height={370}
        src={boyGirl}
        width={370}
      />
      <Image
        alt="boyGirl"
        className="mt-16 hidden md:block lg:hidden"
        height={520}
        src={boyGirl}
        width={520}
      />
      <Image
        alt="boyGirl"
        className="hidden lg:block xl:hidden"
        height={470}
        src={boyGirl}
        width={470}
      />
      <Image
        alt="boyGirl"
        className="hidden xl:block"
        height={550}
        src={boyGirl}
        width={550}
      />
      <div className="mt-4 flex flex-col">
        <div className="text-center lg:text-start">
          <h2 className="font-sans text-2xl lg:text-5xl">
            Watch your{" "}
            <span className="lg:block">
              progress every <span className="lg:block">day</span>{" "}
            </span>{" "}
          </h2>
          <h3 className="mt-2 text-sm font-semibold text-gray-dark lg:mt-7 lg:text-lg">
            Save statistics on your achievements, words
            <span className="block">learned, and mistakes</span>
          </h3>
          <div className="mt-6">
            <Button backgroundColor="cyan-light" textColor="cyan-dark">
              Statistics &#10132;
            </Button>
          </div>
        </div>
        <div className="mx-3 mt-16 flex items-center justify-between lg:w-4/5"></div>
      </div>
    </div>
  );
};
