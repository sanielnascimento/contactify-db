"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const entities_1 = require("../entities");
const contactSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().min(6).max(60),
    email: zod_1.z.string().email().max(45),
    phone: zod_1.z.preprocess((x) => Number(x), zod_1.z.number()),
    comment: zod_1.z.string().min(4).max(300).nullish(),
    category: zod_1.z.nativeEnum(entities_1.contactsCategory),
    isFavorite: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
});
const contactCreateSchema = contactSchema.omit({
    id: true,
    createdAt: true,
    category: true,
    isFavorite: true
});
const contactUpdateSchema = contactSchema
    .omit({
    id: true,
    createdAt: true,
})
    .partial();
const contactsResponseSchema = zod_1.z.array(contactSchema);
exports.default = {
    contactSchema,
    contactCreateSchema,
    contactUpdateSchema,
    contactsResponseSchema,
};
