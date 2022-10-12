/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from '../dataprovider/expanse.dataprovider';
import { ExpanseEntity } from '../entities/expanse.entity';
import { CreateExpansesUseCase } from '../usecases/createexpanses.usecase';

@Injectable()
export class CreateExpanseService implements CreateExpansesUseCase {

    constructor(
        private readonly provider: ExpanseDataProvider
    ){}
    
    async execute(entity: ExpanseEntity): Promise<ExpanseEntity> {
        const response = await this.provider.create(entity);
        return response;
    }

  
}