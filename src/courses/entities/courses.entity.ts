import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable() // JoinTable é usado para especificar o lado proprietário ou principal do relacionamento
    @ManyToMany(()=> Tag, tag => tag.courses, { // ManyToMany é uma relacao de muitos para muitos | O primeiro parametro é o alvo da relacao, o segundo é a propriedade que referencia a entidade atual
        cascade: true // qualquer dado da entidade tags que for alterado, sera alterado na entidade courses
    }) 
    tags: Tag[];
}


// ()=> Tag, tag  | Alvo
// => tag.courses | Lado inverso