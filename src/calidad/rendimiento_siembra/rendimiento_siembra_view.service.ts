import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendimientoSiembraView } from './rendimiento_siembra_view.entity';

/**
 * Servicio encargado de manejar las consultas
 * a la vista informe_rendimiento_siembra_v.
 */
@Injectable()
export class RendimientoSiembraServiceView {
  constructor(
    @InjectRepository(RendimientoSiembraView)
    private readonly informeRepo: Repository<RendimientoSiembraView>,
  ) {}

  /**
   * Retorna todos los registros del informe de rendimiento.
   * Ideal para reportes, dashboards o análisis de productividad.
   */
  async findAll(): Promise<RendimientoSiembraView[]> {
    return await this.informeRepo.find();
  }
}
