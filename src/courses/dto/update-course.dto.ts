import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {} // aqui resolvemos a redundância de código, pois a classe UpdateCourseDTO é uma versão parcial da classe CreateCourseDTO