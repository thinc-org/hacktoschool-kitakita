import { FC, useState } from "react";
import { ChevronDown, FilterLeft, XLg } from "react-bootstrap-icons";

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
          <button
            className="text-2xl hover:cursor-pointer lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <XLg />
          </button>
        ) : (
          <button
            className="text-2xl hover:cursor-pointer lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FilterLeft />
          </button>
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
            <button
              className="relative flex items-center"
              onClick={() => setGamesOpen(!gamesOpen)}
            >
              Games
              <ChevronDown className="ml-1 hidden text-[10px] font-bold text-gray-dark hover:text-black lg:block" />
              {gamesOpen && (
                <HoverCard style={{ top: 32 }}>
                  <CardItem link="sprint">
                    <span>Sprint </span>
                    <span>&#10132;</span>
                  </CardItem>
                  <CardItem link="audiocall">
                    <span>Audio-call </span>
                    <span>&#10132;</span>
                  </CardItem>
                </HoverCard>
              )}
            </button>
          </DesktopItem>
        </div>
        <div className="flex items-baseline">
          <ProfilePic character="A" />
          <button
            className="relative ml-1 flex items-baseline hover:cursor-pointer lg:hover:cursor-default"
            onClick={() => setUserOpen(!userOpen)}
          >
            <p className="text-xs font-semibold text-gray-dark lg:ml-2.5 lg:text-base">
              Alex
            </p>
            <ChevronDown className="ml-1 text-[10px] text-gray-dark lg:hidden" />
            {userOpen && (
              <HoverCard mobile={true} style={{ top: 30, right: 0 }}>
                <CardItem link="logout">
                  <span>Sign Out </span>
                  <span>&#10132;</span>
                </CardItem>
              </HoverCard>
            )}
          </button>
          <button
            className="ml-7 hidden text-base font-bold hover:cursor-pointer lg:block"
            onClick={() => console.log("logout")}
          >
            <span>Sign Out &#10132;</span>
          </button>
        </div>
      </div>
      <Overlay show={navbarOpen} />
    </>
  );
};

Navbar.displayName = "Navbar";
