import { ExpanseEntity } from '../entities/expanse.entity';

/* eslint-disable prettier/prettier */
export abstract class ExpanseDataProvider {

    abstract find(id: number): Promise<Array<ExpanseEntity> | ExpanseEntity>
    
    abstract create(entity: ExpanseEntity): Promise<ExpanseEntity>

    abstract Update(entity: ExpanseEntity): Promise<ExpanseEntity>

    abstract delete(id: number): Promise<boolean>

}