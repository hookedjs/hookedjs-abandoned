"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var fs_1 = require("fs");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var warthog_1 = require("warthog");
// import { AuthChecker } from "./modules/users/AuthChecker";
var PublicKey = fs_1.readFileSync(__dirname + '/../generated/public.pem');
function getServer(AppOptions) {
    if (AppOptions === void 0) { AppOptions = {}; }
    return new warthog_1.Server(__assign({ introspection: true, openPlayground: false, warthogImportPath: 'warthog' }, AppOptions), {
        // Make sure TypeORM does not auto-update the DB schema so that we know our CLI commands
        // are making the changes
        synchronize: false,
        // Reset Warthog table naming strategy to default Typeorm. Warthog by default uses a custom
        // naming strategy, which is challenging to get working with the Typeorm CLI and our
        // environmental variable strategy. I also don't see any benefit to Warthog's.
        namingStrategy: new typeorm_1.DefaultNamingStrategy()
    });
}
exports.getServer = getServer;
