import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import { ConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.enableCors();

  await app.listen(configService.port, configService.host);
  console.log(
    `Application is running on port ${configService.port}
Localhost endpoint => http://localhost:${configService.port}/graphql
Apollo Studio => https://studio.apollographql.com/sandbox/explorer`
  );
}

bootstrap();
