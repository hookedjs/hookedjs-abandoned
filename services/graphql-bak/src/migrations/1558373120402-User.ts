import { MigrationInterface, QueryRunner } from 'typeorm';

// Use the POSTGRES password as the default _SYSTEM user password.
import { hashSync } from 'bcryptjs';
const systemPassword = hashSync(process.env.TYPEORM_PASSWORD!, 8);

export class User1558373120402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdById" character varying NOT NULL, "updatedAt" TIMESTAMP DEFAULT now(), "updatedById" character varying, "deletedAt" TIMESTAMP, "deletedById" character varying, "version" integer NOT NULL, "email" character varying, "password" character varying(72), "firstName" character varying(30), "lastName" character varying(50), "status" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `INSERT INTO "user" ("id", "createdById", "updatedById", "version", "firstName", "lastName", "status", "email", "password") VALUES ('_SYSTEM','_SYSTEM','_SYSTEM',1,'_SYSTEM','_SYSTEM','ACTIVE','system@changeme.com','${systemPassword}')`
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
