import { ExpanseEntity } from '../entities/expanse.entity';

/* eslint-disable prettier/prettier */
export abstract class CreateExpansesUseCase {

    abstract execute(entity: ExpanseEntity): Promise<ExpanseEntity>

}