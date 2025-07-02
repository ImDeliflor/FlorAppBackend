import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variedad } from './variedad.entity';
import { VariedadesController } from './variedades.controller';
import { VariedadesService } from './variedades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Variedad])],
  controllers: [VariedadesController],
  providers: [VariedadesService],
})
export class VariedadesModule {}
