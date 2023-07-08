"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const LoginSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(10).max(45),
    password: zod_1.z.string().min(6).max(45)
});
exports.default = LoginSchema;
