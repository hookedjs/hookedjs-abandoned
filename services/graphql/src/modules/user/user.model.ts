// import { BaseModel, EmailField, EnumField, Model, OneToMany, StringField } from 'warthog';
import * as bcrypt from 'bcrypt-node';
import { BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseModel, EmailField, Model, OneToMany, StringField } from 'warthog';

import { Post } from '../post/post.model';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

@Model()
export class User extends BaseModel {
  // Auth Fields

  @EmailField({ nullable: true }) email?: string;
  @StringField({ maxLength: 72, minLength: 8, nullable: true }) password?: string;
  @StringField({ nullable: true }) facebookId?: string;
  @StringField({ nullable: true }) facebookToken?: string;
  @StringField({ nullable: true }) twitterId?: string;
  @StringField({ nullable: true }) twitterToken?: string;
  @StringField({ nullable: true }) twitterUsername?: string;
  @StringField({ nullable: true }) googleId?: string;
  @StringField({ nullable: true }) googleToken?: string;
  @StringField({ nullable: true }) photo?: string;

  // Other Fields

  @StringField({ maxLength: 60, nullable: true }) roles?: string;
  @StringField({ maxLength: 30, nullable: true }) firstName?: string;
  @StringField({ maxLength: 50, minLength: 2, nullable: true }) lastName?: string;

  // Note: enums are not currently working well in sqlite, so I'm commenting out of the starter for now
  // https://github.com/typeorm/typeorm/pull/4379
  // @EnumField('UserStatus', UserStatus) status?: UserStatus;
  @StringField({ maxLength: 30 }) status?: string;

  // Relationships

  @OneToMany(() => Post, (post: Post) => post.user) posts?: Post[];

  // Hooks

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  }

  // Functions

  validPassword(password: string) {
    return this.password && bcrypt.compareSync(password, this.password);
  }
}
