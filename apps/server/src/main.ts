import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

import { ConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Kitakita")
    .setDescription("KitaKita API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(configService.port, configService.host);
  console.log(
    `Application is running on port ${configService.port}
Localhost endpoint => http://localhost:${configService.port}/graphql
Apollo Studio => https://studio.apollographql.com/sandbox/explorer`
  );
}

bootstrap();
