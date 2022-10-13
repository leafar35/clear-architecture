import ResponseData from 'src/utils/responsedata';
import { ExpanseRestModel } from '../restmodels/expanse.restmodel';

/* eslint-disable prettier/prettier */
export interface ExpansesResources {

  findAll(): Promise<ResponseData<Array<ExpanseRestModel>>>

  findOne(id: number): Promise<ResponseData<ExpanseRestModel>>

  create(restmodel: ExpanseRestModel): Promise<ResponseData<ExpanseRestModel>>

  update(id: number, restmodel: ExpanseRestModel): Promise<ResponseData<ExpanseRestModel>>

  delete(id: number): Promise<ResponseData<boolean>>
  
}
