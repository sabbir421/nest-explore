import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from './modules/post.entity';

@Module({
  imports :[
    TypeOrmModule.forFeature([FeedEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
