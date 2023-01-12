import { JwtPayload } from "jsonwebtoken";

export type JWTPayload = JwtPayload & {
  username: string;
  role: "student" | "instructor" | "onboarding" | "admin";
};
