import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variedad } from './variedad.entity';
import { VariedadesController } from './empleados.controller';
import { VariedadesService } from './empleados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Variedad])],
  controllers: [VariedadesController],
  providers: [VariedadesService],
})
export class VariedadesModule {}
