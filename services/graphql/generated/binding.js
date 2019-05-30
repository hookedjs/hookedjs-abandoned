"use strict";
exports.__esModule = true;
var graphql_binding_1 = require("graphql-binding");
var schema = require("./schema.graphql");
exports.Binding = graphql_binding_1.makeBindingClass({ schema: schema });
