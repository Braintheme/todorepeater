import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CompletionService } from '@modules/completion/completion.service';
import { MarkCompleteDto } from '@modules/completion/dto/mark-complete.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { User } from '@common/decorators/user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '@modules/user/user.entity';

@ApiTags('Completions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('completions')
export class CompletionController {
  constructor(private readonly completionService: CompletionService) {}

  @Post()
  @Post()
  markAsDone(@User('userId') userId: number, @Body() dto: MarkCompleteDto) {
    return this.completionService.markAsDone(userId, dto);
  }
}
