import { FC } from "react";

import Link from "next/link";

interface IOverlayItem {
  text: string;
  link: string;
}

export const OverlayItem: FC<IOverlayItem> = ({ link, text }) => {
  return (
    <Link
      className="font-semibold hover:cursor-pointer hover:text-cyan-dark"
      href={link === "-" ? "" : link}
    >
      {text}
    </Link>
  );
};

OverlayItem.displayName = "OverlayItem";
