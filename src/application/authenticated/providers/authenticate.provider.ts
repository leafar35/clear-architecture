/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import UserRepository from './repositories/user.repository';
import { AuthenticateDataProvider } from 'src/domain/authenticated/dataprovider/authenticate.dataprovider';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { UserModelConverter } from '../converters/usermodel.converter';

@Injectable()
export class AuthenticateProvider implements AuthenticateDataProvider {

    constructor(
        private readonly repository: UserRepository,
        private readonly converter: UserModelConverter
    ){}

    async authenticate(email: string, password: string): Promise<UserEntity> {
        const usermodel = await this.repository.findOne({
            where: { email: email, password: password}
        });
        return this.converter.mapToEntity(usermodel);
    }
  
}