import { Module } from '@nestjs/common';
import { UsersModule } from '@/modules/users/users.module';
import { ProductsModule } from '@/modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesService } from './modules/categories/categories.service';
import { CategoriesController } from './modules/categories/categories.controller';
import { AddressModule } from './modules/address/address.module';
import { CartModule } from './modules/cart/cart.module';



@Module({
  imports: [UsersModule, ProductsModule, AuthModule, CategoriesModule, AddressModule, CartModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})

export class AppModule {}
