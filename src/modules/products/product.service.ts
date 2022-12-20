import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ){}
    async getAll() {
        return await this.productRepository.find()
    }
    async createProduct(product: CreateProductDto){
        return await this.productRepository.save(product)
    }
}
