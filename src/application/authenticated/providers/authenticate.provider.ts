/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import UserRepository from './repositories/user.repository';
import { AuthenticateDataProvider } from 'src/domain/authenticated/dataprovider/authenticate.dataprovider';

@Injectable()
export class AuthenticateProvider implements AuthenticateDataProvider {

    constructor(
        private readonly repository: UserRepository,
    ){}

    async authenticate(email: string, password: string): Promise<string> {
        const token = await this.repository.findOne({
            where: { email: email, password: password}
        });
        return Md5.hashStr(`${token.email}${token.password}`);
    }
  
}