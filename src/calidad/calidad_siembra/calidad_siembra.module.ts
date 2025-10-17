import { Module } from '@nestjs/common';
import { CalidadSiembraService } from './calidad_siembra.service';
import { CalidadSiembraController } from './calidad_siembra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalidadSiembra } from './calidad_siembra.entity';
import { CalidadSiembraView } from './calidad_siembra_view.entity';
import { CalidadSiembraServiceView } from './calidad_siembra_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([CalidadSiembra, CalidadSiembraView])],
  providers: [CalidadSiembraService, CalidadSiembraServiceView],
  controllers: [CalidadSiembraController],
})
export class CalidadSiembraModule {}
