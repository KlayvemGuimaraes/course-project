import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { Tag } from './entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])], // importa o modulo de entidades
  controllers: [CoursesController],
  providers: [CoursesService],
  // exports: [CoursesService], // isto faz com que esse servico fique acessivel para ser injetado em outros modulos
})
export class CoursesModule {}
