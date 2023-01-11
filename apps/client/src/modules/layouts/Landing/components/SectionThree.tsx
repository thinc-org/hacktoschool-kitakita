import { FC } from "react";

import Image from "next/image";

import { Button } from "@kitakita/design";

import { girlBook } from "$core/resources";

export const SectionThree: FC = () => {
  return (
    <div className="flex h-4/5 w-screen flex-col items-center bg-gray-light lg:h-2/5 lg:flex-row lg:items-center lg:justify-center lg:space-x-10 2xl:space-x-20">
      <div className="mt-8 flex flex-col">
        <div className="text-center lg:text-start">
          <h2 className="font-sans text-2xl lg:text-5xl">Increase your</h2>
          <h2 className="font-sans text-2xl lg:text-5xl">vocabulary</h2>
          <h3 className="mt-2 text-sm font-semibold text-gray-dark lg:mt-7 lg:text-lg">
            Traditional and new effective appraoches to
            <span className="block">word study</span>
          </h3>
          <div className="mt-4 ">
            <Button backgroundColor="cyan-light" textColor="cyan-dark">
              Textbook &#10132;
            </Button>
          </div>
        </div>
      </div>
      <Image
        alt="girlipad"
        className="mt-8 md:hidden"
        height={400}
        src={girlBook}
        width={400}
      />
      <Image
        alt="girlipad"
        className="mt-32 hidden md:block lg:hidden"
        height={525}
        src={girlBook}
        width={525}
      />
      <Image
        alt="girlipad"
        className="hidden lg:block"
        height={470}
        src={girlBook}
        width={470}
      />
    </div>
  );
};
