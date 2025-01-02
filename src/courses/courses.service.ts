import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tags.entity';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly TagRepository: Repository<Tag>,
   ) {} // com esse construtor, o TypeORM injeta o repositório de cursos

  async findAll() {
    return this.courseRepository.find({
      relations: ['tags'],
    });
  }
  
  async findOne(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['tags'],

    });
    if(!course){
        throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course
  }

  async create(createCourseDTO: CreateCourseDTO) {
    const tags = await Promise.all(
      createCourseDTO.tags.map(name => this.preLoadTagByName(name))
    );
    const course = this.courseRepository.create({
      ...createCourseDTO,
      tags
    });
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDTO: UpdateCourseDTO) {
    const tags =
    updateCourseDTO && 
    (await Promise.all(
      updateCourseDTO.tags.map(name => this.preLoadTagByName(name))
    ));

    const course = await this.courseRepository.preload({
      ...updateCourseDTO,
      id,
      tags
    });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return this.courseRepository.save(course);
  }
  
  async remove(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
    });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return this.courseRepository.remove(course);
  }

  private async preLoadTagByName(name: string): Promise<Tag> {
    // verifica se a tag ja existe, se sim, retorna a tag, se nao, cria uma nova tag
    const tag = await this.TagRepository.findOne({ 
      where:{
        name
      }
    }); 
    if (tag) {
      return tag;
    }
    return this.TagRepository.create({ name });
  }
}