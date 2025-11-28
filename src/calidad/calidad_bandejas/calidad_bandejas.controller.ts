import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCalidadBandejaDto } from './dto/create-calidad_bandeja.dto';
import { CalidadBandejasService } from './calidad_bandejas.service';
import { CalidadBandejasViewService } from './calidad_bandejas_view.service';

@Controller('calidad-bandejas')
export class CalidadBandejasController {
  constructor(
    private readonly calidadBandejasService: CalidadBandejasService,
    private readonly calidadBandejasViewService: CalidadBandejasViewService,
  ) {}

  // Reportes
  @Get('report')
  report() {
    return this.calidadBandejasViewService.findAll();
  }

  // CRUD para calidad de bandejas
  @Post()
  create(@Body() dto: CreateCalidadBandejaDto) {
    return this.calidadBandejasService.create(dto);
  }

  @Get()
  findAll() {
    return this.calidadBandejasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.calidadBandejasService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.calidadBandejasService.remove(id);
  }
}
