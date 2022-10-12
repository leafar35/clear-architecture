import { ExpanseEntity } from '../entities/expanse.entity';

/* eslint-disable prettier/prettier */
export abstract class FindExpansesUseCase {

    abstract execute(id?: number): Promise<Array<ExpanseEntity> | ExpanseEntity>

}