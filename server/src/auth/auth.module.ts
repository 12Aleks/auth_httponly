import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entity/user.entity";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";

@Module({
  imports: [
     TypeOrmModule.forFeature([User]),
      JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              secret: configService.get<string>('jwt_secret'),
              signOptions: { expiresIn: '15m' },
          }),
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
    exports: [AuthService, JwtModule],
})
export class AuthModule {}
