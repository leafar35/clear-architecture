/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from '../dataprovider/expanse.dataprovider';
import { ExpanseEntity } from '../entities/expanse.entity';
import { FindExpansesUseCase } from '../usecases/findexpanses.usecase';

@Injectable()
export class FindExpanseService implements FindExpansesUseCase {

    constructor(
        private readonly provider: ExpanseDataProvider
    ){}
    
    async execute(id?: number): Promise<Array<ExpanseEntity> | ExpanseEntity> {
        const response = await this.provider.find(id);
        return response;
    }

  
}