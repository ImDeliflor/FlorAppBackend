import { Module } from '@nestjs/common';
import { RendimientoSiembraService } from './rendimiento_siembra.service';
import { RendimientoSiembraController } from './rendimiento_siembra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendimientoSiembra } from './rendimiento_siembra.entity';
import { RendimientoSiembraView } from './rendimiento_siembra_view.entity';
import { RendimientoSiembraServiceView } from './rendimiento_siembra_view.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RendimientoSiembra, RendimientoSiembraView]),
  ],
  providers: [RendimientoSiembraService, RendimientoSiembraServiceView],
  controllers: [RendimientoSiembraController],
})
export class RendimientoSiembraModule {}
