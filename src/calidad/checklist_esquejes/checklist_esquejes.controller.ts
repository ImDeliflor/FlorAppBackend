import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChecklistEsquejesService } from './checklist_esquejes.service';
import { CreateChecklistEsquejeDTO } from './dto/create-checklist-esqueje.dto';
import { ChecklistEsquejesViewService } from './checklist_esquejes_view.service';

@Controller('checklist-esquejes')
export class ChecklistEsquejesController {
  constructor(
    private checklistEsquejeService: ChecklistEsquejesService,
    private readonly checklistEsquejeViewService: ChecklistEsquejesViewService,
  ) {}

  @Get()
  findAll() {
    return this.checklistEsquejeService.findAll();
  }

  @Post()
  create(@Body() checklistEsqueje: CreateChecklistEsquejeDTO) {
    return this.checklistEsquejeService.create(checklistEsqueje);
  }

  @Get('report')
  report() {
    return this.checklistEsquejeViewService.findAll();
  }
}
