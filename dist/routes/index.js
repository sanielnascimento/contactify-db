"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacts_routes_1 = __importDefault(require("./contacts.routes"));
const clients_routes_1 = __importDefault(require("./clients.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
exports.default = { clientsRouters: clients_routes_1.default, contactsRouters: contacts_routes_1.default, loginRouters: login_routes_1.default };
