import { FC } from "react";

import Link from "next/link";

type OverlayItemProps = {
  text: string;
  link: string;
};

export const OverlayItem: FC<OverlayItemProps> = ({ link, text }) => {
  return (
    <Link
      className="font-semibold hover:cursor-pointer hover:text-cyan-dark"
      href={link ?? "/"}
    >
      {text}
    </Link>
  );
};
