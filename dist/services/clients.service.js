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
const bcryptjs_1 = require("bcryptjs");
const entities_1 = require("../entities");
const schemas_1 = __importDefault(require("../schemas"));
const create = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    body.password = (0, bcryptjs_1.hashSync)(body.password, 10);
    const client = clientRepo.create(body);
    yield clientRepo.save(client);
    return schemas_1.default.clients.clientResponseSchema.parse(client);
});
const retrieve = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const client = yield clientRepo.findOneBy({ id: id });
    return schemas_1.default.clients.clientResponseSchema.parse(client);
});
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    if (body.password) {
        const isEncrypted = (0, bcryptjs_1.getRounds)(body.password);
        if (!isEncrypted)
            body.password = (0, bcryptjs_1.hashSync)(body.password, 10);
    }
    const oldClient = yield clientRepo.findOneBy({ id: id });
    const updatedClient = clientRepo.create(Object.assign(Object.assign({}, oldClient), body));
    yield clientRepo.save(updatedClient);
    return schemas_1.default.clients.clientResponseSchema.parse(updatedClient);
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    yield clientRepo.delete(id);
});
exports.default = { create, retrieve, remove, update };
