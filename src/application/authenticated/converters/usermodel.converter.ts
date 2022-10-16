/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import UserModel from '../providers/models/user.model';

@Injectable()
export class UserModelConverter {

    mapToEntity(model: UserModel) : UserEntity {
        return new UserEntity(
            model.id,
            model.name,
            model.email,
            model.password,
            model.createAt,
            model.updateAt
        );
    }

}