import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
    constructor(
        private readonly producService: ProductsService
    ){}
    @Get()
    async findAll() {
        return await this.producService.getAll()
    }
    @Post()
    async create(@Body() createUserDto:CreateProductDto){
        return await this.producService.createProduct(createUserDto)
    }
}
