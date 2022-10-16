/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export class AuthenticatedError extends Error {
    constructor(message: string = "Não foi possivel authenticar, verifique suas credenciais!") {
        super(message);
    }
}