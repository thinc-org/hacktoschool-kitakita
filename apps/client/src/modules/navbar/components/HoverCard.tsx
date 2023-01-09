import { FC } from "react";

interface IHoverCard {
  children: React.ReactNode;
  style: object;
  mobile?: boolean;
}

export const HoverCard: FC<IHoverCard> = ({ children, mobile, style }) => {
  return mobile ? (
    <div className="absolute rounded-2xl bg-white p-4 lg:hidden" style={style}>
      {children}
    </div>
  ) : (
    <div className="absolute rounded-2xl bg-white p-4" style={style}>
      {children}
    </div>
  );
};

HoverCard.displayName = "HoverCard";
