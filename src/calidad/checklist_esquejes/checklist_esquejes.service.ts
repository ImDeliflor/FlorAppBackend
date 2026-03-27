import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChecklistEsqueje } from './checklist_esquejes.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateChecklistEsquejeDTO } from './dto/create-checklist-esqueje.dto';
import { UpdateChecklistEsquejeDTO } from './dto/update-checklist-esqueje.dto';

@Injectable()
export class ChecklistEsquejesService {
  constructor(
    @InjectRepository(ChecklistEsqueje)
    private checklistEsquejeRepository: Repository<ChecklistEsqueje>,
    private readonly dataSource: DataSource,
  ) {}

  create(checklistEsqueje: CreateChecklistEsquejeDTO) {
    const newCheck = this.checklistEsquejeRepository.create(checklistEsqueje);
    return this.checklistEsquejeRepository.save(newCheck);
  }

  findAll() {
    return this.checklistEsquejeRepository.find();
  }

  async updateChecks(id: number, data: UpdateChecklistEsquejeDTO) {
    await this.checklistEsquejeRepository.update(id, data);
    return this.checklistEsquejeRepository.findOne({ where: { id_che: id } });
  }

  // PROCESOS TRANSACCIONALES
  async processChecklists(dto: CreateChecklistEsquejeDTO[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Guardar todos los checklists
      await queryRunner.manager.save(
        dto.map((c) =>
          queryRunner.manager.create(ChecklistEsqueje, {
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
