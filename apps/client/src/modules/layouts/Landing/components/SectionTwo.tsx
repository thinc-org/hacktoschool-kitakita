import { FC } from "react";

import Image from "next/image";

import { girlIpad, megaphone, pinkShoes } from "$core/resources";

export const SectionTwo: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-white lg:h-3/5 lg:flex-row lg:items-center lg:justify-center lg:space-x-10 2xl:space-x-20">
      <Image
        alt="girlipad"
        className="mt-16 md:hidden"
        height={370}
        src={girlIpad}
        width={370}
      />
      <Image
        alt="girlipad"
        className="mt-16 hidden md:block lg:hidden"
        height={570}
        src={girlIpad}
        width={570}
      />
      <Image
        alt="girlipad"
        className="mt-16 hidden lg:mt-0 lg:block"
        height={450}
        src={girlIpad}
        width={450}
      />
      <div className="flex flex-col">
        <div className="text-center lg:text-start">
          <h2 className="font-sans text-2xl lg:text-5xl">
            Learn a language <span className="lg:block">in a playful way</span>{" "}
          </h2>
          <h3 className="mt-2 text-sm font-semibold text-gray-dark lg:mt-7 lg:text-lg">
            Make learning words more fun with mini-
            <span className="lg:block">games</span>
          </h3>
        </div>
        <div className="mx-3 mt-16 flex items-center justify-between lg:w-4/5">
          <div className="relative flex w-full flex-col items-center">
            <Image
              alt="pinkshoes"
              className="absolute top-[-70px] z-10 mt-8 hover:cursor-pointer"
              height={140}
              src={pinkShoes}
              width={140}
              onClick={() => console.log("audio-call")}
            />
            <button
              className="rounded-xl bg-pink-light px-6 pb-3 pt-20 font-bold text-pink-dark"
              onClick={() => console.log("sprint")}
            >
              Sprint &#10132;
            </button>
          </div>

          <div className="relative flex w-full flex-col items-center">
            <Image
              alt="megaphone"
              className="absolute top-[-70px] z-10 mt-8 hover:cursor-pointer"
              height={100}
              src={megaphone}
              width={100}
              onClick={() => console.log("audio-call")}
            />
            <button
              className="rounded-xl bg-cyan-light px-6 pb-3 pt-20 font-bold text-cyan-dark lg:px-10"
              onClick={() => console.log("audio-call")}
            >
              Audio-call &#10132;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
