/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from '../dataprovider/expanse.dataprovider';
import { ExpansesCustomError } from '../exception/expanses.error';
import { DeleteExpansesUseCase } from '../usecases/deleteexpanses.usecase';

@Injectable()
export class DeleteExpanseService implements DeleteExpansesUseCase {

    constructor(
        private readonly provider: ExpanseDataProvider
    ){}
    
    async execute(id: number): Promise<boolean> {
        try{
            const response = await this.provider.delete(id);
            return response;
        }catch(e){
            throw new ExpansesCustomError;
        }
    }

  
}