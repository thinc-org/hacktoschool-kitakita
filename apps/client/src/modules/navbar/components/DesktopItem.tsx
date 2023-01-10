import { FC } from "react";

import Link from "next/link";

interface IDesktopItem {
  active: boolean;
  link: string;
  children: React.ReactNode;
}

export const DesktopItem: FC<IDesktopItem> = ({ active, children, link }) => {
  return (
    <Link
      className={
        active
          ? "ml-8 hidden font-semibold text-black hover:cursor-pointer hover:text-black lg:block"
          : "ml-8 hidden font-semibold text-gray-dark hover:cursor-pointer hover:text-black lg:block"
      }
      href={link === "-" ? "" : link}
    >
      {children}
    </Link>
  );
};

DesktopItem.displayName = "DesktopItem";
