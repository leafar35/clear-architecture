/* eslint-disable prettier/prettier */
import ResponseData from 'src/utils/responsedata';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInRest } from '../restmodels/signIn.restmodel';
import { AuthenticateResource } from './authenticate.resource';
import { AuthenticateUseCase } from 'src/domain/authenticated/usecases/authenticate.usecase';

@Controller('api/authenticate')
export class AuthenticateController implements AuthenticateResource {

    constructor(
        private readonly authenticate: AuthenticateUseCase
    ){}
    
    @Post('/signIn')
    async signIn(@Body() sigin: SignInRest): Promise<ResponseData<string>> {
        try{
            const data = await this.authenticate.execute(sigin.email, sigin.password);
            return ResponseData.successful(data);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Get('/signout')
    async signOut(): Promise<ResponseData<boolean>> {
        try{
            return ResponseData.successful(false);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }
  
  
}