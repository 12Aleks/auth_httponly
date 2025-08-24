import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import type {Request} from "express";
import {JwtService} from "@nestjs/jwt";

//Проверка валидности токена
@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const req: Request = context.switchToHttp().getRequest();
        const token = req.cookies['accessToken'];
        if (!token) throw new UnauthorizedException("No access token");

        try {
            const payload = this.jwtService.verify(token);
            req.user = payload;
            return true;
        } catch {
            throw new UnauthorizedException("Invalid or expired token");;
        }
    }
}