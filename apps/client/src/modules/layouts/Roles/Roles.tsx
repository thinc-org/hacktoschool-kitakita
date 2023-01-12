import { FC } from "react";

import Image from "next/image";

import { ajarnDaeng, bocchi } from "$core/resources";

import { RoleCard } from "./components/RoleCard";

export const Roles: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-4 lg:p-10">
      <h1 className="font-sans text-4xl lg:text-5xl">Select a role</h1>
      <div className="mt-8 flex h-4/5 w-screen flex-col items-center justify-around lg:flex-row">
        <RoleCard name="Student">
          <Image
            alt="bocchi"
            className="lg:hidden"
            height={300}
            src={bocchi}
            width={300}
          />
          <Image
            alt="bocchi"
            className="hidden lg:block"
            height={600}
            src={bocchi}
            width={600}
          />
        </RoleCard>
        <RoleCard name="Teacher">
          <Image
            alt="ajarnDaeng"
            className="lg:hidden"
            height={300}
            src={ajarnDaeng}
            width={300}
          />
          <Image
            alt="ajarnDaeng"
            className="hidden lg:block"
            height={600}
            src={ajarnDaeng}
            width={600}
          />
        </RoleCard>
      </div>
    </div>
  );
};
