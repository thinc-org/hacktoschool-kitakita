import { Controller, Get, Req, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { GoogleOauthGuard } from "./google-oauth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() req: any) {
    return req;
  }

  @Get("redirect")
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req: any) {
    return await this.authService.login(req.user);
  }
}
