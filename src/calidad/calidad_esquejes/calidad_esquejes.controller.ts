import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalidadEsquejesService } from './calidad_esquejes.service';
import { CreateCalidadEsquejeDTO } from './dto/create-calidad-esqueje.dto';
import { CalidadEsquejesViewService } from './calidad_esquejes_view.service';

@Controller('calidad-esquejes')
export class CalidadEsquejesController {
  constructor(
    private calidadEsquejeService: CalidadEsquejesService,
    private readonly calidadEsquejesViewService: CalidadEsquejesViewService,
  ) {}

  @Get()
  findAll() {
    return this.calidadEsquejeService.findAll();
  }

  @Post()
  create(@Body() calidadEsqueje: CreateCalidadEsquejeDTO) {
    return this.calidadEsquejeService.create(calidadEsqueje);
  }

  @Post('/process')
  processEvaluaciones(@Body() calidadEsqueje: CreateCalidadEsquejeDTO[]) {
    return this.calidadEsquejeService.processEvaluaciones(calidadEsqueje);
  }

  @Get('/report')
  report() {
    return this.calidadEsquejesViewService.findAll();
  }
}
