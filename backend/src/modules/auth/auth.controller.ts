import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { AuthDto } from '@modules/auth/dto/auth.dto';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.sighIn();
  }

  @Post('register')
  async register(@Body() authDto: CreateUserDto) {
    return this.authService.signUp(authDto);
  }
}
