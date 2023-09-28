import { Injectable, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../module/product.entity';
import { Repository } from 'typeorm';
import { productInterface } from '../module/product.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository:Repository<ProductEntity>
    ){}

    async createProduct(data:productInterface){
        return this.productRepository.save(data)
    }
    
    async getAllProducts(){
        return this.productRepository.find()
    }

    async getProduct(id:number){
        return this.productRepository.findOne({where:{id}})
    }

    async updateproduct(id:number ,data:productInterface){
        await this.productRepository.update(id,data)
        return this.productRepository.findOne({where:{id}})
    }

    async deleteProduct(id:number){
        return this.productRepository.delete(id)
    }
}
