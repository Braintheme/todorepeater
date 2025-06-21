import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { BaseUserRepository } from '@common/repositories/base-user.repository';

@Injectable()
export class CategoryRepository extends BaseUserRepository<CategoryEntity> {
  constructor(dataSource: DataSource) {
    super(dataSource.getRepository(CategoryEntity));
  }
}
