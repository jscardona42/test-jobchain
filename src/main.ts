import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassTransformer } from 'class-transformer';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
