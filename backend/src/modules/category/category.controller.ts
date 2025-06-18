import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CategoryDto } from '@modules/category/dto/category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  @Get()
  @ApiResponse({ status: 200, type: [CategoryDto] })
  findAll(): CategoryDto[] {
    return [];
  }
}
