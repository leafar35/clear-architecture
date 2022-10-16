/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import { AuthenticateDataProvider } from '../dataprovider/authenticate.dataprovider';
import { AuthenticateUseCase } from '../usecases/authenticate.usecase';
import { AuthenticatedError } from '../exception/authenticate.error';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticateService implements AuthenticateUseCase {

    constructor(
        private readonly authenticate: AuthenticateDataProvider,
        private readonly jwtService: JwtService
    ){}
    
    async execute(email: string, password: string): Promise<string> {
        try{
            password = Md5.hashStr(password);
            const userentity = await this.authenticate.authenticate(email, password);
            const token = await this.jwtService.signAsync({sub: userentity.id, email: userentity.email});
            return token;
        }catch(e){
            throw new AuthenticatedError
        }
    }

  
}