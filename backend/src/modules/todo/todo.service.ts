import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '@modules/todo/todo.entity';
import { CompletionEntity } from '@modules/completion/completion.entity';
import { mapTodoToDto } from '@modules/todo/utils/todo.mapper';
import { TodoDto } from '@modules/todo/dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,

    @InjectRepository(CompletionEntity)
    private readonly completionRepo: Repository<CompletionEntity>,
  ) { }

  async findAllByUser(userId: number): Promise<TodoDto[]> {
    const todos = await this.todoRepo.find({
      where: { user: { id: userId } },
      relations: ['category'],
      order: { createdAt: 'DESC' },
    });

    const today = new Date().toISOString().split('T')[0];

    const completions = await this.completionRepo.find({
      where: { user: { id: userId }, date: today },
      relations: ['todo'],
    });

    const completedIds = new Set(
      completions.filter((c) => c.todo && c.todo.id).map((c) => c.todo.id),
    );

    return todos.map((todo) => mapTodoToDto(todo, completedIds.has(todo.id)));
  }
}
