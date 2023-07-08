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
const errors_1 = __importDefault(require("../errors"));
const ownerVerify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const clientId = res.locals.userId;
    const contactId = req.params.id;
    const contact = yield contactRepo.findOne({
        where: { id: contactId },
        relations: { client: true },
    });
    if (!contact)
        throw new errors_1.default("Contact not found!", 404);
    if (contact.client.id !== clientId)
        throw new errors_1.default("Insufficient Permission", 403);
    return next();
});
exports.default = ownerVerify;
