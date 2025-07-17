import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ChecklistEsquejesService } from './checklist_esquejes.service';
import { CreateChecklistEsquejeDTO } from './dto/create-checklist-esqueje.dto';
import { ChecklistEsquejesViewService } from './checklist_esquejes_view.service';
import { UpdateChecklistEsquejeDTO } from './dto/update-checklist-esqueje.dto';

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

  @Patch(':id')
  updateChecks(
    @Param('id') id: string,
    @Body() data: UpdateChecklistEsquejeDTO,
  ) {
    return this.checklistEsquejeService.updateChecks(Number(id), data);
  }
}
