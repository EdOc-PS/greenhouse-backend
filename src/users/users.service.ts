import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
    id?: number;
    name: string;
    email: string;
}

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.user.findMany();
    }

    async create(newUser: User) {
        return this.prisma.user.create({
            data: newUser
        });
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id: Number(id) },
        });
    }

    async delete(id: number) {
        return this.prisma.user.delete({
            where: { id: Number(id) }
        });
    }

    async update(id: number, updatedUser: User) {
        return this.prisma.user.update({
            where: { id: Number(id) },
            data: updatedUser
        });
    }


}
