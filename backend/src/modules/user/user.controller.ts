import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserDto } from '@modules/user/dto/user.dto';
import { UserService } from '@modules/user/user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @ApiResponse({ status: 200, type: [UserDto] })
  findAll(): UserDto[] {
    return [];
  }

  @Get('email/:email')
  @ApiParam({ name: 'email', description: 'User email' })
  @ApiResponse({ status: 200, type: UserDto })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}