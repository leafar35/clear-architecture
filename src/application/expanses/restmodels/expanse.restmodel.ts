/* eslint-disable prettier/prettier */
export class ExpanseRestModel {

    constructor(
        public id: number, 
        public description: string, 
        public amount: number,
        public type: string,
        public frequency: string,
        public date: Date
    ){}

}