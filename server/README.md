# Server

**Version:** 0.0.1  
**Author:** Your Name  

## Description
Backend for a test application built with **NestJS** and **TypeScript**.  
Supports multiple user roles and handles all authentication, authorization, and role-based access control on the server side.

## Technologies
- NestJS v11
- TypeScript v5
- TypeORM + PostgreSQL
- Passport + JWT
- Class-Validator & Class-Transformer
- Bcrypt for password hashing
- Jest & Supertest for testing

## Features
- **Authentication & Authorization**
  - Role-based access control
  - JWT-based authentication
  - HttpOnly cookies for token storage
- **User Management**
  - Registration, login, logout
  - Password hashing
  - Input validation (class-validator, Joi)
- **Database**
  - PostgreSQL with TypeORM
  - User and role entities
- **Testing & Code Quality**
  - Unit and e2e tests
  - ESLint and Prettier
- **Other**
  - Modular, scalable architecture
  - Hot reload in development (`start:dev`)
  - Production build (`build` + `start:prod`)

## Security
- All checks and role-based access control are performed on the server.
- JWT tokens stored in **HttpOnly cookies** to prevent XSS attacks.

## Scripts
```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod

# Testing
npm run test
npm run test:e2e

# Linting & Formatting
npm run lint
npm run format
