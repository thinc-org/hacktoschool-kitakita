import { FC, PropsWithChildren } from "react";

import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  textColor: string;
  backgroundColor: string;
}

export const Button: FC<ButtonProps> = ({
  backgroundColor,
  children,
  onClick,
  textColor,
}) => {
  return (
    <button
      className={clsx(
        "rounded-full px-5 py-3 text-sm font-bold transition-colors hover:bg-black hover:text-white",
        backgroundColor,
        textColor
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
