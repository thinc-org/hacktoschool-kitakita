import { FC } from "react";

import Link from "next/link";

type FooterItemProps = {
  link: string;
  children: React.ReactNode;
};

export const FooterItem: FC<FooterItemProps> = ({ children, link }) => {
  return (
    <Link
      className={
        "font-semibold text-gray-dark hover:cursor-pointer hover:text-black"
      }
      href={link ?? "/"}
    >
      {children}
    </Link>
  );
};
