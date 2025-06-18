import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TodoDto } from '@modules/todo/dto/todo.tdo';

@ApiTags('Todos')
@Controller('todos')
export class TodoController {
  @Get()
  @ApiResponse({ status: 200, type: [TodoDto] })
  findAll(): TodoDto[] {
    return [];
  }
}
