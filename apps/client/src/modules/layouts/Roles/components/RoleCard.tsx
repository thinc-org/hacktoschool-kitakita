import { FC, PropsWithChildren } from "react";

interface RoleCardProps extends PropsWithChildren {
  name: string;
}

export const RoleCard: FC<RoleCardProps> = ({ children, name }) => {
  return (
    <button className="h-100 w-76 relative h-52 overflow-clip rounded-2xl bg-white lg:h-[30rem] lg:w-[30rem]">
      <div className="flex justify-center">{children}</div>
      <h1 className="absolute bottom-[0] flex h-full w-full items-center justify-center bg-gray-dark text-center text-xl font-semibold text-white opacity-80 transition-colors hover:bg-pink-light hover:text-pink-dark hover:opacity-95 lg:text-4xl">
        {name}
      </h1>
    </button>
  );
};
