import { MigrationInterface, QueryRunner } from "typeorm";

export class addResponsibilitiesToDesignationTable1659353515698 implements MigrationInterface {
    name = 'addResponsibilitiesToDesignationTable1659353515698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "designations"
            ADD "responsibilities" character varying
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "designations" DROP COLUMN "responsibilities"
        `);
    }

}
