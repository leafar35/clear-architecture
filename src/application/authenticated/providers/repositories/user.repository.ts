/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import UserModel from "../models/user.model";

@Injectable()
export default class UserRepository extends Repository<UserModel> {

    constructor(private dataSource: DataSource){
        super(UserModel, dataSource.createEntityManager());
    }

}