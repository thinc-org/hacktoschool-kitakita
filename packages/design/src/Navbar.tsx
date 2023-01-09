import { FC } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import { ProfilePic } from "./ProfilePic";

export const Navbar: FC = () => {
  return (
    <div className="bg-gray-light flex items-center justify-between border-b py-2 px-6">
      <i className="bi bi-filter-left text-2xl"></i>
      <div className="font-sans text-base">GlobalTalk</div>
      <div className="flex items-baseline">
        <ProfilePic character="A" />
        <p className="text-gray-dark ml-1 text-xs font-semibold">Alex</p>
        <i className="bi bi-chevron-down text-gray-dark ml-1 text-[10px]"></i>
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";
