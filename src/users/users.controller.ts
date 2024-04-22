import { Body, Post, Controller, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() userData: Prisma.UserCreateInput) {
        try {
            console.log(userData)
            const newUser = await this.usersService.createUser(userData);
            return newUser;
        } catch (e) {
            throw new HttpException('Не получилось создать пользователя', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
