import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RendimientoEnraizamientoService } from './rendimiento_enraizamiento.service';
import { CreateRendimientoEnraizamientoDto } from './dto/create-rendimiento_enraizamiento.dto';
import { RendimientoEnraizamientoViewService } from './rendimiento_enraizamiento_view.service';

@Controller('rendimiento-enraizamiento')
export class RendimientoEnraizamientoController {
  constructor(
    private readonly service: RendimientoEnraizamientoService,
    private readonly serviceView: RendimientoEnraizamientoViewService,
  ) {}

  @Post()
  create(@Body() data: CreateRendimientoEnraizamientoDto) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Reportes
  @Get('report')
  report() {
    return this.serviceView.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
