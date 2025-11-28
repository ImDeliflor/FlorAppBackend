import { Module } from '@nestjs/common';
import { CalidadEnraizamientoService } from './calidad_enraizamiento.service';
import { CalidadEnraizamientoController } from './calidad_enraizamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalidadEnraizamiento } from './entities/calidad_enraizamiento.entity';
import { CalidadEnraizamientoViewService } from './calidad_enraizamiento_view.service';
import { CalidadEnraizamientoView } from './entities/calidad_enraizamiento_view.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalidadEnraizamiento, CalidadEnraizamientoView]),
  ],
  controllers: [CalidadEnraizamientoController],
  providers: [CalidadEnraizamientoService, CalidadEnraizamientoViewService],
})
export class CalidadEnraizamientoModule {}
