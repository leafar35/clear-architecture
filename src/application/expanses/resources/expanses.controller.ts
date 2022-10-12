/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ExpansesResources } from './expanses.resource';
import { ExpanseRestModel } from '../restmodels/expanse.restmodel';
import { FindExpansesUseCase } from 'src/domain/expanses/usecases/findexpanses.usecase';
import { CreateExpansesUseCase } from 'src/domain/expanses/usecases/createexpanses.usecase';
import { UpdateExpansesUseCase } from 'src/domain/expanses/usecases/updateexpanses.usecase';
import { DeleteExpansesUseCase } from 'src/domain/expanses/usecases/deleteexpanses.usecase';
import { ExpanseRestModelConverter } from '../converters/expanse.restmodel.converter';
import { ExpanseRestModelConverterArray } from '../converters/expanse.restmodel.converterArray';

@Controller('api/expanses')
export class ExpansesController implements ExpansesResources {

    constructor(
        private readonly findE: FindExpansesUseCase,
        private readonly creatE: CreateExpansesUseCase,
        private readonly updatE: UpdateExpansesUseCase,
        private readonly deletE: DeleteExpansesUseCase,
        private readonly convert: ExpanseRestModelConverter,
        private readonly convertA: ExpanseRestModelConverterArray
    ){}
    
    @Get()
    async findAll(): Promise<Array<ExpanseRestModel>> {
        const response = await this.findE.execute();
        if(!Array.isArray(response))
            throw new Error('Não é um array');
        const data = this.convertA.mapToRestModel(response);
        return data;
    }

    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<ExpanseRestModel> {
        const response = await this.findE.execute(id);
        if(Array.isArray(response))
            throw new Error('é um array');
        const data = this.convert.mapToRestModel(response);
        return data;
    }

    @Post()
    async create(@Body() restmodel: ExpanseRestModel): Promise<ExpanseRestModel> {
        const entity = this.convert.mapToEntity(restmodel);
        const response = await this.creatE.execute(entity);
        return response;
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() restmodel: ExpanseRestModel): Promise<ExpanseRestModel> {
        const entity = this.convert.mapToEntity(restmodel);
        const response = await this.updatE.execute(entity);
        return response;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.deletE.execute(id);
    }
  
  
}