import { MigrationInterface, QueryRunner } from 'typeorm';

export class Passport1563385199322 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" ADD "facebook_id" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "facebook_token" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "twitter_id" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "twitter_token" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "google_id" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "google_token" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "google_token"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "google_id"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitter_token"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitter_id"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "facebook_token"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "facebook_id"`);
  }
}
