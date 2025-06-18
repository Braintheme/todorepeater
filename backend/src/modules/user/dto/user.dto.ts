import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 1,
    description: 'ID user',
  })
  id: number;

  @ApiProperty({
    example: 'valerii@email.com',
  })
  email: string;

  @ApiProperty({
    example: 'Valerii',
    nullable: true,
  })
  firstName: string | null;

  @ApiProperty({
    example: 'Still',
    nullable: true,
  })
  lastName: string | null;

  @ApiProperty({
    example: '2025-06-15T10:45:00.000Z',
    description: 'Date created user',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-06-15T12:30:00.000Z',
    description: 'Date updated user',
  })
  updatedAt: Date;
}
