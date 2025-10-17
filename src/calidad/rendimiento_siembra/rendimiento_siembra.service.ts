import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRendimientoSiembraDto } from './dto/create-rendimiento-siembra.dto';
import { RendimientoSiembra } from './rendimiento_siembra.entity';

/**
 * Servicio que maneja la lógica de negocio del rendimiento de siembra.
 * Se encarga de las operaciones CRUD sobre la base de datos.
 */
@Injectable()
export class RendimientoSiembraService {
  constructor(
    @InjectRepository(RendimientoSiembra)
    private readonly rendimientoSiembraRepository: Repository<RendimientoSiembra>,
  ) {}

  /**
   * Crea un nuevo registro de rendimiento de siembra en la base de datos.
   * @param createDto Datos del registro a crear
   * @returns El registro creado
   */
  async create(
    createDto: CreateRendimientoSiembraDto,
  ): Promise<RendimientoSiembra> {
    const nuevoRegistro = this.rendimientoSiembraRepository.create(createDto);
    return await this.rendimientoSiembraRepository.save(nuevoRegistro);
  }

  /**
   * Obtiene todos los registros de rendimiento de siembra.
   * Ordenados por fecha descendente.
   */
  async findAll(): Promise<RendimientoSiembra[]> {
    return await this.rendimientoSiembraRepository.find({
      order: { fecha: 'DESC' },
    });
  }
}
