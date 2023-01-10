import { FC } from "react";

interface IOverlayItem {
  text: string;
  link: string;
}

export const OverlayItem: FC<IOverlayItem> = ({ link, text }) => {
  return (
    <div
      className="font-semibold hover:cursor-pointer hover:text-cyan-dark"
      role="presentation"
      onClick={() => link !== "-" && (window.location.href = link)}
    >
      {text}
    </div>
  );
};

OverlayItem.displayName = "OverlayItem";
