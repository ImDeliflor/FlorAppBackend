import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCalidadEnraizamientoDto } from './dto/create-calidad_enraizamiento.dto';
import { CalidadEnraizamientoService } from './calidad_enraizamiento.service';
import { CalidadEnraizamientoViewService } from './calidad_enraizamiento_view.service';

@Controller('calidad-enraizamiento')
export class CalidadEnraizamientoController {
  constructor(
    private readonly service: CalidadEnraizamientoService,
    private readonly serviceView: CalidadEnraizamientoViewService,
  ) {}

  @Post()
  create(@Body() data: CreateCalidadEnraizamientoDto) {
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
