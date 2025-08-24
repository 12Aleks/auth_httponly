import {Body, Controller, Post, Res} from '@nestjs/common';
import type { Response, Request } from 'express';
import {AuthService} from "./auth.service";
import {AuthDto} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() dto: AuthDto, @Res() res: Response) {
        const user = await this.authService.validateUser(dto);

        if(!user) throw new Error('User not found or user data is incorrect');
        const token = await this.authService.login(user);

        res.cookie('accessToken', token.accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false, // true, but in the test version false
            maxAge: 15 * 60 * 1000,
        });

        res.cookie('refreshToken', token.refreshToken, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false, // true, but in the test version false
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.send({message: 'Login successful'});
    }

    @Post('logout')
    async logout(@Res() res: Response) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.send({message: 'Logout successful'});
    }

    async refreshToken(@Body() dto: AuthDto, @Res() res: Response) {
        const refresh = res.cookie['refreshToken'];
        if (!refresh) return res.status(401).send({ message: 'No refresh token' });

        const tokens = await this.authService.refreshToken(refresh);

        res.cookie('accessToken', tokens.accessToken, {
            httpOnly: true,
            secure: false, // true, but in the test version false
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });

        res.send({ message: 'Access token refreshed' });

    }

}
