import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendimientoEnraizamientoView } from './entities/rendimiento_enraizamiento_view.entity';

@Injectable()
export class RendimientoEnraizamientoViewService {
  constructor(
    @InjectRepository(RendimientoEnraizamientoView)
    private readonly viewRepository: Repository<RendimientoEnraizamientoView>,
  ) {}

  findAll() {
    return this.viewRepository.find();
  }
}
