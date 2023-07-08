"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const bcryptjs_1 = require("bcryptjs");
const errors_1 = __importDefault(require("../errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const login = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const { email, password } = body;
    const client = yield clientRepo.findOne({ where: { email } });
    if (!client)
        throw new errors_1.default("Invalid credentials", 401);
    const passwordMatch = yield (0, bcryptjs_1.compare)(password, client.password);
    if (!passwordMatch)
        throw new errors_1.default("Invalid credentials", 401);
    const token = jsonwebtoken_1.default.sign({ email: client.email }, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: client.id.toString(),
    });
    return token;
});
exports.default = login;
