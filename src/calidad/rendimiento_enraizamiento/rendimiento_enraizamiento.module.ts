import { Module } from '@nestjs/common';
import { RendimientoEnraizamientoService } from './rendimiento_enraizamiento.service';
import { RendimientoEnraizamientoController } from './rendimiento_enraizamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendimientoEnraizamiento } from './entities/rendimiento_enraizamiento.entity';
import { RendimientoEnraizamientoViewService } from './rendimiento_enraizamiento_view.service';
import { RendimientoEnraizamientoView } from './entities/rendimiento_enraizamiento_view.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RendimientoEnraizamiento,
      RendimientoEnraizamientoView,
    ]),
  ],
  controllers: [RendimientoEnraizamientoController],
  providers: [
    RendimientoEnraizamientoService,
    RendimientoEnraizamientoViewService,
  ],
})
export class RendimientoEnraizamientoModule {}
