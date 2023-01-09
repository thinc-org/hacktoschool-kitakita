import { FC, useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import { Overlay } from "$modules/navbar/components/Overlay";
import { ProfilePic } from "$modules/navbar/components/ProfilePic";

export const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="flex h-12 w-screen items-center justify-between border-b bg-gray-light py-2 px-6">
        {navbarOpen ? (
          <i
            className="bi bi-x-lg text-2xl"
            role="presentation"
            onClick={() => setNavbarOpen(!navbarOpen)}
            onKeyDown={() => setNavbarOpen(!navbarOpen)}
          />
        ) : (
          <i
            className="bi bi-filter-left text-2xl"
            role="presentation"
            onClick={() => setNavbarOpen(!navbarOpen)}
            onKeyDown={() => setNavbarOpen(!navbarOpen)}
          />
        )}
        <div className="font-sans text-base">GlobalTalk</div>
        <div className="flex items-baseline">
          <ProfilePic character="A" />
          <p className="ml-1 text-xs font-semibold text-gray-dark">Alex</p>
          <i className="bi bi-chevron-down ml-1 text-[10px] text-gray-dark"></i>
        </div>
      </div>
      <Overlay show={navbarOpen} />
    </>
  );
};

Navbar.displayName = "Navbar";
