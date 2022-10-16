/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import { UserDataProvider } from '../dataprovider/user.dataprovider';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { customUserError } from '../exception/customuser.error';
import { UpdateUserEntity } from '../entities/update.entity';
import { UpdateUserUseCase } from '../usecases/updateuser.usecase';

@Injectable()
export class UpdateUserService implements UpdateUserUseCase {

    constructor(
        private readonly provider: UserDataProvider
    ){}
    
    async execute(entity: UpdateUserEntity): Promise<UserEntity> {
        try{
            const data = await this.provider.update(entity);
            data.password = Md5.hashStr(data.password);
            return data;
        }catch(e){
            throw new customUserError
        }
    }

  
}