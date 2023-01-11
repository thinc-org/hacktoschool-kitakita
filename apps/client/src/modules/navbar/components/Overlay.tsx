import { FC } from "react";

import clsx from "clsx";

import { OverlayItem } from "./OverlayItem";

type OverlayProps = {
  show: boolean;
};

export const Overlay: FC<OverlayProps> = ({ show }) => {
  return (
    <div
      className={clsx(
        "z-95 flex h-[calc(100vh-48px)] items-center justify-center overflow-clip bg-[#F4F4F2] py-2 opacity-100 lg:hidden",
        !show && "hidden"
      )}
    >
      <ul className="h-100 space-y-8 text-center text-gray-dark">
        <li>
          <OverlayItem link="/" text="Main" />
        </li>
        <li>
          <OverlayItem link="/textbook" text="Textbook" />
        </li>
        <li>
          <OverlayItem link="/stats" text="Statistic" />
        </li>
        <li>
          <OverlayItem link="/sprint" text="Sprint" />
        </li>
        <li>
          <OverlayItem link="/audiocall" text="Audio-call" />
        </li>
      </ul>
    </div>
  );
};

Overlay.displayName = "Overlay";
