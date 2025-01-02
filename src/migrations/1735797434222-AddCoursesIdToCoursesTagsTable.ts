import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCoursesIdToCoursesTagsTable1735797434222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'courses_tags_tags',
            new TableColumn({
                name: 'coursesId',
                type: 'uuid',
                isNullable: true,
        }),
     );
     

     await queryRunner.createForeignKey(
        'courses_tags_tags',
        new TableForeignKey({
            name: 'courses_tags_courses',    // nome da chave estrangeira,
            columnNames: ['coursesId'],       // nome da coluna na tabela de relacionamento
            referencedTableName: 'courses',  // nome da tabela que está sendo referenciada
            referencedColumnNames: ['id'],   // nome da coluna na tabela referenciada
            onDelete: 'SET NULL',            // quando um curso for deletado, o campo courseId na tabela courses_tags será setado como null
     }))
  }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_courses');
        await queryRunner.dropColumn('courses_tags_tags', 'coursesId');
    }
}