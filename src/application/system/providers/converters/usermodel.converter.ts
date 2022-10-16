/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import UserModel from 'src/application/authenticated/providers/models/user.model';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { CreateUserEntity } from 'src/domain/system/entities/createuser.entity';
import { UpdateUserEntity } from 'src/domain/system/entities/update.entity';

@Injectable()
export class UserModelConverters {

    mapToModelCreate(model: CreateUserEntity) : UserModel {
        return UserModel.create({
            name: model.name,
            email: model.email,
            password: model.password,
            createAt: model.createAt,
        })
    }

    mapToModelUpdate(model: UpdateUserEntity) : UserModel {
        return UserModel.create({
            name: model.name,
            email: model.email,
            password: model.password,
            updateAt: model?.updateAt
        })
    }

    mapToEntity(model: UserModel) : UserEntity{
        return new UserEntity(
            model.id,
            model.name,
            model.email,
            model.password,
            model.createAt,
            model.updateAt
        )
    }

}