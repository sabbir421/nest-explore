import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserEntity } from '../modules/userEntity';
import { userInterface } from '../modules/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    async createUser(@Body() user:userInterface){
      const data=  await this.userService.createUser(user)
        return data  
    }

    @Get()
    async getAllUser(){
        const users=await this.userService.getAllusers()
        console.log("------------users----------",users);
        return users
    }

    @Get(':id')
    async getUser(@Param('id') id:number){
        const user=await this.userService.findOneById(id)
        console.log("-------------------user-----------",user);
        return user
        
    }

    @Put(':id')
  async  updateUser(@Param('id') id:number, @Body() data:userInterface){
    const userExist= await this.userService.findOneById(id)
    if(!userExist){
      return "user didn't exist" 
    }
   const updatedUser= await this.userService.updateUser(id,data)
   return updatedUser
    
  }

    @Delete(':id')
    async deleteUser(@Param('id')id:number){
        await this.userService.deleteUser(id)
        return "user delete successfully"
    }
}
