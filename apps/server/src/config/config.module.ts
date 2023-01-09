import { Module } from "@nestjs/common";
import { ConfigModule as NestJSConfigModule } from "@nestjs/config";

import { ConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [
    NestJSConfigModule.forRoot({
      envFilePath: "../../.env",
      load: [configuration],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
