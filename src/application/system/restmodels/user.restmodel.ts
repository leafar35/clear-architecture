/* eslint-disable prettier/prettier */
export class UserRestModel {

    constructor(
        public id: number,
        public name: string, 
        public email: string,
        public password: string,
        public createAt: Date,
        public updateAt: Date
    ){}

}