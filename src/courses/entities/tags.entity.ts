import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./courses.entity";

@Entity('tags')
export class Tag{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]
}

// ManyToMany
// O decorator @Entity('tags') é usado para definir o nome da tabela no banco de dados que referencia o Course.
// e o course por sua vez referencia a entidade course em courses.entity.ts