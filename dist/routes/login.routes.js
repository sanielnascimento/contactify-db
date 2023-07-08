"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const schemas_1 = __importDefault(require("../schemas"));
const loginRouters = (0, express_1.Router)();
loginRouters.post("", middlewares_1.default.validData(schemas_1.default.login), controllers_1.default.login);
exports.default = loginRouters;
