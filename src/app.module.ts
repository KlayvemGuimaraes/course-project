import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'; // modulo de configuracoes

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, //para que as variaveis de ambiente sejam acessiveis em todo o projeto
     }), //por padrão ele busca o arquivo .env  mas dá pra passar um objeto e coloar outro arquivo como .env.local
     CoursesModule,
     DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}