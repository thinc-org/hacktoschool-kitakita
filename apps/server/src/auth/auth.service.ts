import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import * as bcrypt from "bcrypt";

import { JWTPayload } from "@kitakita/types";

import { ConfigService } from "src/config/config.service";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  // async login(user: JWTPayload) {
  //   const payload: JWTPayload = {
  //     sub: user.username,
  //     username: user.username,
  //     role: user.role,
  //   };

  //   return this.jwtService.sign(payload);
  // }

  async register(username: string, password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(
      password,
      this.configService.bcrypt.salt
    );
    const user = await this.prisma.user.create({
      data: { username, hashedPassword },
    });

    return user.username;
  }

  async login(
    username: string,
    password: string,
    role: JWTPayload["role"]
  ): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: { username: username },
    });
    const comparePassword = bcrypt.compareSync(
      password,
      user === null ? "" : user.hashedPassword
    );

    if (user && comparePassword) {
      const payload: JWTPayload = {
        sub: user.username,
        username: user.username,
        role: role,
      };

      return this.jwtService.sign(payload);
    }
    return "";
  }
}
