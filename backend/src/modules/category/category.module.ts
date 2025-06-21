import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '@modules/category/category.entity';
import { CategoryController } from '@modules/category/category.controller';
import { CategoryRepository } from '@modules/category/category.repository';
import { CategoryService } from '@modules/category/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: CategoryRepository,
      useFactory: (dataSource: DataSource) => new CategoryRepository(dataSource),
      inject: [DataSource],
    },
  ],
})
export class CategoryModule {}
