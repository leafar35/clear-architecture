import ResponseData from 'src/utils/responsedata';
import { SignInRest } from '../restmodels/signIn.restmodel';

/* eslint-disable prettier/prettier */
export interface AuthenticateResource {

    signIn(signin: SignInRest): Promise<ResponseData<string>>

    signOut(): Promise<ResponseData<boolean>>
  
}