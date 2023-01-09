import { FC } from "react";

interface IOverlayItem {
  text: string;
}

export const OverlayItem: FC<IOverlayItem> = ({ text }) => {
  return (
    <div className="font-semibold hover:cursor-pointer hover:text-cyan-dark">
      {text}
    </div>
  );
};

OverlayItem.displayName = "OverlayItem";
