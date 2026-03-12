import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { ApiResponse } from '@/common/dto/response.dto';
import { Address } from '@prisma/client';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Get()
    getAll() {
        return this.addressService.findAll();
    }

    @Post()
    async createAddress(@Body() newAddress: CreateAddressDto): Promise<ApiResponse<Address>> {
        const address = await this.addressService.create(newAddress);

        return {
            success: true,
            message: 'Endereço criado com sucesso!',
            object: address
        }
    }

    @Delete(":id")
    delete(@Param("id") id: number) {
        return this.addressService.delete(id);
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() updatedAddress: UpdateAddressDto) {
        return this.addressService.update(id, updatedAddress);
    }
}
