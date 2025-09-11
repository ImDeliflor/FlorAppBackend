import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDTO } from './dto/create-empleado.dto';
import { EmpleadosViewService } from './empleados_view.service';

@Controller('empleados')
export class EmpleadosController {
  constructor(
    private empleadoService: EmpleadosService,
    private readonly empleadoViewService: EmpleadosViewService,
  ) {}

  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

  @Post()
  create(@Body() empleado: CreateEmpleadoDTO) {
    return this.empleadoService.create(empleado);
  }

  @Get('report')
  report() {
    return this.empleadoViewService.findAll();
  }
}
