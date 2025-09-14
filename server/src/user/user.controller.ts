import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user.dto';
import {RolesGuard} from "../auth/guards/roles.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {Roles} from "../auth/decorators/roles.decorator";
import { User } from './entity/user.entity';

export interface RequestWithUser extends Request {
    user?: {
        sub: string;
        name: string;
        role: string;
    };
}

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() dto: UserLoginDto):Promise<User> {
        return this.userService.createUser(dto);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    async getUsers() {
        return await this.userService.getAllUsers();
    }

    @Roles('admin', 'user')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('profile')
    async profile(@Req() req: RequestWithUser) {

            if (!req.user?.sub) {
                return { message: 'User not authenticated' };
            }

            return await this.userService.getUserProfile(req.user);
    }
}
