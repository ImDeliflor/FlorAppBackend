import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalidadEsqueje } from './calidad_esquejes.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateCalidadEsquejeDTO } from './dto/create-calidad-esqueje.dto';

@Injectable()
export class CalidadEsquejesService {
  constructor(
    @InjectRepository(CalidadEsqueje)
    private calidadEsquejeRepository: Repository<CalidadEsqueje>,
    private readonly dataSource: DataSource,
  ) {}

  create(calidadEsqueje: CreateCalidadEsquejeDTO) {
    const newEvaluacion = this.calidadEsquejeRepository.create(calidadEsqueje);
    return this.calidadEsquejeRepository.save(newEvaluacion);
  }

  findAll() {
    return this.calidadEsquejeRepository.find();
  }

  // PROCESOS TRANSACCIONALES
  async processEvaluaciones(dto: CreateCalidadEsquejeDTO[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Guardar todas las evaluaciones
      await queryRunner.manager.save(
        dto.map((c) =>
          queryRunner.manager.create(CalidadEsqueje, {
            ...c,
          }),
        ),
      );

      // Commit de toda la transaccion
      await queryRunner.commitTransaction();

      return {
        success: true,
        message: '¡Proceso completado exitosamente!',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
