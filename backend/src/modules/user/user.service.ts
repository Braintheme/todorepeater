import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@modules/user/user.entity';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ email });
  }

  public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (user)
      throw new BadRequestException('User with this email already exists'); // Исправлена грамматика

    const userInstance: UserEntity = this.userRepository.create({
      ...createUserDto,
    });
    return this.userRepository.save(userInstance);
  }
}
