import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import { OAuth2Strategy, Profile } from "passport-google-oauth";

import { ConfigService } from "src/config/config.service";

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(
  OAuth2Strategy,
  "google"
) {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.googleOAuth.clientID,
      clientSecret: configService.googleOAuth.clientSecret,
      callbackURL: configService.googleOAuth.callbackURL,
      scope: ["email", "profile"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { emails, id, name } = profile;

    return {
      provider: "google",
      providerId: id,
      name: name,
      username: emails?.[0].value,
    };
  }
}
