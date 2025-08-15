import * as process from 'node:process'

export default () => ({
    jwt_secret: process.env.JWT_SECRET,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_name: process.env.DB_NAME,
})