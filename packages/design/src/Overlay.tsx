import { FC } from "react";

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
      <ul className="h-100 text-gray-dark space-y-8 text-center">
        <li>Main</li>
        <li>Textbook</li>
        <li>Statistic</li>
        <li>Sprint</li>
        <li>Audio-call</li>
      </ul>
    </div>
  );
};

Overlay.displayName = "Overlay";
