/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import UserModel from 'src/application/authenticated/providers/models/user.model';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';

@Injectable()
export class UsersModelConverters {

    mapToEntity(models: UserModel[]) : UserEntity[] {
        return models.map(model => new UserEntity(
            model.id,
            model.name,
            model.email,
            model.password,
            model.createAt,
            model.updateAt
        ));
    }

}