"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors"));
const zod_1 = require("zod");
const errorsHandler = (error, __, res, _) => {
    error instanceof errors_1.default && res.status(error.statusCode).json({ message: error.message });
    error instanceof zod_1.ZodError && res.status(400).json({ message: error.flatten().fieldErrors });
    console.error(error);
    return res.status(500).json({ message: error.message });
};
exports.default = errorsHandler;
