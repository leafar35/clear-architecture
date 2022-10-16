/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UserRestModel } from '../restmodels/user.restmodel';
import { UpdateUserRestModel } from '../restmodels/updateuser.restmodel';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { UpdateUserEntity } from 'src/domain/system/entities/update.entity';

@Injectable()
export class UpdateUserRestModelConverter {

    mapToEntity(restmodel: UpdateUserRestModel) : UpdateUserEntity {
        return new UpdateUserEntity(
            restmodel.id,
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