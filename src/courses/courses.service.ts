import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Curso sobre fundamentos do NESTJS',
      tags: ['node.js', 'javascript', 'typescript', 'nestjs'],
    },
  ];

  findAll() {
    return this.courses;
  }
  
  findOne(id: number) {
    const course = this.courses.find(course => course.id === id);
    if(!course){
        throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO)
    return createCourseDTO
  }

  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse as any) {
      const index = this.courses.findIndex(course => course.id === id);
      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }
  
  remove(id: number) {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
      return true;
    }
    return false;
  }
}