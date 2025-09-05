import {z} from "zod";

export const authSchema = z.object({
    email: z.string().email('Invalid email address.'),
    password: z.string().min(6, 'Password must be at least 6 characters long.')
});

export type ILoginDto = z.infer<typeof authSchema>;

export const registerSchema = authSchema.extend({
    email: z.string().email('Invalid email address.'),
    role: z.string().default('user'),
    name: z.string().min(2, 'Name must be at least 2 characters long.'),
    surname: z.string(),
    password: z.string().min(6, 'Password must be at least 6 characters long.')
});

export type IRegisterDto = z.infer<typeof registerSchema>;