"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = __importDefault(require("../controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const express_1 = require("express");
const schemas_1 = __importDefault(require("../schemas"));
const clientsRouters = (0, express_1.Router)();
clientsRouters.post("", middlewares_1.default.validData(schemas_1.default.clients.clientCreateSchema), middlewares_1.default.uniqEmail, controllers_1.default.clients.create);
clientsRouters.get("", middlewares_1.default.token, controllers_1.default.clients.get);
clientsRouters.patch("", middlewares_1.default.token, middlewares_1.default.minData, middlewares_1.default.validData(schemas_1.default.clients.clientUpdateSchema), middlewares_1.default.uniqEmail, controllers_1.default.clients.update);
clientsRouters.delete("", middlewares_1.default.token, controllers_1.default.clients.remove);
exports.default = clientsRouters;
