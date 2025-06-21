import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompletionEntity } from '@modules/completion/completion.entity';
import { MarkCompleteDto } from '@modules/completion/dto/mark-complete.dto';
import { UserEntity } from '@modules/user/user.entity';
import { TodoEntity } from '@modules/todo/todo.entity';

@Injectable()
export class CompletionService {
  constructor(
    @InjectRepository(CompletionEntity)
    private readonly completionRepo: Repository<CompletionEntity>,
  ) {}

  async markAsDone(userId: number, dto: MarkCompleteDto): Promise<void> {
    const date = new Date().toISOString().split('T')[0];

    const completion = this.completionRepo.create({
      user: { id: userId } as Pick<UserEntity, 'id'>,
      todo: { id: dto.todoId } as Pick<TodoEntity, 'id'>,
      date,
    });

    try {
      await this.completionRepo.insert(completion);
    } catch (err) {
      if (err.code !== 'ER_DUP_ENTRY') {
        throw err;
      }
    }
  }

  async isTodoCompleted(
    userId: number,
    todoId: number,
    date: string,
  ): Promise<boolean> {
    const found = await this.completionRepo.findOne({
      where: {
        user: { id: userId },
        todo: { id: todoId },
        date,
      },
    });
    return !!found;
  }
}
