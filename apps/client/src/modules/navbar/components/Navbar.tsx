import { FC, useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import { Overlay } from "$modules/navbar/components/Overlay";
import { ProfilePic } from "$modules/navbar/components/ProfilePic";

import { CardItem } from "./CardItem";
import { DesktopItem } from "./DesktopItem";
import { HoverCard } from "./HoverCard";

export const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  return (
    <>
      <div className="flex h-12 w-screen items-center justify-between border-b bg-gray-light py-2 px-6 lg:py-8 lg:px-64">
        {navbarOpen ? (
          <i
            className="bi bi-x-lg text-2xl hover:cursor-pointer lg:hidden"
            role="presentation"
            onClick={() => setNavbarOpen(!navbarOpen)}
            onKeyDown={() => setNavbarOpen(!navbarOpen)}
          />
        ) : (
          <i
            className="bi bi-filter-left text-2xl hover:cursor-pointer lg:hidden"
            role="presentation"
            onClick={() => setNavbarOpen(!navbarOpen)}
            onKeyDown={() => setNavbarOpen(!navbarOpen)}
          />
        )}
        <div className="flex items-center">
          <p className="font-sans text-base lg:text-xl">GlobalTalk</p>
          <p className="ml-8 hidden text-[#E0E0E0] lg:block">|</p>
          <DesktopItem active={true} link="">
            Home
          </DesktopItem>
          <DesktopItem active={false} link="textbook">
            Textbook
          </DesktopItem>
          <DesktopItem active={false} link="stats">
            Statistics
          </DesktopItem>
          <DesktopItem active={false} link="-">
            <div
              className="relative flex items-center"
              role="presentation"
              onClick={() => setGamesOpen(!gamesOpen)}
              onKeyDown={() => setGamesOpen(!gamesOpen)}
            >
              Games
              <i className="bi bi-chevron-down ml-1 hidden text-[10px] font-bold text-gray-dark hover:text-black lg:block" />
              {gamesOpen && (
                <HoverCard style={{ top: 32 }}>
                  <CardItem link="sprint" text="Sprint &#10132;" />
                  <CardItem link="audiocall" text="Audio-call &#10132;" />
                </HoverCard>
              )}
            </div>
          </DesktopItem>
        </div>
        <div className="flex items-baseline">
          <ProfilePic character="A" />
          <div
            className="relative ml-1 flex items-baseline hover:cursor-pointer lg:hover:cursor-default"
            role="presentation"
            onClick={() => setUserOpen(!userOpen)}
            onKeyDown={() => setUserOpen(!userOpen)}
          >
            <p className="text-xs font-semibold text-gray-dark lg:ml-2.5 lg:text-base">
              Alex
            </p>
            <i className="bi bi-chevron-down ml-1 text-[10px] text-gray-dark lg:hidden" />
            {userOpen && (
              <HoverCard mobile={true} style={{ top: 30, right: 0 }}>
                <CardItem link="logout" text="Sign Out &#10132;" />
              </HoverCard>
            )}
          </div>
          <p
            className="ml-7 hidden text-base font-bold hover:cursor-pointer lg:block"
            role="presentation"
            onClick={() => console.log("logout")}
            onKeyDown={() => console.log("logout")}
          >
            Sign Out <span>&#10132;</span>
          </p>
        </div>
      </div>
      <Overlay show={navbarOpen} />
    </>
  );
};

Navbar.displayName = "Navbar";
