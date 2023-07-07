import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email().min(10).max(45),
    password: z.string().min(6).max(45)  
})

export default LoginSchema;