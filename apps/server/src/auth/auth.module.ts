import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
// import { GoogleOAuthStrategy } from "./google-oauth.strategy";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.jwt.secret,
          signOptions: {
            expiresIn: configService.jwt.expire,
          },
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    ConfigModule,
  ],
  providers: [AuthService, JwtStrategy /*, GoogleOAuthStrategy*/],
  controllers: [AuthController],
})
export class AuthModule {}
