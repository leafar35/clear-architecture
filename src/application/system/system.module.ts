/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDataProvider } from 'src/domain/system/dataprovider/user.dataprovider';
import { CreateUserService } from 'src/domain/system/sesrvices/createuser.service';
import { getUsersOrUserService } from 'src/domain/system/sesrvices/getuser.service';
import { UpdateUserService } from 'src/domain/system/sesrvices/updateuser.service';
import { CreateUserUseCase } from 'src/domain/system/usecases/createuser.usercase';
import { GetUserUseCase } from 'src/domain/system/usecases/getuser.usecase';
import { UpdateUserUseCase } from 'src/domain/system/usecases/updateuser.usecase';
import { UserModelConverter } from '../authenticated/converters/usermodel.converter';
import UserModel from '../authenticated/providers/models/user.model';
import UserRepository from '../authenticated/providers/repositories/user.repository';
import { CreateUserRestModelConverter } from './converters/createuser.restmodel.converter';
import { UpdateUserRestModelConverter } from './converters/updateuser.restmodel.converter';
import { UsersRestModelsConverters } from './converters/users.restmodel.converter';
import { UserModelConverters } from './providers/converters/usermodel.converter';
import { UsersModelConverters } from './providers/converters/usersmodels.converters';
import { UserProvider } from './providers/user.provider';
import { UserController } from './resources/user.controller';

const providerExporte = {
    provide: UserDataProvider,
    useClass: UserProvider,
  };

const findusersExporte = {
  provide: GetUserUseCase,
  useClass: getUsersOrUserService,
};

const createusersExporte = {
  provide: CreateUserUseCase,
  useClass: CreateUserService,
};

const updateUSERSExporte = {
  provide: UpdateUserUseCase,
  useClass: UpdateUserService,
};

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([UserModel]),
  ],
  controllers: [UserController],
  providers: [
    UserModelConverters,
    UserModelConverter,
    UsersModelConverters,
    CreateUserRestModelConverter,
    UpdateUserRestModelConverter,
    UsersRestModelsConverters,
    providerExporte,
    findusersExporte,
    createusersExporte,
    updateUSERSExporte,
    UserRepository
  ],
})
export class SystemModule {}
