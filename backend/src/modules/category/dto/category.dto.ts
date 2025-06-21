import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({
    example: 1,
    description: 'Category ID',
  })
  id: number;

  @ApiProperty({
    example: 'Work',
    description: 'Category name',
  })
  name: string;

  @ApiProperty({
    example: '#FFAA00',
    nullable: true,
  })
  color: string | null;

  @ApiProperty({
    example: '2025-06-15T10:45:00.000Z',
    description: 'Date of creation',
    required: false,
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2025-06-15T12:30:00.000Z',
    description: 'Date of last update',
    required: false,
  })
  updatedAt?: Date;
}
