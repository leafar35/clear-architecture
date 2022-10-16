/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UserRestModel } from '../restmodels/user.restmodel';
import { UserEntity } from 'src/domain/authenticated/entities/user.entity';

@Injectable()
export class UsersRestModelsConverters {

    mapToRestModel(restmodelS: UserEntity[]) : UserRestModel[] {
        return restmodelS.map(element => new UserRestModel(element.id, element.name, element.email, element.password, element.createAt, element.updateAt));
    }
      
}