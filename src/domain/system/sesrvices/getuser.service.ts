/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { UserDataProvider } from '../dataprovider/user.dataprovider';
import { customUserError } from '../exception/customuser.error';
import { GetUserUseCase } from '../usecases/getuser.usecase';

@Injectable()
export class getUsersOrUserService implements GetUserUseCase {

    constructor(
        private readonly provider: UserDataProvider
    ){}
    
    async execute(id?: number): Promise<Array<UserEntity> | UserEntity> {
        try{
            if(!id)
                return await this.provider.findAll();
            return await this.provider.find(id);
        }catch(e){
            throw new customUserError('Não foi possivel pegar o(s) usuário(s)');
        }
    }

  
}