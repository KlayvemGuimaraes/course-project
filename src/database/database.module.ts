import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async (configService : ConfigService) => {
      return {
        type: 'postgres',
        host: configService.get('DB_HOST'),  
        port: Number(configService.get('DB_PORT')),
        username: 'postgres',
        password: 'admin',
        database: configService.get('DB_NAME'),
        entities: [Course, Tag],
        // synchronize: true, // isso é para ambiente de desenvolvimento, em produção é recomendado desativar | Pois cria as tabelas automaticamente no banco de dados
        synchronize: false, // isso é para ambiente de desenvolvimento, em produção é recomendado desativar | Pois cria as tabelas automaticamente no banco de dados
      }
    },
    inject: [ConfigService],
  })]
})
export class DatabaseModule {}