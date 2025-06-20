import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChecklistEsqueje } from './checklist_esquejes.entity';
import { Repository } from 'typeorm';
import { CreateChecklistEsquejeDTO } from './dto/create-checklist-esqueje.dto';

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
}
