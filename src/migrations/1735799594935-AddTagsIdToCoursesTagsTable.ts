import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddTagsIdToCoursesTagsTable1735799594935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
        'courses_tags_tags',
        new TableColumn({
            name: 'tagsId',
            type: 'uuid',
            isNullable: true,
        }));

    await queryRunner.createForeignKey(
        'courses_tags_tags',
        new TableForeignKey({
            name: 'courses_tags_tags',    // nome da chave estrangeira,
            columnNames: ['tagsId'],       // nome da coluna na tabela de relacionamento
            referencedTableName: 'tags',  // nome da tabela que está sendo referenciada
            referencedColumnNames: ['id'],   // nome da coluna na tabela referenciada
            onDelete: 'SET NULL',            // quando um curso for deletado, o campo courseId na tabela courses_tags será setado como null
        }));
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_tags');
        await queryRunner.dropColumn('courses_tags_tags', 'tagsId');
    }
}
