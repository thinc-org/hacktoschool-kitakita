import { ChangeEvent, FC, PropsWithChildren } from "react";

import clsx from "clsx";

interface InputRadioProps extends PropsWithChildren {
  name: string;
  values: string[];
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadio: FC<InputRadioProps> = ({
  children,
  handleChange,
  name,
  values,
}) => {
  return (
    <div className="m-4">
      <p>{children}</p>
      {values.map((value) => (
        <div key={value}>
          <input
            name={name}
            id={value}
            type="radio"
            value={value}
            onChange={(e) => {
              handleChange(e);
            }}
            className={clsx(
              "rounded-xl border-2 p-3 text-sm font-bold transition-colors"
            )}
          />
          <label htmlFor={value} className="ml-2">
            {value.toUpperCase()}
          </label>
        </div>
      ))}
    </div>
  );
};
