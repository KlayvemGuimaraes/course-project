import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCoursesTable1735784943121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'); // cria a extensão uuid-ossp no banco de dados  
        // por padrão todos campos são obrigatórios
        await queryRunner.createTable(new Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));     
    } // quando executo migrations:run, o método up é executado

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses')
    } // quando executo migrations:revert, o método down é executado
}
