"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const clientSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().min(6).max(60),
    email: zod_1.z.string().email().min(10).max(45),
    password: zod_1.z.string().min(6).max(45),
    phone: zod_1.z.preprocess((x) => Number(x), zod_1.z.number()),
    imgUrl: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
const clientCreateSchema = clientSchema.omit({ id: true, createdAt: true });
const clientUpdateSchema = clientCreateSchema.partial();
const clientResponseSchema = clientSchema.omit({ password: true });
exports.default = {
    clientSchema,
    clientCreateSchema,
    clientUpdateSchema,
    clientResponseSchema,
};
