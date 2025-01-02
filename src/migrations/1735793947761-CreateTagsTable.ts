import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTagsTable1735793947761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // por padrão todos campos são obrigatórios
        // quando for opcional usar o isNullable: true
        await queryRunner.createTable(new Table({
            name: 'tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    // isNullable: true, demonstração
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
        await queryRunner.dropTable('tags')
    }

}
