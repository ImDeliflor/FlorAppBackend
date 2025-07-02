import { Body, Controller, Get, Post } from '@nestjs/common';
import { VariedadesService } from './variedades.service';
import { CreateVariedadDTO } from './dto/create-variedad.dto';

@Controller('variedades')
export class VariedadesController {
  constructor(private variedadService: VariedadesService) {}

  @Get()
  findAll() {
    return this.variedadService.findAll();
  }

  @Post()
  create(@Body() variedad: CreateVariedadDTO) {
    return this.variedadService.create(variedad);
  }
}
