import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChecklistEsquejeView } from './checklist_esquejes_view.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChecklistEsquejesViewService {
  constructor(
    @InjectRepository(ChecklistEsquejeView)
    private calidadEsquejeViewRepository: Repository<ChecklistEsquejeView>,
  ) {}

  findAll() {
    return this.calidadEsquejeViewRepository.find();
  }
}
