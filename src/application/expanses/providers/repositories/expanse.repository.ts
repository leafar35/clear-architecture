/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import ExpanseModel from "../models/expanse.model";
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ExpanseRepository extends Repository<ExpanseModel> {

    constructor(private dataSource: DataSource){
        super(ExpanseModel, dataSource.createEntityManager());
    }

}