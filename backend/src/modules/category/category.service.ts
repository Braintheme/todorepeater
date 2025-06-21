import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@modules/category/category.repository';
import { CategoryEntity } from '@modules/category/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  findAllByUser(userId: number): Promise<CategoryEntity[]> {
    return this.categoryRepository.findAllByUser(userId);
  }
}
