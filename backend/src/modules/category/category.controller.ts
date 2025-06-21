import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CategoryService } from '@modules/category/category.service';
import { User } from '@common/decorators/user.decorator';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiResponse({ status: 200, type: [CategoryDto] })
  findAll(@User('userId') userId: number) {
    return this.categoryService.findAllByUser(userId);
  }
}
