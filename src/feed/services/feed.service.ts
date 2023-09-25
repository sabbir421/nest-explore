import { Repository } from 'typeorm';
import { FeedEntity } from './../modules/post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { feedpost } from '../modules/post.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedEntity)
        private readonly feedRepository:Repository<FeedEntity>
    ){}

    createPost(data:FeedEntity):Observable<FeedEntity>{
        console.log(typeof FeedEntity);
        
        return from(this.feedRepository.save(data))
    }
    async getPost():Promise<feedpost[]>{
        return this.feedRepository.find()
    }
}
