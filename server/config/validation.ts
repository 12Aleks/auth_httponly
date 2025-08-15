import * as Joi from 'joi';

export const validation = Joi.object({
    JWT_SECRET: Joi.string().min(10).required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.number().required(),
    DB_NAME: Joi.string().min(6).required(),
})