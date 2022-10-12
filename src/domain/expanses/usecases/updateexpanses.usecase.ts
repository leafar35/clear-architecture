import { ExpanseEntity } from '../entities/expanse.entity';

/* eslint-disable prettier/prettier */
export abstract class UpdateExpansesUseCase {

    abstract execute(entity: ExpanseEntity): Promise<ExpanseEntity>

}