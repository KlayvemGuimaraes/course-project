import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";

// importando as migrations
import { CreateCoursesTable1735784943121 } from "src/migrations/1735784943121-CreateCoursesTable";
import { CreateTagsTable1735793947761 } from "src/migrations/1735793947761-CreateTagsTable";
import { CreateCoursesTagsTable1735796717729 } from "src/migrations/1735796717729-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1735797434222 } from "src/migrations/1735797434222-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1735799594935 } from "src/migrations/1735799594935-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
  ...dataSourceOptions, // pega todas as propriedades de dataSourceOptions que está no arquivo ao lado (database.module.ts) e passa para dataSource
  synchronize: false,
  migrations: [
    CreateCoursesTable1735784943121,
    CreateTagsTable1735793947761,
    CreateCoursesTagsTable1735796717729,
    AddCoursesIdToCoursesTagsTable1735797434222,
    AddTagsIdToCoursesTagsTable1735799594935,
  ],
}); // dataSource é uma instância de DataSource que recebe as configurações de dataSourceOptions