import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoEntity } from '@modules/todo/todo.entity';
import { TodoController } from '@modules/todo/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [],
})
export class TodoModule {}
