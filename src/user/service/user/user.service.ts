import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { userInterface } from 'src/user/modules/user.interface';
import { UserEntity } from 'src/user/modules/userEntity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(data:userInterface){
        console.log(data);
        return this.userRepository.save(data)
        
    }

    async getAllusers(){
        const users=this.userRepository.find()
        return users
    }

    async findOneById(id: number): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({where:{id}});
      }

     async updateUser(id:number , data:userInterface){

        await this.userRepository.update(id,data)
        return this.userRepository.findOne({where:{id}})
     } 

     async deleteUser(id:number){
        return this.userRepository.delete(id)
     }
}
