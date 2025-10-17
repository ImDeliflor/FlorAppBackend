import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCalidadSiembraDto } from './dto/create-calidad-siembra.dto';
import { CalidadSiembra } from './calidad_siembra.entity';

/**
 * Servicio que contiene la lógica de negocio para la entidad CalidadSiembra.
 */
@Injectable()
export class CalidadSiembraService {
  constructor(
    @InjectRepository(CalidadSiembra)
    private readonly calidadSiembraRepository: Repository<CalidadSiembra>,
  ) {}

  /**
   * Crea un nuevo registro de calidad de siembra.
   * @param createDto Datos validados desde el DTO.
   */
  async create(createDto: CreateCalidadSiembraDto): Promise<CalidadSiembra> {
    const nuevoRegistro = this.calidadSiembraRepository.create(createDto);
    return await this.calidadSiembraRepository.save(nuevoRegistro);
  }

  /**
   * Devuelve todos los registros de calidad de siembra.
   */
  async findAll(): Promise<CalidadSiembra[]> {
    return await this.calidadSiembraRepository.find({
      order: { fecha: 'DESC' }, // buena práctica: orden cronológico inverso
    });
  }
}
