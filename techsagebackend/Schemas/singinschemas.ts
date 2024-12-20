import {z} from "zod";
import { emailValidation, usernameValidation } from "./signupschemas";

export const signInSchema = z.object({
    username: usernameValidation.optional(),
    email: emailValidation.optional(),
    password: z.string().min(8, {message:"Password must be at least 8 characters long"}),
  }).refine(
    (data) => data.username || data.email,
    { message: "Either username or email must be provided", path: ["identifier"] }
  );
  