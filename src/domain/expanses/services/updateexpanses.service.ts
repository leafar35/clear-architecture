/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from '../dataprovider/expanse.dataprovider';
import { ExpanseEntity } from '../entities/expanse.entity';
import { UpdateExpansesUseCase } from '../usecases/updateexpanses.usecase';

@Injectable()
export class UpdateExpanseService implements UpdateExpansesUseCase {

    constructor(
        private readonly provider: ExpanseDataProvider
    ){}
    
    async execute(entity: ExpanseEntity): Promise<ExpanseEntity> {
        const response = await this.provider.Update(entity);
        return response;
    }

  
}