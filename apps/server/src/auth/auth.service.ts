import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { JWTPayload } from "@kitakita/types";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: JWTPayload) {
    const payload: JWTPayload = {
      sub: user.username,
      username: user.username,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }
}
