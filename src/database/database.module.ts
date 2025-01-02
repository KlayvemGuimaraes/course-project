import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',  
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'postgres',
  entities: [Course, Tag],
  // synchronize: true, // isso é para ambiente de desenvolvimento, em produção é recomendado desativar | Pois cria as tabelas automaticamente no banco de dados
  synchronize: false, // isso é para ambiente de desenvolvimento, em produção é recomendado desativar | Pois cria as tabelas automaticamente no banco de dados
};

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () => {
      return {
        ... dataSourceOptions,
      }
    }
  })]
})
export class DatabaseModule {}