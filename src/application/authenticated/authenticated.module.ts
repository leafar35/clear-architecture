/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './providers/models/user.model';
import UserRepository from './providers/repositories/user.repository';
import { AuthenticateProvider } from './providers/authenticate.provider';
import { AuthenticateController } from './resources/authenticate.controller';
import { AuthenticateService } from 'src/domain/authenticated/services/authenticate.service';
import { AuthenticateUseCase } from 'src/domain/authenticated/usecases/authenticate.usecase';
import { AuthenticateDataProvider } from 'src/domain/authenticated/dataprovider/authenticate.dataprovider';
import { UserModelConverter } from './converters/usermodel.converter';
import { JwtModule } from '@nestjs/jwt';

const authenticatedataproviderexport = {
  provide: AuthenticateDataProvider,
  useClass: AuthenticateProvider,
};

const authenticateexportusecase = {
  provide: AuthenticateUseCase,
  useClass: AuthenticateService,
};

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    JwtModule.register({
      secret: '123456',
      signOptions: { expiresIn: '1d'}
    }),
    TypeOrmModule.forFeature([UserModel, UserRepository]),
  ],
  controllers: [AuthenticateController],
  providers: [
    UserModelConverter,
    authenticatedataproviderexport,
    authenticateexportusecase,
    UserRepository
  ],
})
export class AuthenticatedModule {}
