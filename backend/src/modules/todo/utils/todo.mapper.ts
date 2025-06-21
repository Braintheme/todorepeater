import { TodoDto } from '@modules/todo/dto/todo.dto';
import { TodoEntity } from '@modules/todo/todo.entity';

export function mapTodoToDto(todo: TodoEntity, isCompleted: boolean): TodoDto {
  return {
    id: todo.id,
    title: todo.title,
    repeatValue: todo.repeatValue,
    repeatUnit: todo.repeatUnit,
    isArchived: todo.isArchived,
    color: todo.color,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
    isCompleted,
    category: todo.category
      ? {
          id: todo.category.id,
          name: todo.category.name,
          color: todo.category.color,
        }
      : null,
  };
}
