/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { ExpanseDataProvider } from 'src/domain/expanses/dataprovider/expanse.dataprovider';
import { ExpanseEntity } from 'src/domain/expanses/entities/expanse.entity';

@Injectable()
export class ExpanseProvider implements ExpanseDataProvider {

    async find(id: number): Promise<ExpanseEntity | ExpanseEntity[]> {
        return [
            new ExpanseEntity(1,'nergia elétrica', 150.55, 'saída', 'recorrente', new Date('2020-01-10')),
            new ExpanseEntity(2,'Água', 77.55, 'saída', 'recorrente', new Date('2020-01-10')),
            new ExpanseEntity(3,'Telefone', 50.55, 'saída', 'recorrente', new Date('2020-01-10')),
            new ExpanseEntity(4,'Plano de Saúde', 43.55, 'saída', 'recorrente', new Date('2020-01-10')),
            new ExpanseEntity(5,'ompras do mês', 10.55, 'saída', 'eventual', new Date('2020-01-10')),
            new ExpanseEntity(1,'Lanche', 85.55, 'saída', 'eventual', new Date('2020-01-10')),
        ]
    }

    async create(entity: ExpanseEntity): Promise<ExpanseEntity> {
        return new ExpanseEntity(1,'nergia elétrica', 150.55, 'saída', 'recorrente', new Date('2020-01-10'));
    }

    async Update(entity: ExpanseEntity): Promise<ExpanseEntity> {
        return new ExpanseEntity(1,'nergia elétrica', 150.55, 'saída', 'recorrente', new Date('2020-01-10'));
    }

    async delete(id: number): Promise<boolean> {
        return true;
    }
  
}