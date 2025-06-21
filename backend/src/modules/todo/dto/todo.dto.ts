import { ApiProperty } from '@nestjs/swagger';
import { RepeatUnit } from '@modules/todo/enums/repeat-unit.enum';
import { CategoryDto } from '@modules/category/dto/category.dto';

export class TodoDto {
  @ApiProperty({ example: 1, description: 'Todo id' })
  id: number;

  @ApiProperty({ example: 'Sell sofa'})
  title: string;

  @ApiProperty({
    example: 10,
    description: 'Repeat interval value',
    nullable: true,
  })
  repeatValue: number | null;

  @ApiProperty({
    example: 'minute',
    enum: RepeatUnit,
    description: 'Repeat interval unit',
    nullable: true,
  })
  repeatUnit: RepeatUnit | null;

  @ApiProperty({ example: false })
  isArchived: boolean;

  @ApiProperty({ example: '#FFAA00', nullable: true })
  color: string | null;

  @ApiProperty({ example: '2025-06-15T10:45:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-06-15T12:30:00.000Z' })
  updatedAt: Date;

  @ApiProperty({
    example: false,
    description: 'Whether the todo is completed today',
  })
  isCompleted: boolean;

  @ApiProperty({
    type: () => CategoryDto,
    nullable: true,
    description: 'Linked category object',
  })
  category: CategoryDto | null;
}
