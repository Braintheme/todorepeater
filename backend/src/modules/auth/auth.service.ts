import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { compare } from 'bcrypt';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(authData: CreateUserDto): Promise<{ access_token: string }> {
    const existing = await this.userService.findByEmail(authData.email);
    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    const user = await this.userService.create(authData);
    const payload = { sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signIn(authData: AuthDto): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(authData.email);
    console.log(authData.password, user?.password);
    
    if (!user || !(await compare(authData.password, user.password))) {
      throw new NotFoundException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
