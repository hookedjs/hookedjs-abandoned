import { MigrationInterface, QueryRunner } from 'typeorm';

export class TwitterUsername1563476885879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" ADD "twitter_username" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitter_username"`);
  }
}
