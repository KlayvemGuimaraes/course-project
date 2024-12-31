import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  // exports: [CoursesService], // isto faz com que esse servico fique acessivel para ser injetado em outros modulos
})
export class CoursesModule {}
