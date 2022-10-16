/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { CreateUserEntity } from 'src/domain/system/entities/createuser.entity';
import { CreateUserRestModel } from '../restmodels/createuser.restmodel';
import { UserRestModel } from '../restmodels/user.restmodel';

@Injectable()
export class CreateUserRestModelConverter {

    mapToEntity(restmodel: CreateUserRestModel) : CreateUserEntity {
        return new CreateUserEntity(
            restmodel.name,
            restmodel.email,
            restmodel.password,
        );
    }

    mapToRestModel(entity: UserEntity) : UserRestModel {
        return new UserRestModel(
            entity.id,
            entity.name,
            entity.email,
            entity.password,
            entity.createAt,
            entity.updateAt
        );
    }
      
}