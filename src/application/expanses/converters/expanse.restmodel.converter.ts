/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseEntity } from 'src/domain/expanses/entities/expanse.entity';
import { ExpanseRestModel } from '../restmodels/expanse.restmodel';

@Injectable()
export class ExpanseRestModelConverter {

    mapToEntity(restmodel: ExpanseRestModel) : ExpanseEntity {
        return new ExpanseEntity(
            restmodel.id,
            restmodel.description,
            restmodel.amount,
            restmodel.type,
            restmodel.frequency,
            restmodel.date
        );
    }

    mapToRestModel(entity: ExpanseEntity) : ExpanseRestModel {
        return new ExpanseRestModel(
            entity.id,
            entity.description,
            entity.amount,
            entity.type,
            entity.frequency,
            entity.date
        );
    }
      
}