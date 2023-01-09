import { FC } from "react";

import { OverlayItem } from "./OverlayItem";

interface IOverlay {
  show: boolean;
}

export const Overlay: FC<IOverlay> = ({ show }) => {
  return (
    <div
      className={
        "z-95 flex h-[calc(100vh-48px)] items-center justify-center overflow-clip bg-[#F4F4F2] py-2" +
        (show ? "opacity-100" : "h-0 w-0 opacity-0")
      }
    >
      <ul className="h-100 space-y-8 text-center text-gray-dark">
        <li>
          <OverlayItem text="Main" />
        </li>
        <li>
          <OverlayItem text="Textbook" />
        </li>
        <li>
          <OverlayItem text="Statistic" />
        </li>
        <li>
          <OverlayItem text="Sprint" />
        </li>
        <li>
          <OverlayItem text="Audio-call" />
        </li>
      </ul>
    </div>
  );
};

Overlay.displayName = "Overlay";
