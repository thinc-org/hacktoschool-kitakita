import { NextPage } from "next";

import { layouts } from "../layouts";

export type MyPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  layout?: keyof typeof layouts;
  access?: "everyone" | "student" | "instructor" | "user" | "admin";
};
