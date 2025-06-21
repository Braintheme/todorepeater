import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
  Index,
} from 'typeorm';
import { UserEntity } from '@modules/user/user.entity';
import { TodoEntity } from '@modules/todo/todo.entity';

@Entity('completions')
@Unique(['user', 'task', 'date'])
@Index(['user', 'task', 'date'])
export class CompletionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => TodoEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id' })
  task: TodoEntity;

  @Column({ type: 'date' })
  date: string;
}
