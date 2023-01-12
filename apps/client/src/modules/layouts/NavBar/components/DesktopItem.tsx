import { FC } from "react";

import Link from "next/link";

import clsx from "clsx";

type DesktopItemProps = {
  active: boolean;
  link: string;
  children: React.ReactNode;
};

export const DesktopItem: FC<DesktopItemProps> = ({
  active,
  children,
  link,
}) => {
  return (
    <Link
      className={clsx(
        "ml-8 hidden font-semibold hover:cursor-pointer hover:text-black lg:block",
        active ? "text-black" : "text-gray-dark"
      )}
      href={link ?? "/"}
    >
      {children}
    </Link>
  );
};
