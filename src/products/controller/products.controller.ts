import { ProductsService } from './../service/products.service';
import { Body, Controller, Get, Post,Param,Put,Delete } from '@nestjs/common';
import { productInterface } from '../module/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){}
    @Post()
    async createProduct(@Body() product:productInterface){
        return await this.productService.createProduct(product)
    }

    @Get()
    async getAllProducts(){
        const products= await this.productService.getAllProducts()
        if(!products){
            return "No product available"
        }
        return products
    }

    @Get(':id')
    async getProduct(@Param('id') id:number){
        const product=await this.productService.getProduct(id)
        if(!product){
            return "product didn't exist"
        }
        return product
    }

    @Put(':id')
    async updateProduct(@Param('id') id:number, @Body() data:productInterface){
        const productExist=await this.productService.getProduct(id)
        if(!productExist){
            return "product didn't exist"
        }
        return await this.productService.updateproduct(id,data)
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id:number){
        const productExist=await this.productService.getProduct(id)
        if(!productExist){
            return "product didn't exist"
        }
     await this.productService.deleteProduct(id)
     return "Product delete successfully"
    }
}
