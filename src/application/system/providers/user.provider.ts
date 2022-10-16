/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { UserDataProvider } from 'src/domain/system/dataprovider/user.dataprovider';
import { CreateUserEntity } from 'src/domain/system/entities/createuser.entity';
import { UpdateUserEntity } from 'src/domain/system/entities/update.entity';
import UserRepository from 'src/application/authenticated/providers/repositories/user.repository';
import { UsersModelConverters } from './converters/usersmodels.converters';
import { UserModelConverters } from './converters/usermodel.converter';

@Injectable()
export class UserProvider implements UserDataProvider {

    constructor(
        private readonly repository: UserRepository,
        private readonly converter: UsersModelConverters,
        private readonly converterOne: UserModelConverters
    ){}

    async findAll(): Promise<Array<UserEntity>> {
        const data = await this.repository.find();
        const entity = this.converter.mapToEntity(data);
        return entity;
    }

    async find(id: number): Promise<UserEntity> {
        const data = await this.repository.findOne({
            where: { id: id}
        })
        const entity = this.converterOne.mapToEntity(data);
        return entity;
    }

    async create(entity: CreateUserEntity): Promise<UserEntity> {
        const model = this.converterOne.mapToModelCreate(entity);
        const data = await this.repository.save(model);
        const response = this.converterOne.mapToEntity(data);
        return response
    }

    async update(entity: UpdateUserEntity): Promise<UserEntity> {
        const data = await this.repository.save(entity);
        const response = this.converterOne.mapToEntity(data);
        return response
    }
  
}