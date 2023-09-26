import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_list')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    userName?:string;

    @Column()
    email?:string;

    @Column()
    password:string;

    @Column()
    type?:string
}