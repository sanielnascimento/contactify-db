"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_schemas_1 = __importDefault(require("./clients.schemas"));
const contacts_schemas_1 = __importDefault(require("./contacts.schemas"));
const login_schemas_1 = __importDefault(require("./login.schemas"));
exports.default = { clients: clients_schemas_1.default, contacts: contacts_schemas_1.default, login: login_schemas_1.default };
