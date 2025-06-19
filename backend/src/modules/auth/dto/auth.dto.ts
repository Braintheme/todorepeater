import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
  @ApiProperty({
    example: 'user@user.com',
    description: 'user email for auth',
  })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: 'user password for auth',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
