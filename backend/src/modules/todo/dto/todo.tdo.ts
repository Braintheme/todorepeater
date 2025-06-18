import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty({
    example: 1,
    description: 'ID задачи',
  })
  id: number;

  @ApiProperty({
    example: 'Купить хлеб',
    description: 'Заголовок задачи',
    nullable: true,
  })
  title: string | null;

  @ApiProperty({
    example: 'Не забыть купить батон перед вечером',
    description: 'Описание задачи',
    nullable: true,
  })
  content: string | null;

  @ApiProperty({
    example: false,
    description: 'Задача архивирована',
  })
  isArchived: boolean;

  @ApiProperty({
    example: false,
    description: 'Задача удалена',
  })
  isDeleted: boolean;

  @ApiProperty({
    example: '#FFAA00',
    description: 'Цвет заметки',
    nullable: true,
  })
  color: string | null;

  @ApiProperty({
    example: '2025-06-15T10:45:00.000Z',
    description: 'Дата создания',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-06-15T12:30:00.000Z',
    description: 'Дата последнего обновления',
  })
  updatedAt: Date;
}
