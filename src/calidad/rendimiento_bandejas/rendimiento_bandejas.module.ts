import { Module } from '@nestjs/common';
import { RendimientoBandejasService } from './rendimiento_bandejas.service';
import { RendimientoBandejasController } from './rendimiento_bandejas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendimientoBandeja } from './entities/rendimiento_bandeja.entity';
import { RendimientoBandejasViewService } from './rendimiento_bandejas_view.service';
import { RendimientoBandejasView } from './entities/rendimiento_bandeja_view.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RendimientoBandeja, RendimientoBandejasView]),
  ],
  controllers: [RendimientoBandejasController],
  providers: [RendimientoBandejasService, RendimientoBandejasViewService],
})
export class RendimientoBandejasModule {}
