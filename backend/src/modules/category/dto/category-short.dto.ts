import { OmitType } from '@nestjs/swagger';
import { CategoryDto } from '@modules/category/dto/category.dto';

export class CategoryShortDto extends OmitType(CategoryDto, [
  'createdAt',
  'updatedAt',
]) {}
