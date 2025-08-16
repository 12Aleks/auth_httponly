import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entity/user.entity";
import {JwtService} from "@nestjs/jwt";
import {AuthDto} from "./dto/auth.dto";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ){}

    async validateUser(dto: AuthDto): Promise<User | null> {
        const {email, password} = dto;

        const user = await this.userRepository.findOne({where: {email}});
        if(!user || !user.isActive) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare((password), user.password);
        if(!isMatch) throw new UnauthorizedException('Invalid credentials');

        return user;
    }

    async login(user: User) {
        const tokens = await this.generateToken(user);
        return tokens;
    }

    async generateToken(user: User){
        const userPayload = {sub: user.id, email: user.name, role: user.role};

        const accessToken = await this.jwtService.signAsync(userPayload, {expiresIn: '1h'});
        const refreshToken = await this.jwtService.signAsync(userPayload, {expiresIn: '7d'});

        return {accessToken, refreshToken};
    }

    async refreshToken(refreshToken: string){
        try{
            const refreshPayload = await this.jwtService.verify(refreshToken);
            const user = await this.userRepository.findOne({where: {id: refreshPayload.sub}});
            if(!user) throw new UnauthorizedException('Invalid refresh token');
            const tokens = await this.generateToken(user);
            return tokens;

        }catch (e) {
            throw new UnauthorizedException('Invalid refresh token');
        }
    }
}
