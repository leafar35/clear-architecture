/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export default class UserModel extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    createAt?: Date;

    @Column({nullable: true})
    updateAt?: Date;

}