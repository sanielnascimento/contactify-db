"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemas_1 = __importDefault(require("../schemas"));
const middlewares_1 = __importDefault(require("../middlewares"));
const controllers_1 = __importDefault(require("../controllers"));
const contactsRouters = (0, express_1.Router)();
contactsRouters.use(middlewares_1.default.token);
contactsRouters.post("", middlewares_1.default.validData(schemas_1.default.contacts.contactCreateSchema), middlewares_1.default.uniqEmail, controllers_1.default.contacts.create);
contactsRouters.get("", controllers_1.default.contacts.read);
contactsRouters.get("/:id", middlewares_1.default.ownerVerify, controllers_1.default.contacts.retrieve);
contactsRouters.patch("/:id", middlewares_1.default.ownerVerify, middlewares_1.default.minData, middlewares_1.default.validData(schemas_1.default.contacts.contactUpdateSchema), middlewares_1.default.uniqEmail, controllers_1.default.contacts.update);
contactsRouters.patch("/status/:id", middlewares_1.default.ownerVerify, controllers_1.default.contacts.put);
contactsRouters.delete("/:id", middlewares_1.default.ownerVerify, controllers_1.default.contacts.remove);
exports.default = contactsRouters;
