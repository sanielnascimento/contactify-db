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
const services_1 = __importDefault(require("../services"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const client = yield services_1.default.clients.create(body);
    return res.status(201).json(client);
});
const get = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    const client = yield services_1.default.clients.retrieve(id);
    return res.json(client);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const id = res.locals.userId;
    const client = yield services_1.default.clients.update(id, body);
    return res.json(client);
});
const remove = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    yield services_1.default.clients.remove(id);
    return res.status(204).send();
});
exports.default = { create, get, update, remove };
