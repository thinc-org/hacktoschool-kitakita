import { FC, PropsWithChildren } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
