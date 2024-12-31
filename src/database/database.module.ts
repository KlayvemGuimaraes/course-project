import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost', // use o nome do serviço no Docker Compose
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'postgres',
  entities: [],
  synchronize: true,
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