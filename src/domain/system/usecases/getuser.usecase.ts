import { UserEntity } from 'src/domain/authenticated/entities/user.entity';

/* eslint-disable prettier/prettier */
export abstract class GetUserUseCase {

    abstract execute(id?: number): Promise<UserEntity | Array<UserEntity>>

}