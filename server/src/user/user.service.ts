import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entity/user.entity";
import {UserLoginDto} from "./dto/user.dto";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import { RequestWithUser } from './user.controller';
import { when } from 'joi';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createUser(dto: UserLoginDto): Promise<User> {
        const { name, surname, role, email, password } = dto;

        const checkUser = await this.userRepository.findOne({where: {email}});


        if(checkUser){
            throw new BadRequestException(`User with this email: ${email} already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({name, surname, role, email, password: hashPassword});
        return this.userRepository.save(user);
    }

    async getUserByEmail(email: string): Promise<User | null>{
        return this.userRepository.findOne({where: {email}});
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getUserProfile(user: RequestWithUser["user"]): Promise<User | null> {
      if (!user) return null;
      return this.userRepository.findOne({ where: { id: user.sub } });
    }

}
