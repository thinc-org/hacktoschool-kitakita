import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";

import { JWTPayload } from "@kitakita/types";

import { AuthService } from "./auth.service";

// import { GoogleOauthGuard } from "./google-oauth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // Not Implemented
  // @Get()
  // @UseGuards(GoogleOauthGuard)
  // async googleAuth(@Req() req: any) {
  //   return req;
  // }

  // @Get("redirect")
  // @UseGuards(GoogleOauthGuard)
  // async googleAuthRedirect(@Req() req: any) {
  //   return await this.authService.login(req.user);
  // }

  @Post("/register")
  async register(
    @Body("username") username: string,
    @Body("password") password: string
  ) {
    return await this.authService.register(username, password);
  }

  @Post("/login")
  async login(
    @Body("username") username: string,
    @Body("password") password: string,
    @Body("role") role: JWTPayload["role"]
  ) {
    return await this.authService.login(username, password, role);
  }
}
