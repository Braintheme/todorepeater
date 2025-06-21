import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TodoService } from '@modules/todo/todo.service';
import { TodoDto } from '@modules/todo/dto/todo.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { User } from '@common/decorators/user.decorator';

@ApiTags('Todos')
@ApiBearerAuth()
@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiResponse({ status: 200, type: [TodoDto] })
  async findAll(@User('userId') userId: number): Promise<TodoDto[]> {
    return this.todoService.findAllByUser(userId);
  }
}
