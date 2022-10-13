/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from 'src/domain/expanses/dataprovider/expanse.dataprovider';
import { ExpanseEntity } from 'src/domain/expanses/entities/expanse.entity';
import { ExpanseModelConverter } from './converts/expanse.model.converter';
import ExpanseRepository from './repositories/expanse.repository';

@Injectable()
export class ExpanseProvider implements ExpanseDataProvider {

    constructor(
        private readonly repository: ExpanseRepository,
        private readonly converter: ExpanseModelConverter
    ){}

    async find(id: number): Promise<ExpanseEntity | ExpanseEntity[]> {
        let data: any;
        if(id){
            data = await this.repository.findOne({
                where: { id: id}
            });
            return this.converter.mapToEntity(data);
        }
        data = await this.repository.find();
        return this.converter.mapToListEntity(data);
    }

    async create(entity: ExpanseEntity): Promise<ExpanseEntity> {
        const model = this.converter.mapToModel(entity);
        const data = await this.repository.save(model);
        return this.converter.mapToEntity(data);
    }

    async Update(entity: ExpanseEntity): Promise<ExpanseEntity> {
        const data = await this.repository.save(entity);
        return this.converter.mapToEntity(data);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return (result.affected !== 0);
    }
  
}