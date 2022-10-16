/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from '../dataprovider/expanse.dataprovider';
import { ExpanseEntity } from '../entities/expanse.entity';
import { ExpansesCustomError } from '../exception/expanses.error';
import { FindExpansesUseCase } from '../usecases/findexpanses.usecase';

@Injectable()
export class FindExpanseService implements FindExpansesUseCase {

    constructor(
        private readonly provider: ExpanseDataProvider
    ){}
    
    async execute(id?: number): Promise<Array<ExpanseEntity> | ExpanseEntity> {
        try{
            const response = await this.provider.find(id);
            return response;
        }catch(e){
            throw new ExpansesCustomError
        }
    }

  
}