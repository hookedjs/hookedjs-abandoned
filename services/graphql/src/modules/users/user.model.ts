import { compareSync, hashSync } from 'bcryptjs';
import { BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseModel, EmailField, EnumField, Model, StringField } from 'warthog';

// Note: this must be exported and in the same file where it's attached with @EnumField
// Also - must use string enums
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}
// export enum UserRoles {
//   SYSTEM = 'SYSTEM',
//   ADMIN = 'ADMIN',
//   ANONYMOUS = 'ANONYMOUS'
// }

@Model()
export class User extends BaseModel {
  @EmailField({ nullable: true })
  email?: string;

  @StringField({ maxLength: 72, minLength: 8, nullable: true })
  password?: string;

  @StringField({ nullable: true })
  facebookId?: string;

  @StringField({ nullable: true })
  facebookToken?: string;

  @StringField({ nullable: true })
  twitterId?: string;

  @StringField({ nullable: true })
  twitterToken?: string;

  @StringField({ nullable: true })
  twitterUsername?: string;

  @StringField({ nullable: true })
  googleId?: string;

  @StringField({ nullable: true })
  googleToken?: string;

  @StringField({ nullable: true })
  photo?: string;

  @StringField({ maxLength: 60, nullable: true })
  roles?: string;

  @StringField({ maxLength: 30, nullable: true })
  firstName?: string;

  @StringField({ maxLength: 50, minLength: 2, nullable: true })
  lastName?: string;

  @EnumField('UserStatus', UserStatus)
  status?: UserStatus;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = hashSync(this.password, 8);
    }
  }

  validPassword(password: string) {
    return this.password && compareSync(password, this.password);
  }
}
