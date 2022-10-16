import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { CreateUserEntity } from '../entities/createuser.entity';

/* eslint-disable prettier/prettier */
export abstract class CreateUserUseCase {

    abstract execute(entity: CreateUserEntity): Promise<UserEntity>

}