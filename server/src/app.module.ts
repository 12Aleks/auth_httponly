import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";
import {validation} from "../config/validation";


@Module({
  imports: [
     ConfigModule.forRoot({
         isGlobal: true,
         load: [configuration],
         validationSchema: validation
     }) ,
     TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
         useFactory: (configService: ConfigService) => ({
             type: 'postgres',
             host: configService.get<string>('db_host'),
             port: configService.get<number>('db_port'),
             username: configService.get<string>('db_user'),
             password: configService.get<string>('db_pass'),
             database: configService.get<string>('db_name'),
             entities: [],
             synchronize: true,
         })
      }),
     UserModule,
     AuthModule
  ]
})
export class AppModule {}
