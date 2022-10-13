/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BaseEntity } from "typeorm";

export default abstract class DataProvider<T extends BaseEntity, ID extends any> {
   
    findById(id: ID): Promise<T>{
        throw new Error('Method not implemented!');
    }

    findAll(): Promise<T>{
        throw new Error('Method not implemented!');
    }

    save(obj: T): Promise<T>{
        throw new Error('Method not implemented!');
    }

    deleteById(id: ID): Promise<T>{
        throw new Error('Method not implemented!');
    }

    delete(obj: T): Promise<T>{
        throw new Error('Method not implemented!');
    }

}