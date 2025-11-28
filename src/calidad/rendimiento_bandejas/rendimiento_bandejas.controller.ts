import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RendimientoBandejasService } from './rendimiento_bandejas.service';
import { CreateRendimientoBandejaDto } from './dto/create-rendimiento_bandeja.dto';
import { RendimientoBandejasViewService } from './rendimiento_bandejas_view.service';

@Controller('rendimiento-bandejas')
export class RendimientoBandejasController {
  constructor(
    private readonly rendimientoService: RendimientoBandejasService,
    private readonly rendimientoServiceView: RendimientoBandejasViewService,
  ) {}

  @Post()
  create(@Body() dto: CreateRendimientoBandejaDto) {
    return this.rendimientoService.create(dto);
  }

  @Get()
  findAll() {
    return this.rendimientoService.findAll();
  }

  // Reportes
  @Get('report')
  report() {
    return this.rendimientoServiceView.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rendimientoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rendimientoService.remove(id);
  }
}
