import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalidadEsquejeView } from './calidad_esquejes_view.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalidadEsquejesViewService {
  constructor(
    @InjectRepository(CalidadEsquejeView)
    private calidadEsquejeViewRepository: Repository<CalidadEsquejeView>,
  ) {}

  findAll() {
    return this.calidadEsquejeViewRepository.find();
  }
}
