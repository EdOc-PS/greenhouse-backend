import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiResponse } from '@common/dto/response.dto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productsService.findAll();
    }

    @Get(":id")
    getUser(@Param("id") id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    async createProduct(@Body() newProduct: CreateProductDto): Promise<ApiResponse<Product>> {
        const product = await this.productsService.create(newProduct);

        return {
            success: true,
            message: 'Produto criado com sucesso!',
            object: product
        }
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        return this.productsService.delete(id);
    }

    @Patch(":id")
    updateUser(@Param("id") id: number, @Body() updatedProduct: UpdateProductDto) {
        return this.productsService.update(id, updatedProduct);
    }
}
