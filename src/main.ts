import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // quero definir que apenas seja enviado na requisi~ção os campos que estão definidos no DTO, qualquer outro campo que não esteja definido no DTO será ignorado 
    forbidNonWhitelisted: true, // se for enviado um campo que não está definido no DTO, a requisição será barrada
    transform: true, // transforma os tipos dos campos para o tipo definido no DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();