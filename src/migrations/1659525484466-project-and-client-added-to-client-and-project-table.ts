import { MigrationInterface, QueryRunner } from "typeorm";

export class projectAndClientAddedToClientAndProjectTable1659525484466 implements MigrationInterface {
    name = 'projectAndClientAddedToClientAndProjectTable1659525484466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD "clientId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "projects"
            ADD CONSTRAINT "FK_091f9433895a53408cb8ae3864f" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "projects" DROP CONSTRAINT "FK_091f9433895a53408cb8ae3864f"
        `);
        await queryRunner.query(`
            ALTER TABLE "projects" DROP COLUMN "clientId"
        `);
    }

}
