import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MarkCompleteDto {
  @ApiProperty({ example: 12, description: 'ID todo' })
  @IsNumber()
  @IsNotEmpty()
  todoId: number;
}
