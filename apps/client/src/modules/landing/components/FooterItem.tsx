import { FC } from "react";

import Link from "next/link";

interface IFooterItem {
  link?: string;
  children: React.ReactNode;
}

export const FooterItem: FC<IFooterItem> = ({ children, link }) => {
  return (
    <Link
      className={
        "font-semibold text-gray-dark hover:cursor-pointer hover:text-black"
      }
      href={link || "/"}
    >
      {children}
    </Link>
  );
};
