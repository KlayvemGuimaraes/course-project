import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./courses.entity";
import { randomUUID } from "node:crypto";

@Entity('tags')
export class Tag{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]

  @CreateDateColumn({type: 'timestamp'})
  created_at : Date;

  @BeforeInsert() // esse método será executado sempre antes que um novo registro seja inserido no banco de dados
   generatedId(){
    if(this.id){
        return
    }
    this.id = randomUUID()
   }
}

// ManyToMany
// O decorator @Entity('tags') é usado para definir o nome da tabela no banco de dados que referencia o Course.
// e o course por sua vez referencia a entidade course em courses.entity.ts