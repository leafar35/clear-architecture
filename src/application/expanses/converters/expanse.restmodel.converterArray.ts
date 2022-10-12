/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseEntity } from 'src/domain/expanses/entities/expanse.entity';
import { ExpanseRestModel } from '../restmodels/expanse.restmodel';

@Injectable()
export class ExpanseRestModelConverterArray {

    mapToRestModel(entitys: ExpanseEntity[]) : ExpanseRestModel[] {
        return entitys.map(element => new ExpanseRestModel(element.id, element.description, element.amount, element.type, element.frequency, element.date));
    }
      
}