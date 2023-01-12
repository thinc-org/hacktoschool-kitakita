import { FC } from "react";

import clsx from "clsx";

type HoverCardProps = {
  children: React.ReactNode;
  style: object;
  mobile?: boolean;
};

export const HoverCard: FC<HoverCardProps> = ({ children, mobile, style }) => {
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
