/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Expanse')
export default class ExpanseModel extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    frequency: string;

    @Column()
    date: Date;

}