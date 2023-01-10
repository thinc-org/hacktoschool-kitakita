import { JwtPayload } from "jsonwebtoken";

export type JWTPayload = JwtPayload & {
  username: string;
};
