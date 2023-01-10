import { FC } from "react";

interface IDesktopItem {
  active: boolean;
  link: string;
  children: React.ReactNode;
}

export const DesktopItem: FC<IDesktopItem> = ({ active, children, link }) => {
  return (
    <div
      className={
        active
          ? "ml-8 hidden font-semibold text-black hover:cursor-pointer hover:text-black lg:block"
          : "ml-8 hidden font-semibold text-gray-dark hover:cursor-pointer hover:text-black lg:block"
      }
      role="presentation"
      onClick={() => link !== "-" && (window.location.href = link)}
    >
      {children}
    </div>
  );
};

DesktopItem.displayName = "DesktopItem";
