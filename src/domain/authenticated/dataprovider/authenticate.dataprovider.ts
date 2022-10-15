/* eslint-disable prettier/prettier */
export abstract class AuthenticateDataProvider {

    abstract authenticate(email: string, password: string): Promise<string>

}