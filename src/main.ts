import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PrismaService } from './database/prisma.service';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.onModuleInit();

  await app.listen(PORT);
}
bootstrap();
