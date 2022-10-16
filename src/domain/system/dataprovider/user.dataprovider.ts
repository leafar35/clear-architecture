/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import { UserEntity } from "src/domain/authenticated/entities/user.entity";
import { CreateUserEntity } from "../entities/createuser.entity";
import { UpdateUserEntity } from "../entities/update.entity";

export abstract class UserDataProvider {

    abstract findAll(): Promise<Array<UserEntity>>

    abstract find(id: number): Promise<UserEntity>

    abstract create(entity: CreateUserEntity): Promise<UserEntity>

    abstract update(entity: UpdateUserEntity): Promise<UserEntity>

}