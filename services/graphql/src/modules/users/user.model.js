"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var bcryptjs_1 = require("bcryptjs");
var typeorm_1 = require("typeorm");
var warthog_1 = require("warthog");
// Note: this must be exported and in the same file where it's attached with @EnumField
// Also - must use string enums
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
// export enum UserRoles {
//   SYSTEM = 'SYSTEM',
//   ADMIN = 'ADMIN',
//   ANONYMOUS = 'ANONYMOUS'
// }
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.hashPassword = function () {
        if (this.password) {
            this.password = bcryptjs_1.hashSync(this.password, 8);
        }
    };
    __decorate([
        warthog_1.EmailField({ nullable: true })
    ], User.prototype, "email");
    __decorate([
        warthog_1.StringField({ maxLength: 72, minLength: 8, nullable: true })
    ], User.prototype, "password");
    __decorate([
        warthog_1.StringField({ maxLength: 60, nullable: true })
    ], User.prototype, "roles");
    __decorate([
        warthog_1.StringField({ maxLength: 30, nullable: true })
    ], User.prototype, "firstName");
    __decorate([
        warthog_1.StringField({ maxLength: 50, minLength: 2, nullable: true })
    ], User.prototype, "lastName");
    __decorate([
        warthog_1.EnumField('UserStatus', UserStatus)
    ], User.prototype, "status");
    __decorate([
        typeorm_1.BeforeInsert(),
        typeorm_1.BeforeUpdate()
    ], User.prototype, "hashPassword");
    User = __decorate([
        warthog_1.Model()
    ], User);
    return User;
}(warthog_1.BaseModel));
exports.User = User;
