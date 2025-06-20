import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDTO } from './dto/create-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadoService: EmpleadosService) {}

  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

  @Post()
  create(@Body() empleado: CreateEmpleadoDTO) {
    return this.empleadoService.create(empleado);
  }
}
