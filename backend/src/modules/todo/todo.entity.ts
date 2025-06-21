import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RepeatType } from '@modules/todo/enums/repeat-type.enum';
import { UserEntity } from '@modules/user/user.entity';
import { CategoryEntity } from '@modules/category/category.entity';
import { RepeatUnit } from '@modules/todo/enums/repeat-unit.enum';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'int', name: 'repeat_value', nullable: true })
  repeatValue: number;

  @Column({
    type: 'enum',
    enum: RepeatUnit,
    name: 'repeat_unit',
    nullable: true,
  })
  repeatUnit: RepeatUnit;

  @Column({ type: 'boolean', default: false, name: 'is_archived' })
  isArchived: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  color: string;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.todos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.todos, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
