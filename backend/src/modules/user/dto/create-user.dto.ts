import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'admin@gmail.com',
    description: 'admin email for auth',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  public email: string;

  @ApiProperty({
    example: 'password123',
    description: 'admin password for auth',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(8)
  public password: string;
}
