/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import { AuthenticateDataProvider } from '../dataprovider/authenticate.dataprovider';
import { AuthenticateUseCase } from '../usecases/authenticate.usecase';

@Injectable()
export class AuthenticateService implements AuthenticateUseCase {

    constructor(
        private readonly authenticate: AuthenticateDataProvider
    ){}
    
    async execute(email: string, password: string): Promise<string> {
        try{
            password = Md5.hashStr(password);
            const response = await this.authenticate.authenticate(email, password);
            return response;
        }catch(e){
            throw new Error('Não foi possivel autenticar!')
        }
    }

  
}