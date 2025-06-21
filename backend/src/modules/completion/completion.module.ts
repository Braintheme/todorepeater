import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletionEntity } from '@modules/completion/completion.entity';
import { CompletionService } from '@modules/completion/completion.service';
import { CompletionController } from '@modules/completion/completion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompletionEntity])],
  providers: [CompletionService],
  controllers: [CompletionController],
  exports: [CompletionService],
})
export class CompletionModule {}
