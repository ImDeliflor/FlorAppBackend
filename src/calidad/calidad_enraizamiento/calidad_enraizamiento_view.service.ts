import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalidadEnraizamientoView } from './entities/calidad_enraizamiento_view.entity';

@Injectable()
export class CalidadEnraizamientoViewService {
  constructor(
    @InjectRepository(CalidadEnraizamientoView)
    private readonly viewRepository: Repository<CalidadEnraizamientoView>,
  ) {}

  findAll() {
    return this.viewRepository.find();
  }
}
