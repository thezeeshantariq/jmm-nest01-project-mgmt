import { MigrationInterface, QueryRunner } from "typeorm";

export class changeStatusTypeInTask1659612784404 implements MigrationInterface {
    name = 'changeStatusTypeInTask1659612784404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tasks" DROP COLUMN "status"
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."tasks_status_enum" AS ENUM('todo', 'in-progress', 'done')
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks"
            ADD "status" "public"."tasks_status_enum" NOT NULL DEFAULT 'todo'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tasks" DROP COLUMN "status"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."tasks_status_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks"
            ADD "status" boolean NOT NULL DEFAULT false
        `);
    }

}
