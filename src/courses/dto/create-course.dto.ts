import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly tags: string[];
}