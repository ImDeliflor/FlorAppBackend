import { Module } from '@nestjs/common';
import { CalidadEsquejesService } from './calidad_esquejes.service';
import { CalidadEsquejesController } from './calidad_esquejes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalidadEsqueje } from './calidad_esquejes.entity';
import { CalidadEsquejeView } from './calidad_esquejes_view.entity';
import { CalidadEsquejesViewService } from './calidad_esquejes_view.service';

@Module({
  imports: [TypeOrmModule.forFeature([CalidadEsqueje, CalidadEsquejeView])],
  controllers: [CalidadEsquejesController],
  providers: [CalidadEsquejesService, CalidadEsquejesViewService],
})
export class CalidadEsquejesModule {}
