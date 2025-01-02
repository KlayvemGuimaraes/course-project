import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCoursesTagsTable1735796717729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'courses_tags_tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid', //estratégia de geração de id
                    default: 'uuid_generate_v4()', // método que executa internamente no postgres gerando um uuid v4
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses_tags_tags')
    }

}
