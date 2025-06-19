import { Injectable, ConflictException } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { UserEntity } from '@modules/user/user.entity';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(authData: CreateUserDto): Promise<UserEntity> {
    const existing = await this.userService.findByEmail(authData.email);
    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    return this.userService.create(authData);
  }

  sighIn() {
    throw new Error('Method not implemented.');
  }
}
