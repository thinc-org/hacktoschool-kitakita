import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

import { ConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(ConfigService);
  app.enableCors();

  await app.listen(configService.server.port, configService.server.host);
  console.log(
    `Application is running on port ${configService.server.port}
Localhost endpoint => http://localhost:${configService.server.port}/graphql
Apollo Studio => https://studio.apollographql.com/sandbox/explorer`
  );
}

bootstrap();
