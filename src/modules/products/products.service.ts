import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.product.findMany();
    }

    findOne(id: number) {
        return this.prisma.product.findUnique({
            where: { id: Number(id) },
        });
    }

    async delete(id: number) {
        return this.prisma.product.delete({
            where: { id: Number(id) }
        });
    }

    async update(id: number, updatedProduct: UpdateProductDto) {
        return this.prisma.product.update({
            where: { id: Number(id) },
            data: updatedProduct
        });
    }

    async create(newProduct: CreateProductDto) {
        const category = await this.prisma.category.findUnique({
            where: { id: newProduct.categoryId }
        });

        if (!category) {
            throw new NotFoundException('Categoria não encontrada');
        }

        return this.prisma.product.create({
            data: newProduct
        });
    }

}
