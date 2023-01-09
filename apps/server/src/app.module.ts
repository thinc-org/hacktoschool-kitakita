import { Global, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";

import { PrismaService } from "./prisma.service";

import { AppController } from "./app.controller";

import { ConfigModule } from "./config/config.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: "./src/@generated/schema.graphql",
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
