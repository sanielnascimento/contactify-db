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
const schemas_1 = __importDefault(require("../schemas"));
const create = (body, id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientRepo = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const client = yield clientRepo.findOneBy({ id: id });
    const contact = contactRepo.create(Object.assign(Object.assign({}, body), { client }));
    yield contactRepo.save(contact);
    return schemas_1.default.contacts.contactSchema.parse(contact);
});
const read = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const contacts = yield contactRepo.find({
        relations: { client: true },
        where: { client: { id: id } },
    });
    return schemas_1.default.contacts.contactsResponseSchema.parse(contacts);
});
const retrieve = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const contact = yield contactRepo.findOneBy({ id: id });
    return schemas_1.default.contacts.contactSchema.parse(contact);
});
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const oldContact = yield contactRepo.findOneBy({ id: id });
    const updatedContact = contactRepo.create(Object.assign(Object.assign({}, oldContact), body));
    yield contactRepo.save(updatedContact);
    return schemas_1.default.contacts.contactSchema.parse(updatedContact);
});
const favoriteChange = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const oldContact = yield contactRepo.findOneBy({ id: id });
    if (!oldContact) {
        return;
    }
    const updatedContact = contactRepo.create(Object.assign(Object.assign({}, oldContact), { isFavorite: !oldContact.isFavorite }));
    yield contactRepo.save(updatedContact);
    return schemas_1.default.contacts.contactSchema.parse(updatedContact);
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    yield contactRepo.delete({ id });
});
exports.default = { create, read, retrieve, remove, update, favoriteChange };
