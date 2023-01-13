import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { PrismaService } from "./prisma.service";

import { AppController } from "./app.controller";

import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "./config/config.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "./src/@generated/schema.graphql",
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
