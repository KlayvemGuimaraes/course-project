import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable() // js.com/providers
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Curso sobre fundamentos do NESTJS',
      tags: ['node.js', 'javascript', 'typescript', 'nestjs'],
    },
  ];

  findOne(id: number) {
    return this.courses.find(course => course.id === id);
  }

  create(createCourseDTO: any) {
    this.courses.push(...createCourseDTO);
  }
  
  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse) {
      const index = this.courses.findIndex(course => course.id === id);
      this.courses[index] = {
        ...existingCourse,
        ...updateCourseDTO
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex(course => course.id === id);
    if (index >= 0){
        this.courses.splice(index, 1); // o splice remove um elemento do array, pr
    }
  }
}