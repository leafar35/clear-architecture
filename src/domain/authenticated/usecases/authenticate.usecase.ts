/* eslint-disable prettier/prettier */
export abstract class AuthenticateUseCase {

    abstract execute(email: string, password: string): Promise<string>

}