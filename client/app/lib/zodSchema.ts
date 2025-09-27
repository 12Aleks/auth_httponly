import {z} from "zod";

export const authSchema = z.object({
    email: z.string().email('Invalid email address.'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters long.')
        .max(15,'Password must be at max 15 characters long.'),
});

export type ILoginDto = z.infer<typeof authSchema>;

export const registerSchema = authSchema.extend({
    email: z.string().email('Invalid email address.'),
    name: z.string().min(2, 'The Name must be at least 2 characters long.'),
    surname: z.string().min(2, 'The Surname must be at least 2 characters long.'),
    password: z.string() .min(6, 'Password must be at least 6 characters long.')
        .max(15,'Password must be at max 15 characters long.'),
});

export type IRegisterDto = z.infer<typeof registerSchema>;