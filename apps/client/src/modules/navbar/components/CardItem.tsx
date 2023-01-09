import { FC } from "react";

interface ICardItem {
  text: string;
  link: string;
}

export const CardItem: FC<ICardItem> = ({ link, text }) => {
  return (
    <div
      className="m-2 w-36 text-gray-dark hover:text-black"
      role="presentation"
      onClick={() => link !== "-" && (window.location.href = link)}
      onKeyDown={() => link !== "-" && (window.location.href = link)}
    >
      {text}
    </div>
  );
};

CardItem.displayName = "CardItem";
