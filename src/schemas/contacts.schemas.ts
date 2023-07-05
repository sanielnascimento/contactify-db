import { z } from "zod";
import { contactsCategory } from "../entities";

const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(6).max(60),
  email: z.string().email().max(45),
  phone: z.preprocess((x) => Number(x), z.number()),
  comment: z.string().min(4).max(300).nullish(),
  category: z.nativeEnum(contactsCategory),
  isFavorite: z.boolean().default(false),
  createdAt: z.string(),
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

const contactsResponseSchema = z.array(contactSchema);

export default {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactsResponseSchema,
};
