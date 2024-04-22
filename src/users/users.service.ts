import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaClient) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const newUser = await this.prisma.user.create({data});
        console.log(newUser)
        return newUser;
    }
}
