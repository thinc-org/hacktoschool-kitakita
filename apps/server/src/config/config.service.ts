import { Injectable } from "@nestjs/common";
import { ConfigService as NestJSConfigService } from "@nestjs/config";

import { Configuration, defaultConfig } from "./configuration";

@Injectable()
export class ConfigService {
  constructor(private configService: NestJSConfigService) {}

  get server(): Configuration["server"] {
    return this.configService.get("server") || defaultConfig.server;
  }

  get jwt(): Configuration["jwt"] {
    return this.configService.get("jwt") || defaultConfig.jwt;
  }
}
