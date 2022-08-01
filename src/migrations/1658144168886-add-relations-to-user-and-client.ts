import { MigrationInterface, QueryRunner } from "typeorm";

export class addRelationsToUserAndClient1658144168886 implements MigrationInterface {
    name = 'addRelationsToUserAndClient1658144168886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"
        `);
        await queryRunner.query(`
            CREATE TABLE "clients" (
                "id" SERIAL NOT NULL,
                "isActive" boolean NOT NULL DEFAULT true,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "contactPerson" character varying,
                "contactEmail" character varying,
                "contactNumber" character varying,
                "address" character varying,
                "userId" integer,
                CONSTRAINT "REL_59c1e5e51addd6ebebf76230b3" UNIQUE ("userId"),
                CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8"
        `);
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "profileId"
        `);
        await queryRunner.query(`
            ALTER TABLE "profiles"
            ADD "userId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "profiles"
            ADD CONSTRAINT "UQ_315ecd98bd1a42dcf2ec4e2e985" UNIQUE ("userId")
        `);
        await queryRunner.query(`
            ALTER TABLE "clients"
            ADD CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "profiles"
            ADD CONSTRAINT "FK_315ecd98bd1a42dcf2ec4e2e985" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "profiles" DROP CONSTRAINT "FK_315ecd98bd1a42dcf2ec4e2e985"
        `);
        await queryRunner.query(`
            ALTER TABLE "clients" DROP CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37"
        `);
        await queryRunner.query(`
            ALTER TABLE "profiles" DROP CONSTRAINT "UQ_315ecd98bd1a42dcf2ec4e2e985"
        `);
        await queryRunner.query(`
            ALTER TABLE "profiles" DROP COLUMN "userId"
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "profileId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8" UNIQUE ("profileId")
        `);
        await queryRunner.query(`
            DROP TABLE "clients"
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
