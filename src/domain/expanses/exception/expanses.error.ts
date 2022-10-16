/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export class ExpansesCustomError extends Error {
    constructor(message: string = "Não foi possivel criar ou atualizar o expanse") {
        super(message);
    }
}