import { FC } from "react";

import Image from "next/image";

import { brikl, cleverse, gT, github, thinc, youtube } from "$core/resources";

import { FooterItem } from "./FooterItem";

export const Footer: FC = () => {
  return (
    <div className="flex h-1/2 w-screen flex-col items-center bg-gray-light lg:h-2/5 lg:items-center lg:justify-center">
      <div className="mr-16 mt-10 grid w-3/5 grid-flow-col grid-rows-5 gap-3 gap-x-24 text-xs lg:hidden">
        <FooterItem link="/">Home</FooterItem>
        <FooterItem link="/textbook">Textbook</FooterItem>
        <FooterItem link="/stats">Statistics</FooterItem>
        <FooterItem link="/sprint">Sprint</FooterItem>
        <FooterItem link="/audio">Audio-call</FooterItem>
        <FooterItem link="/">Ikuyo</FooterItem>
        <FooterItem link="/">Hitori</FooterItem>
        <FooterItem link="/">Nijika</FooterItem>
      </div>
      <div className="flex w-4/5 justify-between text-sm font-semibold text-gray-dark">
        <div className="flex hidden w-1/2 space-x-6 lg:block">
          <FooterItem link="/">Home</FooterItem>
          <FooterItem link="/textbook">Textbook</FooterItem>
          <FooterItem link="/stats">Statistics</FooterItem>
          <FooterItem link="/sprint">Sprint</FooterItem>
          <FooterItem link="/audio">Audio-call</FooterItem>
        </div>
        <div className="w-1/8 flex hidden space-x-6 lg:block">
          <FooterItem link="/">Kita</FooterItem>
          <FooterItem link="/">Hitori</FooterItem>
          <FooterItem link="/">Nikita</FooterItem>
        </div>
      </div>
      <div className="mt-5 flex w-4/5 flex-col border-t-2 pt-6 lg:flex-row lg:items-baseline lg:justify-between">
        <div className="mb-6 flex justify-center space-x-8">
          <Image alt="github" height={30} src={github} width={30} />
          <Image alt="gT" height={30} src={gT} width={30} />
          <Image alt="youtube" height={30} src={youtube} width={30} />
          <Image alt="thinc" height={21} src={thinc} width={21} />
          <Image alt="cleverse" height={30} src={cleverse} width={30} />
          <Image
            alt="brikl"
            className="bg-gray-dark"
            height={20}
            src={brikl}
            width={70}
          />
        </div>
        <h2 className="mb-10 text-center text-[10px] font-semibold text-gray-dark lg:text-xs">
          ©2021 GlobalTalk. Project for{" "}
          <span className="underline">GlobalTalk.</span>
        </h2>
      </div>
    </div>
  );
};
