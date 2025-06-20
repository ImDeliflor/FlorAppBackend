import { Module } from '@nestjs/common';
import { ChecklistEsquejesService } from './checklist_esquejes.service';
import { ChecklistEsquejesController } from './checklist_esquejes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistEsqueje } from './checklist_esquejes.entity';
import { ChecklistEsquejeView } from './checklist_esquejes_view.entity';
import { ChecklistEsquejesViewService } from './checklist_esquejes_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChecklistEsqueje, ChecklistEsquejeView])],
  controllers: [ChecklistEsquejesController],
  providers: [ChecklistEsquejesService, ChecklistEsquejesViewService],
})
export class ChecklistEsquejesModule {}
