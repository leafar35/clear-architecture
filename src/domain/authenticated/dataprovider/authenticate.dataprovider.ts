/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { UserEntity } from "../entities/user.entity";

export abstract class AuthenticateDataProvider {

    abstract authenticate(email: string, password: string): Promise<UserEntity>

}