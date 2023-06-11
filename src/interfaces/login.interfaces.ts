import { z } from "zod";
import schemas from "../schemas"

export type iLoginRequest = z.infer<typeof schemas.login>