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
    const id = res.locals.userId;
    const body = req.body;
    const newContact = yield services_1.default.contacts.create(body, id);
    return res.status(201).json(newContact);
});
const read = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    const contacts = yield services_1.default.contacts.read(id);
    return res.json(contacts);
});
const retrieve = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const contact = yield services_1.default.contacts.retrieve(id);
    return res.json(contact);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const id = req.params.id;
    const newClient = yield services_1.default.contacts.update(id, body);
    return res.json(newClient);
});
const put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const newClient = yield services_1.default.contacts.favoriteChange(id);
    return res.json(newClient);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield services_1.default.contacts.remove(id);
    return res.status(204).send();
});
exports.default = { create, read, retrieve, update, put, remove };
