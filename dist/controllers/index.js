"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_controllers_1 = __importDefault(require("./clients.controllers"));
const contacts_controllers_1 = __importDefault(require("./contacts.controllers"));
const login_controllers_1 = __importDefault(require("./login.controllers"));
exports.default = { clients: clients_controllers_1.default, contacts: contacts_controllers_1.default, login: login_controllers_1.default };
