/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '../usecases/createuser.usercase';
import { UserDataProvider } from '../dataprovider/user.dataprovider';
import { CreateUserEntity } from '../entities/createuser.entity';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { customUserError } from '../exception/customuser.error';

@Injectable()
export class CreateUserService implements CreateUserUseCase {

    constructor(
        private readonly provider: UserDataProvider
    ){}
    
    async execute(entity: CreateUserEntity): Promise<UserEntity> {
        try{
            entity.password = Md5.hashStr(entity.password);
            const data = await this.provider.create(entity);
            return data;
        }catch(e){
            throw new customUserError
        }
    }

  
}