import { FC } from "react";
import { ChevronDown } from "react-bootstrap-icons";

import Link from "next/link";

import { CardItem } from "./CardItem";
import { HoverCard } from "./HoverCard";
import { ProfilePic } from "./ProfilePic";

type SignOutProps = {
  userOpen: boolean;
  setUserOpen: (userOpen: boolean) => void;
};

export const SignOut: FC<SignOutProps> = ({ setUserOpen, userOpen }) => {
  return (
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
      <button className="ml-7 hidden text-base font-bold hover:cursor-pointer lg:block">
        <Link className="hover:text-cyan-dark hover:underline" href="/logout">
          Sign Out &#10132;
        </Link>
      </button>
    </div>
  );
};
