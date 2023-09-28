import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_list')
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    title:string

    @Column()
    price:number
}