import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import type {Request} from "express";
import {JwtService} from "@nestjs/jwt";

//Проверка валидности токена
@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const req: Request = context.switchToHttp().getRequest();
        const token = req.cookies['accessToken'];
        if (!token) return false;

        try {
            const payload = this.jwtService.verify(token);
            req['user'] = payload;
            return true;
        } catch {
            return false;
        }
    }
}