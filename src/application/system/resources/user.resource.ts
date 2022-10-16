import ResponseData from 'src/utils/responsedata';
import { CreateUserRestModel } from '../restmodels/createuser.restmodel';
import { UpdateUserRestModel } from '../restmodels/updateuser.restmodel';
import { UserRestModel } from '../restmodels/user.restmodel';

/* eslint-disable prettier/prettier */
export interface UserResources {

  findAll(): Promise<ResponseData<Array<UserRestModel>>>

  findOne(id: number): Promise<ResponseData<UserRestModel>>

  create(restmodel: CreateUserRestModel): Promise<ResponseData<UserRestModel>>

  update(restmodel: UpdateUserRestModel): Promise<ResponseData<UserRestModel>>
  
}
