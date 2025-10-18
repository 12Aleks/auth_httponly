import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

@Injectable()
export class CsrfGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const req: Request = context.switchToHttp().getRequest();

        // Берём токен из cookie и заголовка
        const csrfCookie = req.cookies['csrfToken'];
        const csrfHeader = req.headers['x-csrf-token'];

        if (!csrfCookie || !csrfHeader) {
            throw new ForbiddenException('CSRF token missing');
        }

        if (csrfCookie !== csrfHeader) {
            throw new ForbiddenException('CSRF token mismatch');
        }

              // Дополнительно проверяем JWT
        try {
            this.jwtService.verify(csrfCookie);
        } catch (e) {
            throw new ForbiddenException('Invalid CSRF token');
        }

        return true;
    }
}