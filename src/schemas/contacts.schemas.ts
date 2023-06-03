import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(6).max(45),
  email: z.string().email().min(10).max(45),
  phone: z.number().min(10).max(14),
  comment: z.string().max(300).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const contactUpdateSchema = contactCreateSchema.partial();
const contactResponseSchema = contactSchema;

export default {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactResponseSchema,
};
