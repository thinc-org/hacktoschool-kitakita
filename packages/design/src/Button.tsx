import { FC, PropsWithChildren } from "react";

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
      className={`rounded-full px-5 bg-${backgroundColor} py-3 text-sm font-bold text-${textColor} transition-colors hover:bg-black hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
