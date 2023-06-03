import { z } from "zod";

const clientSchema = z.object({
  id: z.string(),
  full_name: z.string().min(6).max(45),
  email: z.string().email().min(10).max(45),
  password: z.string().min(6).max(45),
  phone: z.number().min(10).max(14),
  img: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const clientCreateSchema = clientSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const clientUpdateSchema = clientCreateSchema.partial();
export const userResponseSchema = clientSchema.omit({ password: true });
