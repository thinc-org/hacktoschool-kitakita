import { FC, ReactNode } from "react";

import Link from "next/link";

type CardItemProps = {
  link: string;
  children: ReactNode;
};

export const CardItem: FC<CardItemProps> = ({ children, link }) => {
  return (
    <Link
      className="text-start text-gray-dark hover:text-black"
      href={link ?? "/"}
    >
      <div className="m-2 w-36">{children}</div>
    </Link>
  );
};
