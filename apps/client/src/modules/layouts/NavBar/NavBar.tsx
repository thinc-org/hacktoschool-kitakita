import { FC, useState } from "react";
import { ChevronDown, FilterLeft, XLg } from "react-bootstrap-icons";

import { CardItem } from "./components/CardItem";
import { DesktopItem } from "./components/DesktopItem";
import { HoverCard } from "./components/HoverCard";
import { Overlay } from "./components/Overlay";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";

export const NavBar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const auth = false;

  return (
    <>
      <div className="flex h-12 w-screen items-center justify-between border-b bg-gray-light py-2 px-6 lg:py-8 lg:px-20 xl:px-40 2xl:px-64">
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
          <p className="ml-10 font-sans text-base lg:ml-0 lg:text-xl">
            GlobalTalk
          </p>
          <p className="ml-8 hidden text-[#E0E0E0] lg:block">|</p>
          <DesktopItem active={true} link="/">
            Home
          </DesktopItem>
          <DesktopItem active={false} link="/dashboard">
            Dashboard
          </DesktopItem>
          <DesktopItem active={false} link="/textbook">
            Textbook
          </DesktopItem>
          <DesktopItem active={false} link="/stats">
            Statistics
          </DesktopItem>
          <DesktopItem active={false} link="/">
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
        {auth ? (
          <SignOut setUserOpen={setUserOpen} userOpen={userOpen} />
        ) : (
          <SignIn setUserOpen={setUserOpen} userOpen={userOpen} />
        )}
      </div>
      <Overlay show={navbarOpen} />
    </>
  );
};
