import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";
import { randomUUID } from "node:crypto";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable() // JoinTable é usado para especificar o lado proprietário ou principal do relacionamento
    @ManyToMany(()=> Tag, tag => tag.courses, { // ManyToMany é uma relacao de muitos para muitos | O primeiro parametro é o alvo da relacao, o segundo é a propriedade que referencia a entidade atual
        cascade: true // qualquer dado da entidade tags que for alterado, sera alterado na entidade courses
    }) 
    tags: Tag[];

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


// ()=> Tag, tag  | Alvo
// => tag.courses | Lado inverso