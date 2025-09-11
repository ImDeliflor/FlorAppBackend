import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './empleado.entity';
import { EmpleadoView } from './empleado_view.entity';
import { EmpleadosViewService } from './empleados_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado, EmpleadoView])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService, EmpleadosViewService],
})
export class EmpleadosModule {}
