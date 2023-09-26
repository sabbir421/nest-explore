import { Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { UserController } from './controller/user.controller';
import { UserEntity } from './modules/userEntity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports :[
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
