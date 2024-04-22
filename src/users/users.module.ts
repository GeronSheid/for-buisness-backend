import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [UsersService, PrismaService, PrismaClient],
  controllers: [UsersController]
})
export class UsersModule {}
