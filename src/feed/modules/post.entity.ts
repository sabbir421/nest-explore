import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity('feed_post')
export class FeedEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:''})
    body:string;
    
    @Column({default:''})
    title:string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date
}