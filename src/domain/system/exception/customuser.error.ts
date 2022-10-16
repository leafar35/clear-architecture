/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export class customUserError extends Error {
    constructor(message: string = "Não foi possivel criar ou atualizar o usuário!") {
        super(message);
    }
}