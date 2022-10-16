/* eslint-disable prettier/prettier */
export class UpdateUserRestModel {

    constructor(
        public id: number,
        public name: string, 
        public email: string,
        public password: string,
    ){}

}