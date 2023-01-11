import { FC } from "react";

import clsx from "clsx";

interface IHoverCard {
  children: React.ReactNode;
  style: object;
  mobile?: boolean;
}

export const HoverCard: FC<IHoverCard> = ({ children, mobile, style }) => {
  return (
    <div
      className={clsx(
        "absolute rounded-2xl bg-white p-4",
        mobile && "lg:hidden"
      )}
      style={style}
    >
      {children}
    </div>
  );
};

HoverCard.displayName = "HoverCard";
