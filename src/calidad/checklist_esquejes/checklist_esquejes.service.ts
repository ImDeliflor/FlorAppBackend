import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChecklistEsqueje } from './checklist_esquejes.entity';
import { Repository } from 'typeorm';
import { CreateChecklistEsquejeDTO } from './dto/create-checklist-esqueje.dto';
import { UpdateChecklistEsquejeDTO } from './dto/update-checklist-esqueje.dto';

@Injectable()
export class ChecklistEsquejesService {
  constructor(
    @InjectRepository(ChecklistEsqueje)
    private checklistEsquejeRepository: Repository<ChecklistEsqueje>,
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
}
