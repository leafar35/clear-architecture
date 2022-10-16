/* eslint-disable prettier/prettier */
export class UpdateUserEntity {

    constructor(
        public id: number,
        public name: string,
        public email: string, 
        public password: string,
        public updateAt: Date = new Date(Date.now()),
    ){}

}