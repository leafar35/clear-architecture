import { UserEntity } from 'src/domain/authenticated/entities/user.entity';
import { UpdateUserEntity } from '../entities/update.entity';

/* eslint-disable prettier/prettier */
export abstract class UpdateUserUseCase {

    abstract execute(entity: UpdateUserEntity): Promise<UserEntity>

}