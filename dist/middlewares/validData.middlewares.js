"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validData = (schema) => (req, _, next) => {
    req.body = schema.parse(req.body);
    return next();
};
exports.default = validData;
