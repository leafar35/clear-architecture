/* eslint-disable prettier/prettier */
import ResponseData from 'src/utils/responsedata';
import { UserResources } from './user.resource';
import { UserRestModel } from '../restmodels/user.restmodel';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateUserRestModel } from '../restmodels/updateuser.restmodel';
import { CreateUserRestModel } from '../restmodels/createuser.restmodel';
import { GetUserUseCase } from 'src/domain/system/usecases/getuser.usecase';
import { CreateUserUseCase } from 'src/domain/system/usecases/createuser.usercase';
import { UpdateUserUseCase } from 'src/domain/system/usecases/updateuser.usecase';
import { CreateUserRestModelConverter } from '../converters/createuser.restmodel.converter';
import { UpdateUserRestModelConverter } from '../converters/updateuser.restmodel.converter';
import { UsersRestModelsConverters } from '../converters/users.restmodel.converter';

@Controller('api/users')
export class UserController implements UserResources {

    constructor(
        private readonly findE: GetUserUseCase,
        private readonly creatE: CreateUserUseCase,
        private readonly updatE: UpdateUserUseCase,
        private readonly convertc: CreateUserRestModelConverter,
        private readonly convertu: UpdateUserRestModelConverter,
        private readonly converta: UsersRestModelsConverters
    ){}
    
    @Get()
    async findAll(): Promise<ResponseData<Array<UserRestModel>>> {
        try{
            const response = await this.findE.execute();
            if(!Array.isArray(response))
                throw new Error('Não é um array');
            const data = this.converta.mapToRestModel(response);
            return ResponseData.successful(data);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<ResponseData<UserRestModel>> {
        try{
            const response = await this.findE.execute(id);
            if(Array.isArray(response))
                throw new Error('é um array');
            const data = this.convertc.mapToRestModel(response);
            return ResponseData.successful(data);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Post()
    async create(@Body() restmodel: CreateUserRestModel): Promise<ResponseData<UserRestModel>> {
        try{
            const entity = this.convertc.mapToEntity(restmodel);
            const data = await this.creatE.execute(entity);
            const response = this.convertc.mapToRestModel(data);
            return ResponseData.successful(response);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Put('/:id')
    async update(@Body() restmodel: UpdateUserRestModel): Promise<ResponseData<UserRestModel>> {
        try{
            const entity = this.convertu.mapToEntity(restmodel);
            const data = await this.updatE.execute(entity);
            const response = this.convertc.mapToRestModel(data);
            return ResponseData.successful(response);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }
  
  
}