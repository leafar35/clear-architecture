/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticatedModule } from './application/authenticated/authenticated.module';
import { ExpansesModule } from './application/expanses/expanses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "mywallet",
      entities: [__dirname + "/**/*.model{.ts,.js}"],
      synchronize: true
    }),
    ExpansesModule,
    AuthenticatedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
