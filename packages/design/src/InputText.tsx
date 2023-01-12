import { ChangeEvent, FC, PropsWithChildren } from "react";

import clsx from "clsx";

interface InputTextProps extends PropsWithChildren {
  name: string;
  type: string;
  value: string;
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: FC<InputTextProps> = ({
  children,
  handleChange,
  name,
  type,
  value,
}) => {
  return (
    <div className="m-4">
      <p>{children}</p>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        className={clsx(
          "rounded-xl border-2 p-3 text-sm font-bold transition-colors"
        )}
      />
    </div>
  );
};
