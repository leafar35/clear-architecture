/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseEntity } from 'src/domain/expanses/entities/expanse.entity';
import ExpanseModel from '../models/expanse.model';

@Injectable()
export class ExpanseModelConverter {

    mapToEntity(model: ExpanseModel) : ExpanseEntity {
        return new ExpanseEntity(
            model.id,
            model.description,
            model.amount,
            model.type,
            model.frequency,
            model.date
        );
    }

    mapToListEntity(models: Array<ExpanseModel>) : Array<ExpanseEntity> {
        return models.map(at => new ExpanseEntity(at.id, at.description, at.amount, at.type, at.frequency, at.date));
    }

    mapToModel(entity: ExpanseEntity) : ExpanseModel {
        return ExpanseModel.create({
            id: null,
            description: entity.description, 
            amount: entity.amount,
            type: entity.type,
            frequency: entity.frequency,
            date: entity.date
        });
    }

}