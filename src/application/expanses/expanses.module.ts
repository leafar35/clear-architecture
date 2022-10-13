/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpanseDataProvider } from 'src/domain/expanses/dataprovider/expanse.dataprovider';
import { CreateExpanseService } from 'src/domain/expanses/services/createexpanses.service';
import { DeleteExpanseService } from 'src/domain/expanses/services/deleteexpanses.service';
import { FindExpanseService } from 'src/domain/expanses/services/findexpanses.service';
import { UpdateExpanseService } from 'src/domain/expanses/services/updateexpanses.service';
import { CreateExpansesUseCase } from 'src/domain/expanses/usecases/createexpanses.usecase';
import { DeleteExpansesUseCase } from 'src/domain/expanses/usecases/deleteexpanses.usecase';
import { FindExpansesUseCase } from 'src/domain/expanses/usecases/findexpanses.usecase';
import { UpdateExpansesUseCase } from 'src/domain/expanses/usecases/updateexpanses.usecase';
import { ExpanseRestModelConverter } from './converters/expanse.restmodel.converter';
import { ExpanseRestModelConverterArray } from './converters/expanse.restmodel.converterArray';
import { ExpanseModelConverter } from './providers/converts/expanse.model.converter';
import { ExpanseProvider } from './providers/expnse.provider';
import ExpanseModel from './providers/models/expanse.model';
import ExpanseRepository from './providers/repositories/expanse.repository';
import { ExpansesController } from './resources/expanses.controller';

const expansiveprovider = {
  provide: ExpanseDataProvider,
  useClass: ExpanseProvider,
};

const findExpansiveExporte = {
  provide: FindExpansesUseCase,
  useClass: FindExpanseService,
};

const createExpansiveExporte = {
  provide: CreateExpansesUseCase,
  useClass: CreateExpanseService,
};

const updateExpansiveExporte = {
  provide: UpdateExpansesUseCase,
  useClass: UpdateExpanseService,
};

const deleteExpansiveExporte = {
  provide: DeleteExpansesUseCase,
  useClass: DeleteExpanseService,
};

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([ExpanseModel]),
  ],
  controllers: [ExpansesController],
  providers: [
    ExpanseRestModelConverterArray,
    ExpanseRestModelConverter,
    ExpanseModelConverter,
    expansiveprovider,
    createExpansiveExporte,
    updateExpansiveExporte,
    deleteExpansiveExporte,
    findExpansiveExporte,
    ExpanseRepository
  ],
})
export class ExpansesModule {}
