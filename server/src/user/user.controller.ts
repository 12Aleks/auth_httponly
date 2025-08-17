import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dto/user.dto';
import {RolesGuard} from "../auth/guards/roles.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {Roles} from "../auth/decorators/roles.decorator";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() dto: UserLoginDto) {
        return this.userService.createUser(dto);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    async getUsers() {
       return await this.userService.getAllUsers();
    }

}
