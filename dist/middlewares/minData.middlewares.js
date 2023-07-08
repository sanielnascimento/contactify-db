"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors"));
const minData = (req, _, next) => {
    let errorMsg = req.baseUrl == "/clients"
        ? "At least one of these keys is required: name, email, password, phone or imgUrl."
        : "At least one of these keys is required: name, email, phone or comment.";
    if (Object.values(req.body).length < 1)
        throw new errors_1.default(errorMsg, 400);
    return next();
};
exports.default = minData;
