import { ExpanseRestModel } from '../restmodels/expanse.restmodel';

/* eslint-disable prettier/prettier */
export interface ExpansesResources {

  findAll(): Promise<Array<ExpanseRestModel>>

  findOne(id: number): Promise<ExpanseRestModel>

  create(restmodel: ExpanseRestModel): Promise<ExpanseRestModel>

  update(id: number, restmodel: ExpanseRestModel): Promise<ExpanseRestModel>

  delete(id: number): Promise<boolean>
  
}
