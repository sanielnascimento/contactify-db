import { z } from "zod";

const clientSchema = z.object({
  id: z.string(),
  name: z.string().min(6).max(60),
  email: z.string().email().min(10).max(45),
  password: z.string().min(6).max(45),
  phone: z.preprocess((x) => Number(x), z.number()),
  imgUrl: z.string(),
  createdAt: z.string(),
});

const clientCreateSchema = clientSchema.omit({ id: true, createdAt: true });

const clientUpdateSchema = clientCreateSchema.partial();

const clientResponseSchema = clientSchema.omit({ password: true });

export default {
  clientSchema,
  clientCreateSchema,
  clientUpdateSchema,
  clientResponseSchema,
};
