import { Module } from '@nestjs/common';
import { CalidadBandejasService } from './calidad_bandejas.service';
import { CalidadBandejasController } from './calidad_bandejas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalidadBandejas } from './entities/calidad_bandeja.entity';
import { CalidadBandejaView } from './entities/calidad_bandeja_view.entity';
import { CalidadBandejasViewService } from './calidad_bandejas_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([CalidadBandejas, CalidadBandejaView])],
  controllers: [CalidadBandejasController],
  providers: [CalidadBandejasService, CalidadBandejasViewService],
})
export class CalidadBandejasModule {}
