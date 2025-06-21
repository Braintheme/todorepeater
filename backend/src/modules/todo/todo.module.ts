import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoEntity } from '@modules/todo/todo.entity';
import { TodoController } from '@modules/todo/todo.controller';
import { TodoService } from '@modules/todo/todo.service';

import { CompletionEntity } from '@modules/completion/completion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity, CompletionEntity])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
