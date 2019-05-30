import { MigrationInterface, QueryRunner } from 'typeorm';

export class Auth1559157116764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" ADD "roles" character varying(60)`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roles"`);
  }
}
