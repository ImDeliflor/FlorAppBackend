import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalidadSiembraView } from './calidad_siembra_view.entity';

/**
 * Servicio encargado de consultar la vista 'informe_calidad_siembra_v'.
 * Solo permite operaciones de lectura.
 */
@Injectable()
export class CalidadSiembraServiceView {
  constructor(
    @InjectRepository(CalidadSiembraView)
    private readonly informeRepository: Repository<CalidadSiembraView>,
  ) {}

  /**
   * Obtiene todos los registros del informe de calidad de siembra.
   * @returns Lista completa del reporte consolidado.
   */
  async findAllReport(): Promise<CalidadSiembraView[]> {
    return await this.informeRepository.find({
      order: { fecha: 'DESC' },
    });
  }
}
