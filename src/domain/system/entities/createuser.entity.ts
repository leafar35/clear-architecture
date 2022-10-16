/* eslint-disable prettier/prettier */
export class CreateUserEntity {

    constructor(
        public name: string,
        public email: string, 
        public password: string,
        public createAt: Date = new Date(Date.now()),
    ){}

}