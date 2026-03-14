import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body
} from '@nestjs/common';

import { CartService } from './cart.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateItemDto } from './dto/update-cart-item.dto';

@Controller('user/cart')
export class CartController {

    constructor(
        private readonly cartService: CartService,
    ) { }

    @Get(':userId')
    getCart(
        @Param('userId') userId: string
    ) {
        return this.cartService.getCart(Number(userId));
    }

    @Post(':userId/items')
    addItem(
        @Param('userId') userId: string,
        @Body() adddCartItemDto: AddCartItemDto
    ) {
        return this.cartService.addItem(Number(userId), adddCartItemDto);
    }

    @Patch(':userId/items/:itemId')
    updateItem(
        @Param('userId') userId: string,
        @Param('itemId') itemId: string,
        @Body() updateItemDto: UpdateItemDto
    ) {
        return this.cartService.updateItem(
            Number(userId),
            Number(itemId),
            updateItemDto.quantity
        );
    }

    @Delete(':userId/items/:itemId')
    removeItem(
        @Param('userId') userId: string,
        @Param('itemId') itemId: string
    ) {
        return this.cartService.removeItem(Number(userId), Number(itemId));
    }

}