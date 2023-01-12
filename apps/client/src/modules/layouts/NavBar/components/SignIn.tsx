import { FC } from "react";
import { ChevronDown } from "react-bootstrap-icons";

import Link from "next/link";

import { CardItem } from "./CardItem";
import { HoverCard } from "./HoverCard";

type SignInProps = {
  userOpen: boolean;
  setUserOpen: (userOpen: boolean) => void;
};

export const SignIn: FC<SignInProps> = ({ setUserOpen, userOpen }) => {
  return (
    <div className="flex items-baseline">
      <button
        className="relative ml-1 flex items-baseline hover:cursor-pointer lg:hover:cursor-default"
        onClick={() => setUserOpen(!userOpen)}
      >
        <p className="text-xs font-semibold text-gray-dark lg:ml-2.5 lg:hidden">
          Sign In
        </p>
        <ChevronDown className="ml-1 text-[10px] text-gray-dark lg:hidden" />
        {userOpen && (
          <HoverCard mobile={true} style={{ top: 30, right: 0 }}>
            <CardItem link="login">
              <span>Login </span>
              <span>&#10132;</span>
            </CardItem>
            <CardItem link="register">
              <span>Register </span>
              <span>&#10132;</span>
            </CardItem>
          </HoverCard>
        )}
      </button>
      <button
        className="ml-7 hidden text-base font-bold hover:cursor-pointer lg:block"
        onClick={() => console.log("login")}
      >
        <Link className="hover:text-cyan-dark hover:underline" href="/login">
          Login &#10132;
        </Link>
      </button>
      <button
        className="ml-7 hidden text-base font-bold hover:cursor-pointer lg:block"
        onClick={() => console.log("register")}
      >
        <Link className="hover:text-cyan-dark hover:underline" href="/register">
          Register &#10132;
        </Link>
      </button>
    </div>
  );
};
