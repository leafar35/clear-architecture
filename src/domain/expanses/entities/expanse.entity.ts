/* eslint-disable prettier/prettier */
export class ExpanseEntity {

    constructor(
        public id: number, 
        public description: string, 
        public amount: number,
        public type: string,
        public frequency: string,
        public date: Date
    ){}

}