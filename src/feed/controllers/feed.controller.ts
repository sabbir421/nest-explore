import { FeedService } from '../services/feed.service';


import { Controller,Post,Body ,Get} from '@nestjs/common';
import { feedpost } from '../modules/post.interface';
import { Observable } from 'rxjs';
import { FeedEntity } from '../modules/post.entity';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @Post()
    create(@Body() post:FeedEntity):Observable<FeedEntity> {
       
        const data:any={
            body:post.body,
            title:"this is title"
        }
        console.log(data);
        
        return this.feedService.createPost(data);
    }
    @Get()
    async getPost():Promise<feedpost[]>{
        const post = await this.feedService.getPost()
        console.log(post); 
        return post
    }
}