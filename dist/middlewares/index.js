"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validData_middlewares_1 = __importDefault(require("./validData.middlewares"));
const uniqEmail_middlewares_1 = __importDefault(require("./uniqEmail.middlewares"));
const minData_middlewares_1 = __importDefault(require("./minData.middlewares"));
const errors_middlewares_1 = __importDefault(require("./errors.middlewares"));
const token_middlewares_1 = __importDefault(require("./token.middlewares"));
const ownerVerify_middlewares_1 = __importDefault(require("./ownerVerify.middlewares"));
exports.default = { errors: errors_middlewares_1.default, minData: minData_middlewares_1.default, validData: validData_middlewares_1.default, uniqEmail: uniqEmail_middlewares_1.default, token: token_middlewares_1.default, ownerVerify: ownerVerify_middlewares_1.default };
