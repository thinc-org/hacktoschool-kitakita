import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";

import { AuthService } from "./auth.service";

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
  providers: [AuthService],
})
export class AuthModule {}
