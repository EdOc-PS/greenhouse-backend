import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { type User, UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

    @Get(":id")
    getUser(@Param("id") id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body() newUser: User) {
        return this.usersService.create(newUser);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        return this.usersService.delete(id);
    }

    @Patch(":id")
    updateUser(@Param("id") id: number, @Body() updatedUser: User) {
        return this.usersService.update(id, updatedUser);
    }
}
