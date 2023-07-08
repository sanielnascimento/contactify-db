"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_service_1 = __importDefault(require("./clients.service"));
const contacts_service_1 = __importDefault(require("./contacts.service"));
const login_service_1 = __importDefault(require("./login.service"));
exports.default = { clients: clients_service_1.default, contacts: contacts_service_1.default, login: login_service_1.default };
